import moviesData from '../data/movies.json';

/**
 * 사용자의 영화 반응 목록과 MBTI 정보를 기반으로 MVTI를 계산하는 함수
 * @param {Array} reactions - UserMovieReaction 배열
 * @param {string|null} mbti - 사용자의 MBTI (ex: 'INFP', 'ESTJ')
 * @returns {object} { mvtiCode, scores: { fictionReality, highLowTempo, emotionIdea, openClosure }, confidence, stats: { totalCount, likeCount, dislikeCount, genreCount } }
 */
export function calculateMvti(reactions, mbti) {
  // 1. 유효한 반응 필터링 (seen 상태이고, sentiment가 like 또는 dislike인 경우만 반영)
  const validReactions = reactions.filter(
    (r) => r.watchStatus === 'seen' && (r.sentiment === 'like' || r.sentiment === 'dislike')
  );

  const totalCount = validReactions.length;
  const likeCount = validReactions.filter((r) => r.sentiment === 'like').length;
  const dislikeCount = validReactions.filter((r) => r.sentiment === 'dislike').length;

  // 장르 통계용
  const uniqueGenres = new Set();
  validReactions.forEach((r) => {
    const movie = moviesData.find((m) => m.id === r.movieId);
    if (movie && movie.primaryGenre) {
      uniqueGenres.add(movie.primaryGenre);
    }
  });
  const genreCount = uniqueGenres.size;

  // 기본값 (반응이 없을 때)
  let rawScores = {
    fictionReality: 50,
    highLowTempo: 50,
    emotionIdea: 50,
    openClosure: 50,
  };

  let totalWeight = 0;

  if (totalCount > 0) {
    let sumFR = 0;
    let sumHL = 0;
    let sumEI = 0;
    let sumOC = 0;

    validReactions.forEach((r) => {
      const movie = moviesData.find((m) => m.id === r.movieId);
      if (!movie) return;

      // 반응에 따른 가중치 산출
      let weight = 0;
      if (r.sentiment === 'like') {
        weight = r.strength === 3 ? 1.5 : r.strength === 2 ? 1.0 : 0.7;
      } else if (r.sentiment === 'dislike') {
        weight = r.strength === 3 ? -1.5 : r.strength === 2 ? -1.0 : -0.7;
      }

      const absWeight = Math.abs(weight);
      totalWeight += absWeight;

      // 보정 점수 계산: 불호일 경우 반대 성향(100 - 점수)으로 계산
      const isLike = weight > 0;
      const movieFR = isLike ? movie.fictionReality : 100 - movie.fictionReality;
      const movieHL = isLike ? movie.highLowTempo : 100 - movie.highLowTempo;
      const movieEI = isLike ? movie.emotionIdea : 100 - movie.emotionIdea;
      const movieOC = isLike ? movie.openClosure : 100 - movie.openClosure;

      sumFR += movieFR * absWeight;
      sumHL += movieHL * absWeight;
      sumEI += movieEI * absWeight;
      sumOC += movieOC * absWeight;
    });

    if (totalWeight > 0) {
      rawScores = {
        fictionReality: sumFR / totalWeight,
        highLowTempo: sumHL / totalWeight,
        emotionIdea: sumEI / totalWeight,
        openClosure: sumOC / totalWeight,
      };
    }
  }

  // 2. MBTI 기반 보정치 계산 (선택 수가 20개 미만이고 MBTI 정보가 있는 경우)
  let mbtiScores = null;
  let p = 0; // MBTI 반영 비중

  if (mbti && mbti.length === 4) {
    // MBTI 각 축 매핑
    // F-R (N: Fiction 80, S: Reality 20)
    // H-L (E: High 70, I: Low 30)
    // E-I (F: Emotion 70, T: Idea 30)
    // O-C (P: Open 70, J: Closure 30)
    const [eI, nS, tF, jP] = mbti.toUpperCase().split('');
    mbtiScores = {
      fictionReality: nS === 'N' ? 80 : 20,
      highLowTempo: eI === 'E' ? 70 : 30,
      emotionIdea: tF === 'F' ? 70 : 30,
      openClosure: jP === 'P' ? 70 : 30,
    };

    if (totalCount <= 6) {
      p = 0.15; // 15%
    } else if (totalCount <= 12) {
      p = 0.05; // 5%
    } else if (totalCount < 20) {
      p = 0.02; // 2%
    } else {
      p = 0.0; // 0%
    }
  }

  // 최종 점수 (가중평균 + MBTI 보정)
  const finalScores = {
    fictionReality: Math.round((1 - p) * rawScores.fictionReality + p * (mbtiScores?.fictionReality ?? 50)),
    highLowTempo: Math.round((1 - p) * rawScores.highLowTempo + p * (mbtiScores?.highLowTempo ?? 50)),
    emotionIdea: Math.round((1 - p) * rawScores.emotionIdea + p * (mbtiScores?.emotionIdea ?? 50)),
    openClosure: Math.round((1 - p) * rawScores.openClosure + p * (mbtiScores?.openClosure ?? 50)),
  };

  // 3. MVTI 4글자 코드 산출 (F/R, H/L, E/I, O/C)
  const charFR = finalScores.fictionReality >= 50 ? 'F' : 'R';
  const charHL = finalScores.highLowTempo >= 50 ? 'H' : 'L';
  const charEI = finalScores.emotionIdea >= 50 ? 'E' : 'I';
  const charOC = finalScores.openClosure >= 50 ? 'O' : 'C';

  const mvtiCode = `M-${charFR}${charHL}${charEI}${charOC}`;

  // 4. 신뢰도(Confidence) 계산
  // A. 평가 개수 기여도 (최대 50점, 12편 이상 완료 시 만점)
  const scoreCount = Math.min(totalCount / 12, 1.0) * 50;

  // B. 장르 다양성 기여도 (최대 30점, 서로 다른 4개 장르 이상 평가 시 만점)
  const scoreGenre = Math.min(genreCount / 4, 1.0) * 30;

  // C. 축 편향도 기여도 (최대 20점, 50점에서 멀어질수록 고확신)
  const avgBias =
    (Math.abs(finalScores.fictionReality - 50) +
      Math.abs(finalScores.highLowTempo - 50) +
      Math.abs(finalScores.emotionIdea - 50) +
      Math.abs(finalScores.openClosure - 50)) /
    4;
  const scoreBias = (avgBias / 50) * 20;

  const confidence = Math.min(Math.max(Math.round(scoreCount + scoreGenre + scoreBias), 20), 100);

  return {
    mvtiCode,
    scores: finalScores,
    confidence,
    stats: {
      totalCount,
      likeCount,
      dislikeCount,
      genreCount,
    },
  };
}
