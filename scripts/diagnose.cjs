const m = require('../src/data/movies.json');

// 1. posterPath가 null, 빈 문자열, 또는 http로 시작하지 않는 영화
const badPoster = m.filter(x => !x.posterPath || x.posterPath === '' || !x.posterPath.startsWith('http'));
console.log('=== 포스터 URL이 비정상인 영화 (' + badPoster.length + '편) ===');
badPoster.forEach(x => {
  console.log(`  ID: ${x.id} | 제목: ${x.titleKo} | 원제: ${x.originalTitle} | posterPath: ${x.posterPath} | 언어: ${x.originalLanguage}`);
});

// 2. titleKo가 없거나 비한국어인 영화 (아랍 문자 등)
const noKoTitle = m.filter(x => !x.titleKo || x.titleKo === x.originalTitle);
console.log('\n=== 한국어 제목이 없거나 원제와 동일한 영화 (' + noKoTitle.length + '편) ===');
noKoTitle.forEach(x => {
  console.log(`  ID: ${x.id} | titleKo: ${x.titleKo} | originalTitle: ${x.originalTitle} | 언어: ${x.originalLanguage} | 장르: ${x.primaryGenre}`);
});

// 3. "Favela", "Sur un" 검색
const suspects = m.filter(x => {
  const t = (x.titleKo || '') + (x.originalTitle || '');
  return t.toLowerCase().includes('favela') || t.toLowerCase().includes('sur un');
});
console.log('\n=== "Favela" 또는 "Sur un" 포함 영화 (' + suspects.length + '편) ===');
suspects.forEach(x => {
  console.log(`  ID: ${x.id} | titleKo: ${x.titleKo} | originalTitle: ${x.originalTitle} | posterPath: ${x.posterPath}`);
});

// 4. 아랍어/비라틴 문자가 포함된 titleKo
const arabicPattern = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
const arabicTitles = m.filter(x => arabicPattern.test(x.titleKo || '') || arabicPattern.test(x.originalTitle || ''));
console.log('\n=== 아랍 문자가 포함된 영화 (' + arabicTitles.length + '편) ===');
arabicTitles.forEach(x => {
  console.log(`  ID: ${x.id} | titleKo: ${x.titleKo} | originalTitle: ${x.originalTitle} | posterPath: ${x.posterPath}`);
});

// 5. 전체 영화 수 및 장르 분포
console.log('\n=== 전체 영화 수: ' + m.length + ' ===');
const genreMap = {};
m.forEach(x => { genreMap[x.primaryGenre] = (genreMap[x.primaryGenre] || 0) + 1; });
console.log('장르 분포:', JSON.stringify(genreMap, null, 2));
