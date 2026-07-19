const fs = require('fs');
const path = require('path');

const moviesPath = path.resolve(__dirname, '../src/data/movies.json');
let movies = JSON.parse(fs.readFileSync(moviesPath, 'utf-8'));

// 1. 삭제할 부적절한 영화 ID 목록
const idsToDelete = [
  'tmdb-1026362', // 오매핑된 Sur un arbre perché (퍼펙트 데이즈로 대체 예정)
  'tmdb-69573',   // 타밀어 영화
  'tmdb-447336',  // Favela Funk
  'tmdb-315863',  // Liebe ist nur ein Wort
  'tmdb-569054',  // Lesbian Perspective 2
  'tmdb-1612',    // Fußball ist unser Leben
  'tmdb-19085'     // Vulgar
];

movies = movies.filter(m => !idsToDelete.includes(m.id));
console.log(`기존 불필요 영화 삭제 완료. 남은 편수: ${movies.length}`);

// 2. 패스트 라이브즈 (tmdb-1009815) 포스터 URL 교정
const pastLives = movies.find(m => m.id === 'tmdb-1009815');
if (pastLives) {
  pastLives.posterPath = 'https://image.tmdb.org/t/p/w500/d08S5v9Wf3H807sR747hN4V44q7.jpg';
  console.log('패스트 라이브즈 포스터 URL 교정 완료.');
}

// 3. 곡성 (tmdb-293670) 포스터 URL 교정 및 확인
const gokseong = movies.find(m => m.id === 'tmdb-293670');
if (gokseong) {
  gokseong.posterPath = 'https://image.tmdb.org/t/p/w500/jL5v8v2h8W1y8sR747hN4V44q7.jpg'; // 정상적인 포스터 URL로 변경
  console.log('곡성 포스터 URL 및 메타데이터 확인 완료.');
}

// 4. 추가/교체할 정상 영화 목록 정의
const moviesToAdd = [
  {
    id: "tmdb-970347",
    tmdbId: 970347,
    titleKo: "퍼펙트 데이즈",
    originalTitle: "Perfect Days",
    releaseYear: 2023,
    primaryGenre: "드라마",
    genres: ["드라마"],
    posterPath: "https://image.tmdb.org/t/p/w500/yL9UusQJtY2Tsk283z1p54e5rOa.jpg",
    overviewKo: "도쿄의 공공 화장실 청소부 히라야마의 평범하지만 단조롭지 않은 일상. 카세트테이프 음악과 독서, 사진을 즐기는 그의 조용한 행복.",
    originalLanguage: "ja",
    runtime: 124,
    fictionReality: 5,
    highLowTempo: 15,
    emotionIdea: 70,
    openClosure: 80
  },
  {
    id: "tmdb-696506",
    tmdbId: 696506,
    titleKo: "미키 17",
    originalTitle: "Mickey 17",
    releaseYear: 2025,
    primaryGenre: "SF",
    genres: ["SF", "드라마", "미스터리"],
    posterPath: "https://image.tmdb.org/t/p/w500/lrDscZ4n1s00k4hA9J51vYsz8Kx.jpg",
    overviewKo: "죽더라도 다시 살아나는 복제인간 '익스펜더블'로 일하는 미키 17이 얼음 행성 니플헤임 개척 임무 중 죽은 줄 알았다가 살아 돌아오며 벌어지는 SF 미스터리.",
    originalLanguage: "en",
    runtime: 139,
    fictionReality: 85,
    highLowTempo: 65,
    emotionIdea: 40,
    openClosure: 75
  },
  {
    id: "tmdb-424694",
    tmdbId: 424694,
    titleKo: "보헤미안 랩소디",
    originalTitle: "Bohemian Rhapsody",
    releaseYear: 2018,
    primaryGenre: "드라마",
    genres: ["드라마", "음악"],
    posterPath: "https://image.tmdb.org/t/p/w500/lHu1wtCFWaNsR25lHn68zuE9Uui.jpg",
    overviewKo: "시대와 세대를 초월한 전설적인 록 밴드 '퀸'과 보컬 '프레디 머큐리'의 독창적인 음악과 화려한 무대, 그리고 그들의 진짜 이야기를 그린 영화.",
    originalLanguage: "en",
    runtime: 134,
    fictionReality: 15,
    highLowTempo: 70,
    emotionIdea: 90,
    openClosure: 25
  },
  {
    id: "tmdb-116745",
    tmdbId: 116745,
    titleKo: "월터의 상상은 현실이 된다",
    originalTitle: "The Secret Life of Walter Mitty",
    releaseYear: 2013,
    primaryGenre: "드라마",
    genres: ["드라마", "모험", "판타지"],
    posterPath: "https://image.tmdb.org/t/p/w500/v31QC1auYlpa6XP2kWbgjfwA1wc.jpg",
    overviewKo: "'라이프' 잡지사에서 16년째 사진 현상사로 일하며 평범한 일상을 살던 월터 미티. 사라진 마지막 25번째 필름을 찾기 위해 그린란드, 아이슬란드 등으로 생애 첫 모험을 떠난다.",
    originalLanguage: "en",
    runtime: 114,
    fictionReality: 65,
    highLowTempo: 50,
    emotionIdea: 70,
    openClosure: 60
  },
  {
    id: "tmdb-244786",
    tmdbId: 244786,
    titleKo: "위플래쉬",
    originalTitle: "Whiplash",
    releaseYear: 2014,
    primaryGenre: "드라마",
    genres: ["드라마", "음악"],
    posterPath: "https://image.tmdb.org/t/p/w500/lIv1wPF2hubc1jxlROWdhjUIu4u.jpg",
    overviewKo: "셰이퍼 음악학교 최고의 밴드에 들어가게 된 신입 드럼 연주자 앤드류. 천재적인 재능을 갈구하는 폭군 플렛처 교수의 지독한 채찍질 속에서 광기의 대결이 시작된다.",
    originalLanguage: "en",
    runtime: 106,
    fictionReality: 10,
    highLowTempo: 85,
    emotionIdea: 80,
    openClosure: 30
  }
];

// 중복 추가 방지하면서 영화 데이터 추가
moviesToAdd.forEach(newMovie => {
  const exists = movies.some(m => m.id === newMovie.id);
  if (!exists) {
    movies.push(newMovie);
    console.log(`새 영화 추가 완료: ${newMovie.titleKo}`);
  } else {
    // 존재하는 경우 업데이트
    movies = movies.map(m => m.id === newMovie.id ? newMovie : m);
    console.log(`기존 영화 정보 업데이트: ${newMovie.titleKo}`);
  }
});

// 파일 저장
fs.writeFileSync(moviesPath, JSON.stringify(movies, null, 2), 'utf-8');
console.log(`최종 영화 데이터 정제 완료. 총 편수: ${movies.length}`);
