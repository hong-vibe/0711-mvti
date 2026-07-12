import moviesData from '../data/movies.json';

/**
 * 날짜 시드 문자열을 해시 숫자로 변환하는 단순 해시 함수
 * @param {string} str 날짜 문자열 (ex: '2026-07-12')
 * @returns {number}
 */
function cyrb128(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return (h >>> 0);
}

/**
 * 유클리드 거리를 기반으로 타겟 취향 점수와 영화들 간의 거리를 계산하고 정렬된 리스트를 반환
 * @param {object} targetScores 타겟 취향 벡터 { fictionReality, highLowTempo, emotionIdea, openClosure }
 * @param {Array} candidateMovies 후보 영화 목록
 * @returns {Array} 거리와 매칭률이 가미된 영화 배열
 */
function getMoviesByDistance(targetScores, candidateMovies) {
  return candidateMovies.map((movie) => {
    const distFR = targetScores.fictionReality - movie.fictionReality;
    const distHL = targetScores.highLowTempo - movie.highLowTempo;
    const distEI = targetScores.emotionIdea - movie.emotionIdea;
    const distOC = targetScores.openClosure - movie.openClosure;

    const distance = Math.sqrt(
      distFR * distFR + distHL * distHL + distEI * distEI + distOC * distOC
    );

    // 거리 기반 매칭 점수 계산 (최대 거리 200 기준 정규화)
    const matchPercentage = Math.round(Math.max(100 - (distance / 200) * 100, 0));

    return {
      ...movie,
      distance,
      matchPercentage,
    };
  }).sort((a, b) => a.distance - b.distance);
}

/**
 * 일일 추천 영화 3편을 계산하는 엔진
 * @param {object} scores 사용자의 MVTI 4축 점수
 * @param {Array} evaluatedMovieIds 이미 평가한(반응이 남겨진) 영화 ID 목록
 * @param {string} dailySeed 날짜 시드 (ex: '2026-07-12')
 * @returns {object} { bestMatch, expansion, serendipity } 각각 영화 객체 및 추천 설명
 */
export function getDailyRecommendations(scores, evaluatedMovieIds = [], dailySeed) {
  const seedHash = cyrb128(dailySeed);
  
  // 평가한 영화를 제외한 후보 영화 풀 확보
  const candidates = moviesData.filter((movie) => !evaluatedMovieIds.includes(movie.id));

  // 후보 영화가 전혀 없을 때 대비 폴백 처리
  if (candidates.length < 3) {
    // 평가된 영화라도 포함해서 폴백을 생성
    return {
      bestMatch: { movie: moviesData[0] || null, reason: '안정적인 정밀 매칭 (후보 부족으로 인한 전체 풀 매칭)' },
      expansion: { movie: moviesData[1] || null, reason: '새로운 장르적 호기심 제안' },
      serendipity: { movie: moviesData[2] || null, reason: '일상에서 탈피하는 의외의 조우' },
    };
  }

  // -------------------------------------------------------------
  // 1. 슬롯 1: 정확 추천 (Best Match)
  // -------------------------------------------------------------
  // 사용자의 취향 벡터에 가장 어울리는 영화 순으로 정렬
  const bestMatchSorted = getMoviesByDistance(scores, candidates);
  // 매일 아침 다른 추천이 되도록 상위 5개 중 날짜 시드로 셔플하여 한 개 선택
  const topBestPool = bestMatchSorted.slice(0, Math.min(5, bestMatchSorted.length));
  const bestMatchIndex = seedHash % topBestPool.length;
  const bestMovie = topBestPool[bestMatchIndex];

  // -------------------------------------------------------------
  // 2. 슬롯 2: 취향 확장 (Taste Expansion)
  // -------------------------------------------------------------
  // 사용자의 4축 중 가장 확신도가 낮은(50점에 가장 가까운) 성향을 뒤집어 타겟 벡터 설정
  const diffs = [
    { key: 'fictionReality', val: Math.abs(scores.fictionReality - 50) },
    { key: 'highLowTempo', val: Math.abs(scores.highLowTempo - 50) },
    { key: 'emotionIdea', val: Math.abs(scores.emotionIdea - 50) },
    { key: 'openClosure', val: Math.abs(scores.openClosure - 50) },
  ];
  // 50점에 가장 가까운 축 찾기
  diffs.sort((a, b) => a.val - b.val);
  const weakestAxis = diffs[0].key;

  // 타겟 벡터 복사 및 약한 축 반전
  const expansionTargetScores = { ...scores };
  expansionTargetScores[weakestAxis] = 100 - scores[weakestAxis];

  // 이미 정확 추천에서 선택한 영화는 후보에서 배제
  const expansionCandidates = candidates.filter((m) => m.id !== bestMovie.id);
  const expansionSorted = getMoviesByDistance(expansionTargetScores, expansionCandidates);
  
  // 상위 5개 풀 중에서 날짜 시드로 매칭
  const topExpansionPool = expansionSorted.slice(0, Math.min(5, expansionSorted.length));
  const expansionIndex = (seedHash + 7) % topExpansionPool.length; // 시드에 변형을 주어 중복 해시 인덱스 방지
  const expansionMovie = topExpansionPool[expansionIndex];

  // -------------------------------------------------------------
  // 3. 슬롯 3: 의외의 발견 (Serendipity)
  // -------------------------------------------------------------
  // 사용자의 취향 벡터와 완벽히 대척점에 있는 반대 벡터(100 - 점수)를 설정하여, 완전 새로운 체험 제공
  const serendipityTargetScores = {
    fictionReality: 100 - scores.fictionReality,
    highLowTempo: 100 - scores.highLowTempo,
    emotionIdea: 100 - scores.emotionIdea,
    openClosure: 100 - scores.openClosure,
  };

  // 정확 추천 및 취향 확장 영화 배제
  const serendipityCandidates = candidates.filter(
    (m) => m.id !== bestMovie.id && m.id !== expansionMovie.id
  );
  
  const serendipitySorted = getMoviesByDistance(serendipityTargetScores, serendipityCandidates);
  
  // 반대 벡터와 가까운 상위 5개 영화 중 선택
  const topSerendipityPool = serendipitySorted.slice(0, Math.min(5, serendipitySorted.length));
  const serendipityIndex = (seedHash + 13) % topSerendipityPool.length;
  const serendipityMovie = topSerendipityPool[serendipityIndex];

  return {
    bestMatch: {
      movie: bestMovie,
      reason: `당신의 영화 취향성향에 ${bestMovie.matchPercentage}% 일치합니다. 선호 장르와 정밀 매칭되는 시그니처 추천입니다.`,
    },
    expansion: {
      movie: expansionMovie,
      reason: `가장 유동적인 성향 축(${weakestAxis === 'fictionReality' ? '현실/가상' : weakestAxis === 'highLowTempo' ? '자극/속도' : weakestAxis === 'emotionIdea' ? '감정/이성' : '완결/여운'})을 한 단계 비틀어 새로운 지평을 넓히는 확장 제안입니다.`,
    },
    serendipity: {
      movie: serendipityMovie,
      reason: `당신의 기존 성향과 대조되는 반전 취향입니다. 가끔은 평소 보지 않던 시선에서 뜻밖의 카타르시스를 발견해 보세요.`,
    },
  };
}
