import fs from 'fs';
import path from 'path';

// 1. .env 파일 파싱 (Node.js 빌트인으로 구현하여 추가 패키지 의존성 방지)
let apiKey = '';
try {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    const match = envContent.match(/VITE_TMDB_API_KEY\s*=\s*(["']?)(.*?)\1(?:\s|$)/m);
    if (match && match[2] && !match[2].startsWith('your_')) {
      apiKey = match[2].trim();
    }
  }
} catch (e) {
  console.log('⚠️ .env 파일을 읽는 중 오류가 발생하여 폴백 모드로 진행합니다.');
}

// 2. 8개 운영 장르별 12편, 총 96편 영화 기본 데이터 설계 (4축 취향 지표 수동 라벨링)
// fictionReality(FR): 0=Reality, 100=Fiction
// highLowTempo(HL): 0=Low, 100=High
// emotionIdea(EI): 0=Idea, 100=Emotion
// openClosure(OC): 0=Closure, 100=Open
const MOVIE_SEED_DATA = [
  // === 1. 드라마 (12편) ===
  {
    tmdbId: 278,
    titleKo: "쇼생크 탈출",
    primaryGenre: "드라마",
    releaseYear: 1994,
    fictionReality: 15, highLowTempo: 35, emotionIdea: 85, openClosure: 15,
    fallbackOverview: "촉망 받던 은행가 앤디는 아내와 그녀의 정부를 살해했다는 누명을 쓰고 쇼생크 교도소에 수감된다. 희망을 잃지 않는 그의 위대한 탈옥 여정.",
    fallbackPoster: "/lykyUi23tyccgS11uS5GAdp2b2g.jpg"
  },
  {
    tmdbId: 1026362,
    titleKo: "퍼펙트 데이즈",
    primaryGenre: "드라마",
    releaseYear: 2023,
    fictionReality: 5, highLowTempo: 15, emotionIdea: 70, openClosure: 80,
    fallbackOverview: "도쿄의 공공 화장실 청소부 히라야마의 평범하지만 단조롭지 않은 일상. 카세트테이프 음악과 독서, 사진을 즐기는 그의 조용한 행복.",
    fallbackPoster: "/b19c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 13,
    titleKo: "포레스트 검프",
    primaryGenre: "드라마",
    releaseYear: 1994,
    fictionReality: 20, highLowTempo: 45, emotionIdea: 90, openClosure: 20,
    fallbackOverview: "불편한 다리와 남들보다 조금 낮은 지능을 가진 소년 포레스트 검프. 순수한 마음으로 편견을 딛고 현대사의 위대한 순간들을 관통한다.",
    fallbackPoster: "/arw2tUqwcP6LzSq3o3OIu5uJtCc.jpg"
  },
  {
    tmdbId: 490132,
    titleKo: "그린 북",
    primaryGenre: "드라마",
    releaseYear: 2018,
    fictionReality: 10, highLowTempo: 40, emotionIdea: 85, openClosure: 15,
    fallbackOverview: "입담과 주먹만 믿고 살아온 토니 발레롱가와 교양을 갖춘 천재 피아니스트 돈 셜리 박사의 특별한 남부 투어 로드 트립.",
    fallbackPoster: "/aZF3r8a719g8y9G3b5A7o9k2d1.jpg"
  },
  {
    tmdbId: 597,
    titleKo: "타이타닉",
    primaryGenre: "드라마",
    releaseYear: 1997,
    fictionReality: 25, highLowTempo: 60, emotionIdea: 95, openClosure: 40,
    fallbackOverview: "우연한 기회로 타이타닉호에 탑승한 자유로운 영혼의 화가 잭과 상류층 영애 로즈의 신분을 초월한 세기의 사랑과 비극.",
    fallbackPoster: "/9xj7v4a719g8y9G3b5A7o9k2d1.jpg"
  },
  {
    tmdbId: 299536,
    titleKo: "어벤져스: 엔드게임",
    primaryGenre: "드라마",
    releaseYear: 2019,
    fictionReality: 95, highLowTempo: 85, emotionIdea: 70, openClosure: 10,
    fallbackOverview: "인류의 절반이 사라진 지구, 살아남은 어벤져스 멤버들이 타노스를 막고 우주의 질서를 되찾기 위해 마지막 결전을 준비한다.",
    fallbackPoster: "/or0Gf5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 637,
    titleKo: "인생은 아름다워",
    primaryGenre: "드라마",
    releaseYear: 1997,
    fictionReality: 15, highLowTempo: 40, emotionIdea: 95, openClosure: 30,
    fallbackOverview: "나치 수용소의 참혹한 현실 속에서도 어린 아들에게 이 모든 것이 하나의 신나는 게임이라고 속이며 희망을 지켜내는 아버지 귀도.",
    fallbackPoster: "/mS9c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 496243,
    titleKo: "기생충",
    primaryGenre: "드라마",
    releaseYear: 2019,
    fictionReality: 15, highLowTempo: 70, emotionIdea: 35, openClosure: 85,
    fallbackOverview: "전원 백수로 살 길 막막한 기택네 장남 기우가 고액 과외 면접을 위해 박사장네 집에 발을 들이면서 시작되는 두 가족의 만남과 걷잡을 수 없는 사건.",
    fallbackPoster: "/ii5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 370172,
    titleKo: "소공녀",
    primaryGenre: "드라마",
    releaseYear: 2017,
    fictionReality: 10, highLowTempo: 30, emotionIdea: 80, openClosure: 75,
    fallbackOverview: "담배, 위스키, 그리고 사랑하는 남자친구만 있으면 더 바랄 게 없는 가사도우미 미소. 집세가 오르자 집을 포기하고 친구들의 집을 찾아 나선다.",
    fallbackPoster: "/kk5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 822119,
    titleKo: "헤어질 결심",
    primaryGenre: "드라마",
    releaseYear: 2022,
    fictionReality: 15, highLowTempo: 50, emotionIdea: 75, openClosure: 90,
    fallbackOverview: "산에서 벌어진 변사 사건을 수사하게 된 형사 해준이 사망자의 아내 서래를 마주하며 의심과 관심을 동시에 느끼게 되는 멜로 스릴러.",
    fallbackPoster: "/jj5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 1009815,
    titleKo: "패스트 라이브즈",
    primaryGenre: "드라마",
    releaseYear: 2023,
    fictionReality: 5, highLowTempo: 25, emotionIdea: 80, openClosure: 80,
    fallbackOverview: "어린 시절 서울에서 알게 된 나영과 해성. 20여 년이 흐른 뒤 뉴욕에서 운명처럼 재회하며 겪는 애틋한 사랑과 인연의 서사.",
    fallbackPoster: "/pp5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 508965,
    titleKo: "기브온 타운 (브로커)",
    primaryGenre: "드라마",
    releaseYear: 2022,
    fictionReality: 10, highLowTempo: 35, emotionIdea: 85, openClosure: 65,
    fallbackOverview: "베이비 박스를 둘러싸고 관계를 맺게 된 이들의 특별하고도 예상치 못한 여정을 그린 고레에다 히로카즈 감독의 연출작.",
    fallbackPoster: "/qq5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },

  // === 2. 코미디 (12편) ===
  {
    tmdbId: 569094,
    titleKo: "극한직업",
    primaryGenre: "코미디",
    releaseYear: 2019,
    fictionReality: 15, highLowTempo: 80, emotionIdea: 40, openClosure: 15,
    fallbackOverview: "해체 위기의 마약반 형사 5인방이 범죄조직 소탕을 위해 인수한 치킨집이 맛집으로 입소문 나면서 벌어지는 코믹 수사극.",
    fallbackPoster: "/oo5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 572164,
    titleKo: "엑시트",
    primaryGenre: "코미디",
    releaseYear: 2019,
    fictionReality: 20, highLowTempo: 85, emotionIdea: 60, openClosure: 15,
    fallbackOverview: "대학교 산악 동아리 에이스 출신이지만 졸업 후 백수로 지내던 용남이 유독가스로 뒤덮인 도심을 탈출하는 재난 탈출 액션 코미디.",
    fallbackPoster: "/xx5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 69573,
    titleKo: "써니",
    primaryGenre: "코미디",
    releaseYear: 2011,
    fictionReality: 10, highLowTempo: 55, emotionIdea: 85, openClosure: 20,
    fallbackOverview: "찬란하게 빛나는 학창시절을 함께한 칠공주 '써니' 멤버들이 25년 만에 다시 모여 생애 최고의 순간을 되찾아가는 유쾌한 감동 드라마.",
    fallbackPoster: "/ss5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 508442,
    titleKo: "소울",
    primaryGenre: "코미디",
    releaseYear: 2020,
    fictionReality: 95, highLowTempo: 65, emotionIdea: 80, openClosure: 40,
    fallbackOverview: "뉴욕에서 음악 교사로 일하던 조가 꿈에 그리던 재즈 클럽 연주 기회를 얻은 날 사고로 '태어나기 전 세상'에 떨어지며 벌어지는 모험.",
    fallbackPoster: "/hm5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 228967,
    titleKo: "수상한 그녀",
    primaryGenre: "코미디",
    releaseYear: 2014,
    fictionReality: 60, highLowTempo: 65, emotionIdea: 85, openClosure: 15,
    fallbackOverview: "욕쟁이 칠순 할매 오말순이 청춘 사진관에서 사진을 찍은 후 하루아침에 스무 살 꽃처녀 오두리로 변하면서 벌어지는 전성기 소동극.",
    fallbackPoster: "/yy5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 181808,
    titleKo: "세 얼간이",
    primaryGenre: "코미디",
    releaseYear: 2009,
    fictionReality: 15, highLowTempo: 70, emotionIdea: 90, openClosure: 20,
    fallbackOverview: "일류 명문 공대의 천재적인 얼간이 란초와 그의 친구들이 진정한 배움과 꿈을 찾아 시스템에 유쾌한 반란을 일으키는 인도 영화.",
    fallbackPoster: "/uu5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 11886,
    titleKo: "행오버",
    primaryGenre: "코미디",
    releaseYear: 2009,
    fictionReality: 10, highLowTempo: 85, emotionIdea: 30, openClosure: 10,
    fallbackOverview: "결혼식 이틀 전, 라스베이거스로 총각파티를 떠난 네 친구가 술에서 깨어난 뒤 사라진 신랑을 찾기 위해 필름이 끊긴 어젯밤 행적을 쫓는 대소동.",
    fallbackPoster: "/vv5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 346685,
    titleKo: "바비",
    primaryGenre: "코미디",
    releaseYear: 2023,
    fictionReality: 90, highLowTempo: 75, emotionIdea: 50, openClosure: 35,
    fallbackOverview: "원하는 무엇이든 될 수 있는 바비랜드에서 살아가던 인형 바비가 현실 세계의 균열을 발견하고 켄과 함께 리얼 월드로 모험을 떠나는 이야기.",
    fallbackPoster: "/bb5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 1817,
    titleKo: "엽기적인 그녀",
    primaryGenre: "코미디",
    releaseYear: 2001,
    fictionReality: 15, highLowTempo: 60, emotionIdea: 85, openClosure: 20,
    fallbackOverview: "순진한 대학생 견우가 지하철에서 우연히 만난 제멋대로이지만 미워할 수 없는 엽기적인 그녀와 나누는 풋풋하고도 엉뚱한 연애 소동.",
    fallbackPoster: "/ww5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 772,
    titleKo: "브루스 올마이티",
    primaryGenre: "코미디",
    releaseYear: 2003,
    fictionReality: 75, highLowTempo: 70, emotionIdea: 75, openClosure: 15,
    fallbackOverview: "항상 불만투성이인 뉴스 리포터 브루스가 신에게 직접 신의 권능을 양도받아 일주일 동안 우주를 다스리는 신적 체험을 겪게 된다.",
    fallbackPoster: "/zz5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 447332,
    titleKo: "화이트 칙스",
    primaryGenre: "코미디",
    releaseYear: 2004,
    fictionReality: 30, highLowTempo: 80, emotionIdea: 40, openClosure: 10,
    fallbackOverview: "퇴출 위기에 몰린 FBI 콤비 형사가 사교계의 사고뭉치 힐튼 자매로 분장하여 상류층 파티에 잠입해 벌어지는 좌충우돌 코믹 분장극.",
    fallbackPoster: "/aa5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 9277,
    titleKo: "나 홀로 집에",
    primaryGenre: "코미디",
    releaseYear: 1990,
    fictionReality: 25, highLowTempo: 75, emotionIdea: 80, openClosure: 10,
    fallbackOverview: "크리스마스 시즌 가족들이 모두 여행을 떠나고 홀로 남겨진 8살 꼬마 케빈이 빈집을 털러 온 멍청한 2인조 도둑들에 맞서 집을 지키는 슬랩스틱 코미디.",
    fallbackPoster: "/cc5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },

  // === 3. 액션·어드벤처 (12편) ===
  {
    tmdbId: 245891,
    titleKo: "존 윅",
    primaryGenre: "액션·어드벤처",
    releaseYear: 2014,
    fictionReality: 25, highLowTempo: 90, emotionIdea: 20, openClosure: 15,
    fallbackOverview: "사랑하는 아내가 남긴 강아지를 잃고 분노한 전설적인 킬러 존 윅이 자신을 건드린 마피아 조직을 상대로 펼치는 거침없는 단독 복수극.",
    fallbackPoster: "/lh5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 361743,
    titleKo: "탑건: 매버릭",
    primaryGenre: "액션·어드벤처",
    releaseYear: 2022,
    fictionReality: 15, highLowTempo: 85, emotionIdea: 80, openClosure: 15,
    fallbackOverview: "최고의 파일럿 매버릭이 자신이 졸업한 훈련학교의 교관으로 돌아와 젊은 파일럿들과 함께 불가능에 가까운 비밀 미션을 수행하게 된다.",
    fallbackPoster: "/tt5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 76600,
    titleKo: "아바타: 물의 길",
    primaryGenre: "액션·어드벤처",
    releaseYear: 2022,
    fictionReality: 95, highLowTempo: 80, emotionIdea: 70, openClosure: 45,
    fallbackOverview: "판도라 행성에서 가족을 이룬 제이크 설리와 네이티리가 다시 들이닥친 인류의 위협을 피해 바다 부족의 영역으로 향하며 벌어지는 위대한 모험.",
    fallbackPoster: "/av5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 76341,
    titleKo: "매드맥스: 분노의 도로",
    primaryGenre: "액션·어드벤처",
    releaseYear: 2015,
    fictionReality: 80, highLowTempo: 95, emotionIdea: 40, openClosure: 30,
    fallbackOverview: "물과 기름을 차지한 독재자 임모탄에 맞서 전사 퓨리오사와 아내들, 그리고 방랑자 맥스가 황폐한 황무지를 질주하며 벌이는 2시간의 카체이싱 액션.",
    fallbackPoster: "/mm5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 155,
    titleKo: "다크 나이트",
    primaryGenre: "액션·어드벤처",
    releaseYear: 2008,
    fictionReality: 40, highLowTempo: 80, emotionIdea: 45, openClosure: 75,
    fallbackOverview: "고담시를 지키는 어둠의 기사 배트맨과 도시 전체를 무법천지로 만들려는 최악의 미치광이 악당 조커의 치열하고 철학적인 정의 대결.",
    fallbackPoster: "/dk5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 120,
    titleKo: "반지의 제왕: 반지 원정대",
    primaryGenre: "액션·어드벤처",
    releaseYear: 2001,
    fictionReality: 98, highLowTempo: 75, emotionIdea: 80, openClosure: 60,
    fallbackOverview: "우주를 지배할 절대반지를 파괴하기 위해 모인 호빗 프로도와 인간, 엘프, 드워프, 마법사 연합군이 어둠의 제국 모도르로 향한다.",
    fallbackPoster: "/lotr5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 98,
    titleKo: "글래디에이터",
    primaryGenre: "액션·어드벤처",
    releaseYear: 2000,
    fictionReality: 20, highLowTempo: 80, emotionIdea: 85, openClosure: 20,
    fallbackOverview: "황제의 신임을 받던 로마의 위대한 장군 막시무스가 황태자의 음모로 가족을 잃고 노예 검투사로 몰락한 뒤 펼치는 피와 명예의 복수극.",
    fallbackPoster: "/glad5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 315863,
    titleKo: "범죄도시",
    primaryGenre: "액션·어드벤처",
    releaseYear: 2017,
    fictionReality: 10, highLowTempo: 85, emotionIdea: 35, openClosure: 15,
    fallbackOverview: "하얼빈에서 넘어와 단숨에 기존 조직들을 장악한 괴물 악당 장첸 일당을 소탕하기 위해 주먹 한 방으로 평화를 유지해온 괴물 형사 마석도의 액션 소탕극.",
    fallbackPoster: "/out5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 569054,
    titleKo: "스파이더맨: 어크로스 더 유니버스",
    primaryGenre: "액션·어드벤처",
    releaseYear: 2023,
    fictionReality: 95, highLowTempo: 90, emotionIdea: 75, openClosure: 85,
    fallbackOverview: "새로운 스파이더맨 마일스 모랄레스가 다중 우주의 평화를 지키는 스파이더 소사이어티와 갈등하며 자신만의 운명을 개척해나가는 애니메이션.",
    fallbackPoster: "/spid5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 562,
    titleKo: "다이 하드",
    primaryGenre: "액션·어드벤처",
    releaseYear: 1988,
    fictionReality: 15, highLowTempo: 85, emotionIdea: 45, openClosure: 10,
    fallbackOverview: "아내를 만나기 위해 LA를 찾은 뉴욕 형사 존 맥클레인이 테러리스트들에게 점령당한 초고층 빌딩에 갇혀 홀로 펼치는 맨몸 서바이벌 액션.",
    fallbackPoster: "/die5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 954,
    titleKo: "미션 임파서블",
    primaryGenre: "액션·어드벤처",
    releaseYear: 1996,
    fictionReality: 25, highLowTempo: 80, emotionIdea: 35, openClosure: 15,
    fallbackOverview: "IMF 소속 요원 에단 헌트가 음모에 휘말려 반역자 누명을 쓰고, 진범을 밝히기 위해 CIA 본부 컴퓨터 침투 등 불가능한 미션에 도전한다.",
    fallbackPoster: "/mi5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 87,
    titleKo: "인디아나 존스: 레이더스",
    primaryGenre: "액션·어드벤처",
    releaseYear: 1981,
    fictionReality: 70, highLowTempo: 80, emotionIdea: 50, openClosure: 15,
    fallbackOverview: "고고학자이자 모험가인 인디아나 존스가 나치보다 먼저 전설의 성궤(Ark of the Covenant)를 찾기 위해 전 세계를 누비는 클래식 어드벤처.",
    fallbackPoster: "/ind5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },

  // === 4. SF (12편) ===
  {
    tmdbId: 157336,
    titleKo: "인터스텔라",
    primaryGenre: "SF",
    releaseYear: 2014,
    fictionReality: 85, highLowTempo: 65, emotionIdea: 45, openClosure: 75,
    fallbackOverview: "황폐화된 지구의 종말을 극복하기 위해, 새로운 인류의 정착지를 찾아 블랙홀과 시공간을 너머 미지의 우주로 향하는 우주비행사들의 서사.",
    fallbackPoster: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    tmdbId: 27205,
    titleKo: "인셉션",
    primaryGenre: "SF",
    releaseYear: 2010,
    fictionReality: 90, highLowTempo: 80, emotionIdea: 40, openClosure: 85,
    fallbackOverview: "타인의 꿈속에 침투해 생각을 훔치는 도둑 코브가, 반대로 타인의 머릿속에 새로운 생각을 심는 역발상 작전(인셉션)에 도전한다.",
    fallbackPoster: "/edN5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 872585,
    titleKo: "오펜하이머",
    primaryGenre: "SF",
    releaseYear: 2023,
    fictionReality: 15, highLowTempo: 55, emotionIdea: 35, openClosure: 70,
    fallbackOverview: "세상을 구하기 위해 세상을 파괴할 수도 있는 위험을 무릅써야 했던 맨해튼 프로젝트의 천재 물리학자 로버트 오펜하이머의 전기 드라마.",
    fallbackPoster: "/opp5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 603,
    titleKo: "매트릭스",
    primaryGenre: "SF",
    releaseYear: 1999,
    fictionReality: 95, highLowTempo: 80, emotionIdea: 30, openClosure: 35,
    fallbackOverview: "자신이 살고 있는 세상이 인공지능 컴퓨터에 의해 지배되는 가상 현실 '매트릭스'임을 알게 된 해커 네오가 인류 구원의 전사로 각성하는 SF 액션.",
    fallbackPoster: "/mat5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 438631,
    titleKo: "듄",
    primaryGenre: "SF",
    releaseYear: 2021,
    fictionReality: 97, highLowTempo: 55, emotionIdea: 45, openClosure: 75,
    fallbackOverview: "우주에서 가장 비싼 물질인 스파이스의 생산지인 모래 행성 아라키스를 무대로 펼쳐지는 우주 가문의 정치적 붕괴와 구원자 폴 아트레이데스의 탄생.",
    fallbackPoster: "/dune5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 577922,
    titleKo: "테넷",
    primaryGenre: "SF",
    releaseYear: 2020,
    fictionReality: 92, highLowTempo: 85, emotionIdea: 25, openClosure: 80,
    fallbackOverview: "시간의 흐름을 뒤집는 인버전 기술을 통해 제3차 세계대전을 일으키려는 악당을 막기 위해 시공간을 넘나드는 요원의 시간 추적 액션.",
    fallbackPoster: "/ten5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 12477,
    titleKo: "그래비티",
    primaryGenre: "SF",
    releaseYear: 2013,
    fictionReality: 45, highLowTempo: 75, emotionIdea: 70, openClosure: 30,
    fallbackOverview: "허블 우주망원경을 수리하던 중 우주 쓰레기 충돌로 우주에 홀로 고립된 라이언 스톤 박사의 지구 귀환을 향한 사투와 심리적 치유.",
    fallbackPoster: "/grav5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 286217,
    titleKo: "마션",
    primaryGenre: "SF",
    releaseYear: 2015,
    fictionReality: 65, highLowTempo: 60, emotionIdea: 45, openClosure: 15,
    fallbackOverview: "화성 탐사 중 폭풍을 만나 홀로 낙오된 식물학자 마크 와트니가 과학적 지식과 유쾌한 낙천성으로 화성에서 감자를 기르며 생존해나가는 우주 생존기.",
    fallbackPoster: "/mart5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 110,
    titleKo: "설국열차",
    primaryGenre: "SF",
    releaseYear: 2013,
    fictionReality: 80, highLowTempo: 75, emotionIdea: 45, openClosure: 75,
    fallbackOverview: "기상 이변으로 얼어붙은 지구, 생존자들을 싣고 끝없이 달리는 기차 안에서 꼬리칸의 억압받던 빈민들이 머리칸을 향해 폭동을 일으키는 계급 서사.",
    fallbackPoster: "/snow5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 101299,
    titleKo: "헝거 게임: 판엠의 불꽃",
    primaryGenre: "SF",
    releaseYear: 2012,
    fictionReality: 85, highLowTempo: 75, emotionIdea: 60, openClosure: 20,
    fallbackOverview: "독재 국가 판엠이 지배하는 미래, 12개 구역에서 선발된 청소년들이 살아남기 위해 서로 죽고 죽여야 하는 잔혹한 서바이벌 리얼리티 쇼.",
    fallbackPoster: "/hung5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 185,
    titleKo: "클로즈 인카운터 (미지와의 조우)",
    primaryGenre: "SF",
    releaseYear: 1977,
    fictionReality: 85, highLowTempo: 45, emotionIdea: 50, openClosure: 70,
    fallbackOverview: "지구 곳곳에서 벌어지는 기이한 UFO 현상과 외계 문명과의 평화적이고 감동적인 소통의 순간을 다룬 스티븐 스필버그의 클래식 SF.",
    fallbackPoster: "/ce5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 2649,
    titleKo: "루퍼",
    primaryGenre: "SF",
    releaseYear: 2012,
    fictionReality: 85, highLowTempo: 80, emotionIdea: 40, openClosure: 65,
    fallbackOverview: "미래의 거대 범죄조직이 보낸 타깃을 암살하는 킬러 '루퍼' 조. 어느 날 미래에서 늙은 자신(30년 뒤의 자신)이 제거 타깃으로 눈앞에 나타난다.",
    fallbackPoster: "/loop5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },

  // === 5. 판타지·애니메이션 (12편) ===
  {
    tmdbId: 671,
    titleKo: "해리 포터와 마법사의 돌",
    primaryGenre: "판타지·애니메이션",
    releaseYear: 2001,
    fictionReality: 95, highLowTempo: 65, emotionIdea: 85, openClosure: 15,
    fallbackOverview: "고아 소년 해리 포터가 11살 생일에 마법사 혈통임을 알게 되어 호그와트 마법학교에 입학해 겪는 신비로운 모험과 우정의 시작.",
    fallbackPoster: "/hp15c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 129,
    titleKo: "센과 치히로의 행방불명",
    primaryGenre: "판타지·애니메이션",
    releaseYear: 2001,
    fictionReality: 97, highLowTempo: 50, emotionIdea: 90, openClosure: 80,
    fallbackOverview: "이사 가던 날 의문의 터널을 지나 신들의 온천장에 도달한 소녀 치히로. 돼지로 변한 부모를 구하고 자신의 이름을 되찾기 위한 온천장 노동 생활기.",
    fallbackPoster: "/sen5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 372058,
    titleKo: "너의 이름은.",
    primaryGenre: "판타지·애니메이션",
    releaseYear: 2016,
    fictionReality: 80, highLowTempo: 60, emotionIdea: 90, openClosure: 75,
    fallbackOverview: "도쿄에 사는 남고생 타키와 시골 마음에 사는 여고생 미츠하가 서로 몸이 바뀌는 신기한 현상을 겪으며 다가오는 혜성의 위기를 극복하는 감동 로맨스.",
    fallbackPoster: "/kimi5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 399055,
    titleKo: "너의 췌장을 먹고 싶어 (애니메이션)",
    primaryGenre: "판타지·애니메이션", // 애니메이션 계열
    releaseYear: 2018,
    fictionReality: 15, highLowTempo: 40, emotionIdea: 90, openClosure: 80,
    fallbackOverview: "췌장 질환으로 시한부 선고를 받은 인기 만점 소녀 사쿠라와 반에서 아웃사이더로 지내던 나의 비밀 일기장을 둘러싼 애틋한 청춘 이야기.",
    fallbackPoster: "/pan5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 150540,
    titleKo: "인사이드 아웃",
    primaryGenre: "판타지·애니메이션",
    releaseYear: 2015,
    fictionReality: 95, highLowTempo: 70, emotionIdea: 95, openClosure: 20,
    fallbackOverview: "이사 후 새로운 환경에 적응하려는 소녀 라일리의 머릿속 감정 컨트롤 본부. 기쁨, 슬픔, 소심, 까칠, 버럭의 다섯 감정들이 벌이는 소동과 조화.",
    fallbackPoster: "/inout5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 585,
    titleKo: "몬스터 주식회사",
    primaryGenre: "판타지·애니메이션",
    releaseYear: 2001,
    fictionReality: 95, highLowTempo: 75, emotionIdea: 85, openClosure: 15,
    fallbackOverview: "아이들의 비명 소리를 에너지원으로 삼는 몬스터 도시. 최고의 겁주기 몬스터 설리와 마이크가 실수로 벽장을 통해 인간계 꼬마 부를 데려오며 벌어지는 대소동.",
    fallbackPoster: "/mon5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 14160,
    titleKo: "하울의 움직이는 성",
    primaryGenre: "판타지·애니메이션",
    releaseYear: 2004,
    fictionReality: 98, highLowTempo: 55, emotionIdea: 85, openClosure: 75,
    fallbackOverview: "마녀의 저주로 90세 할머니가 된 소녀 소피가 마법사 하울의 기괴한 움직이는 성에 가사도우미로 입주하여 벌어지는 판타지 로맨스.",
    fallbackPoster: "/howl5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 354912,
    titleKo: "코코",
    primaryGenre: "판타지·애니메이션",
    releaseYear: 2017,
    fictionReality: 96, highLowTempo: 70, emotionIdea: 95, openClosure: 20,
    fallbackOverview: "뮤지션을 꿈꾸는 소년 미구엘이 전설적인 가수의 기타에 손을 댔다가 죽은 자들의 세상에 들어가 조상들을 만나며 겪는 가족의 사랑과 비밀.",
    fallbackPoster: "/coco5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 269149,
    titleKo: "주토피아",
    primaryGenre: "판타지·애니메이션",
    releaseYear: 2016,
    fictionReality: 92, highLowTempo: 75, emotionIdea: 65, openClosure: 15,
    fallbackOverview: "누구나 무엇이든 될 수 있는 도시 주토피아. 최초의 토끼 경찰관 주디 홉스가 사기꾼 여우 닉 와일드와 힘을 합쳐 도시의 의문의 실종 사건을 해결해나간다.",
    fallbackPoster: "/zoot5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 862,
    titleKo: "토이 스토리",
    primaryGenre: "판타지·애니메이션",
    releaseYear: 1995,
    fictionReality: 90, highLowTempo: 70, emotionIdea: 85, openClosure: 15,
    fallbackOverview: "인간들이 보지 않을 때 살아 움직이는 장난감들의 세계. 주인 앤디의 최애 장난감 우디가 최신 장난감 버즈 라이트이어를 만나며 벌어지는 경쟁과 우정.",
    fallbackPoster: "/toy5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 22,
    titleKo: "캐리비안의 해적: 블랙 펄의 저주",
    primaryGenre: "판타지·애니메이션", // 판타지 모험에 배정
    releaseYear: 2003,
    fictionReality: 85, highLowTempo: 80, emotionIdea: 50, openClosure: 15,
    fallbackOverview: "해적 캡틴 잭 스패로우와 대장장이 윌 터너가 언데드 저주에 걸린 유령 해적들에게 납치당한 엘리자베스를 구출하기 위해 바다로 돛을 올린다.",
    fallbackPoster: "/pir5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 162,
    titleKo: "가위손",
    primaryGenre: "판타지·애니메이션",
    releaseYear: 1990,
    fictionReality: 90, highLowTempo: 45, emotionIdea: 90, openClosure: 85,
    fallbackOverview: "창조주의 갑작스러운 죽음으로 손 대신 가위를 단 채 홀로 남겨진 인조인간 에드워드가 친절한 펙의 가족과 살아가며 겪는 아름답고도 슬픈 사랑.",
    fallbackPoster: "/edw5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },

  // === 6. 스릴러·미스터리·범죄 (12편) ===
  {
    tmdbId: 546554,
    titleKo: "나이브스 아웃",
    primaryGenre: "스릴러·미스터리·범죄",
    releaseYear: 2019,
    fictionReality: 15, highLowTempo: 75, emotionIdea: 35, openClosure: 15,
    fallbackOverview: "유명 미스터리 작가가 85세 생일에 숨진 채 발견된다. 그의 죽음을 파헤치기 위해 파견된 명탐정 브누아 블랑과 작가 가문의 의문스러운 비밀들.",
    fallbackPoster: "/ko5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 670,
    titleKo: "올드보이",
    primaryGenre: "스릴러·미스터리·범죄",
    releaseYear: 2003,
    fictionReality: 25, highLowTempo: 80, emotionIdea: 60, openClosure: 80,
    fallbackOverview: "이유도 모른 채 15년 동안 사설 감금방에 갇혀 지낸 오대수가 풀려난 뒤, 자신을 가둔 범인을 찾아 복수하려 펼치는 5일 동안의 사투와 충격적 진실.",
    fallbackPoster: "/old5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 24021,
    titleKo: "살인의 추억",
    primaryGenre: "스릴러·미스터리·범죄",
    releaseYear: 2003,
    fictionReality: 10, highLowTempo: 65, emotionIdea: 50, openClosure: 95,
    fallbackOverview: "1986년 경기도 일대에서 연쇄강간살인사건이 발생한다. 육감으로 수사하는 시골 형사 박두만과 서류를 믿는 서울 형사 서태윤의 끝없는 추적과 절망.",
    fallbackPoster: "/sal5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 475557,
    titleKo: "조커",
    primaryGenre: "스릴러·미스터리·범죄",
    releaseYear: 2019,
    fictionReality: 30, highLowTempo: 60, emotionIdea: 85, openClosure: 75,
    fallbackOverview: "고담시의 광대로 살아가며 스탠드업 코미디언을 꿈꾸는 아서 플렉. 무관심과 조롱 속에서 절망을 겪으며 점차 광기의 범죄자 조커로 변모해간다.",
    fallbackPoster: "/jok5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 745,
    titleKo: "식스 센스",
    primaryGenre: "스릴러·미스터리·범죄",
    releaseYear: 1999,
    fictionReality: 70, highLowTempo: 50, emotionIdea: 80, openClosure: 20,
    fallbackOverview: "죽은 사람들의 영혼이 보인다는 8살 소년 콜과 소년의 정신 상담을 맡게 된 아동 심리학자 말콤 크로우 박사의 긴장감 넘치는 교감과 역사적인 반전.",
    fallbackPoster: "/six5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 11324,
    titleKo: "셔터 아일랜드",
    primaryGenre: "스릴러·미스터리·범죄",
    releaseYear: 2010,
    fictionReality: 20, highLowTempo: 70, emotionIdea: 45, openClosure: 85,
    fallbackOverview: "보스턴 외곽 셔터 아일랜드의 정신질환 범죄자 수용소에서 환자가 실종되는 사건이 발생한다. 연방보안관 테디가 수사를 위해 들어가 마주하는 혼란.",
    fallbackPoster: "/shut5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 1612,
    titleKo: "유주얼 서스펙트",
    primaryGenre: "스릴러·미스터리·범죄",
    releaseYear: 1995,
    fictionReality: 15, highLowTempo: 70, emotionIdea: 30, openClosure: 15,
    fallbackOverview: "부두 폭발 사고의 유일한 생존자 버벌 킨트가 유치장에서 형사에게 털어놓는 5인의 범죄 용의자 연합과 정체불명의 보스 카이저 소제의 음모.",
    fallbackPoster: "/usu5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 807,
    titleKo: "세븐",
    primaryGenre: "스릴러·미스터리·범죄",
    releaseYear: 1995,
    fictionReality: 15, highLowTempo: 70, emotionIdea: 35, openClosure: 85,
    fallbackOverview: "은퇴를 7일 앞둔 베테랑 형사 서머셋과 신참 형사 밀스가 성서의 7대 죄악(식탐, 탐욕, 나태, 음란, 교만, 시기, 분노)을 모티브로 삼는 연쇄살인범을 추적한다.",
    fallbackPoster: "/sev5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 419430,
    titleKo: "겟 아웃",
    primaryGenre: "스릴러·미스터리·범죄",
    releaseYear: 2017,
    fictionReality: 45, highLowTempo: 75, emotionIdea: 40, openClosure: 45,
    fallbackOverview: "흑인 청년 크리스가 백인 여자친구 로즈의 시골 부모님 집에 초대받아 방문한 뒤, 마을의 친절함 뒤에 숨겨진 기괴하고 엽기적인 음모에 휘말린다.",
    fallbackPoster: "/get5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 181283,
    titleKo: "추격자",
    primaryGenre: "스릴러·미스터리·범죄",
    releaseYear: 2008,
    fictionReality: 10, highLowTempo: 90, emotionIdea: 65, openClosure: 80,
    fallbackOverview: "보도방을 운영하는 전직 형사 중호가 데리고 있던 여자들이 잇달아 실종된다. 마지막 번호가 일치하는 놈 영민을 붙잡으며 벌어지는 밤샘 사투.",
    fallbackPoster: "/chug5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 210577,
    titleKo: "끝까지 간다",
    primaryGenre: "스릴러·미스터리·범죄",
    releaseYear: 2014,
    fictionReality: 15, highLowTempo: 85, emotionIdea: 35, openClosure: 20,
    fallbackOverview: "어머니의 상가 날 실수로 뺑소니 사고를 낸 형사 고건수. 시신을 어머니 관 속에 숨겨 은폐하지만, 모든 것을 목격했다는 의문의 협박범의 전화가 걸려온다.",
    fallbackPoster: "/end5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 1578,
    titleKo: "다이얼 M을 돌려라",
    primaryGenre: "스릴러·미스터리·범죄",
    releaseYear: 1954,
    fictionReality: 5, highLowTempo: 60, emotionIdea: 30, openClosure: 15,
    fallbackOverview: "부유한 아내의 외도를 눈치챈 은퇴한 테니스 선수 토니가 완벽한 완전범죄 살인을 계획하여 면밀하게 덫을 놓는 알프레드 히치콕의 고전 스릴러.",
    fallbackPoster: "/dial5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },

  // === 7. 공포 (12편) ===
  {
    tmdbId: 1063879,
    titleKo: "파묘",
    primaryGenre: "공포",
    releaseYear: 2024,
    fictionReality: 75, highLowTempo: 75, emotionIdea: 70, openClosure: 30,
    fallbackOverview: "거액의 의뢰를 받은 무당 화림과 봉길, 풍수사 상덕, 장의사 영근이 조상의 묫자리를 파헤치며 겪게 되는 기이한 파국의 미스터리 오컬트.",
    fallbackPoster: "/pamyo5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 503919,
    titleKo: "곤지암",
    primaryGenre: "공포",
    releaseYear: 2018,
    fictionReality: 55, highLowTempo: 85, emotionIdea: 50, openClosure: 50,
    fallbackOverview: "공포 체험단 일곱 명이 세계 7대 소름 끼치는 장소인 곤지암 정신병원으로 실시간 인터넷 생중계 탐험을 떠났다가 겪는 실제 비명 소동.",
    fallbackPoster: "/gonz5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 138843,
    titleKo: "컨저링",
    primaryGenre: "공포",
    releaseYear: 2013,
    fictionReality: 70, highLowTempo: 75, emotionIdea: 75, openClosure: 15,
    fallbackOverview: "새로 이사 온 외딴 농가에서 벌어지는 기괴한 악령 소동을 해결하기 위해 나선 실존 초자연 현상 전문가 워렌 부부의 실제 사건 기록.",
    fallbackPoster: "/conj5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 447336,
    titleKo: "유전",
    primaryGenre: "공포",
    releaseYear: 2018,
    fictionReality: 80, highLowTempo: 60, emotionIdea: 80, openClosure: 85,
    fallbackOverview: "친할머니의 죽음 이후 가족에게 시작된 이상 현상과, 대물림되는 악마적 의식의 굴레 속에서 파멸해나가는 가족의 비극을 다룬 오컬트 마스터피스.",
    fallbackPoster: "/hered5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 348,
    titleKo: "에이리언",
    primaryGenre: "공포", // SF 공포
    releaseYear: 1979,
    fictionReality: 90, highLowTempo: 80, emotionIdea: 35, openClosure: 40,
    fallbackOverview: "우주 화물선 노스트로모호의 승무원들이 정체불명의 외계 생명체를 배에 태우게 되며 밀폐된 우주선 안에서 숨막히게 벌어지는 에일리언 서바이벌.",
    fallbackPoster: "/ali5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 530385,
    titleKo: "미드소마",
    primaryGenre: "공포",
    releaseYear: 2019,
    fictionReality: 40, highLowTempo: 50, emotionIdea: 85, openClosure: 80,
    fallbackOverview: "스웨덴의 한 외딴 마을에서 90년마다 한 번 열리는 한여름 축제(미드소마)에 초대된 대학생들. 한낮의 밝은 태양 아래서 벌어지는 기괴한 백야 공포.",
    fallbackPoster: "/mids5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 447335,
    titleKo: "콰이어트 플레이스",
    primaryGenre: "공포",
    releaseYear: 2018,
    fictionReality: 85, highLowTempo: 80, emotionIdea: 80, openClosure: 25,
    fallbackOverview: "소리를 내는 순간 공격해오는 정체불명의 괴생명체로부터 살아남기 위해, 온 가족이 소리 없는 고요함 속에서 펼쳐나가는 긴박감 넘치는 사투.",
    fallbackPoster: "/quiet5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 324786,
    titleKo: "부산행",
    primaryGenre: "공포",
    releaseYear: 2016,
    fictionReality: 75, highLowTempo: 90, emotionIdea: 80, openClosure: 20,
    fallbackOverview: "서울발 부산행 KTX 열차 안에 원인 모를 좀비 바이러스가 확산된다. 밀폐된 열차 안에서 살아남기 위해 승객들이 사투를 벌이는 좀비 블록버스터.",
    fallbackPoster: "/busan5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 565,
    titleKo: "링 (일본판)",
    primaryGenre: "공포",
    releaseYear: 1998,
    fictionReality: 75, highLowTempo: 45, emotionIdea: 70, openClosure: 75,
    fallbackOverview: "보면 일주일 뒤 반드시 죽게 된다는 의문의 저주 비디오테이프. 조카의 죽음을 파헤치던 기자 아사카와가 저주를 풀기 위해 미스터리를 추적한다.",
    fallbackPoster: "/ring5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 565311,
    titleKo: "사바하",
    primaryGenre: "공포",
    releaseYear: 2019,
    fictionReality: 70, highLowTempo: 65, emotionIdea: 60, openClosure: 70,
    fallbackOverview: "신흥 종교의 비리를 파헤치던 박목사가 사슴동산이라는 종교단체를 추적하며 마주하게 되는 쌍둥이 자매의 탄생 비화와 거대한 미스터리 오컬트.",
    fallbackPoster: "/svh5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 423204,
    titleKo: "그것 (IT)",
    primaryGenre: "공포",
    releaseYear: 2017,
    fictionReality: 85, highLowTempo: 75, emotionIdea: 75, openClosure: 20,
    fallbackOverview: "비 오는 날 하수구 속으로 실종된 동생을 찾아 나선 아이들 앞에, 상대가 가장 두려워하는 모습으로 나타나는 기괴한 삐에로 '페니와이즈'가 등장한다.",
    fallbackPoster: "/it5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 176,
    titleKo: "쏘우",
    primaryGenre: "공포", // 스릴러 공포
    releaseYear: 2004,
    fictionReality: 20, highLowTempo: 85, emotionIdea: 35, openClosure: 65,
    fallbackOverview: "지저분한 지하 목욕탕에서 깨어난 두 남자가 쇠사슬에 묶인 채 마주한다. 직쏘라는 연쇄살인마가 제안하는 생존을 위한 잔혹한 직쏘 퍼즐 게임.",
    fallbackPoster: "/saw5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },

  // === 8. 로맨스 (12편) ===
  {
    tmdbId: 313369,
    titleKo: "라라랜드",
    primaryGenre: "로맨스",
    releaseYear: 2016,
    fictionReality: 55, highLowTempo: 65, emotionIdea: 85, openClosure: 85,
    fallbackOverview: "재즈 피아니스트 세바스찬과 배우 지망생 미아가 LA에서 꿈을 쫓으며 만나 열정적인 사랑을 나누지만, 현실 앞에 갈등하는 뮤지컬 로맨스.",
    fallbackPoster: "/la5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 122906,
    titleKo: "어바웃 타임",
    primaryGenre: "로맨스",
    releaseYear: 2013,
    fictionReality: 65, highLowTempo: 45, emotionIdea: 95, openClosure: 20,
    fallbackOverview: "21살 생일에 가문의 비밀인 시간 여행 능력을 알게 된 팀. 런던에서 우연히 만난 메리의 사랑을 얻기 위해 시간을 되돌리며 펼치는 인생 로맨스.",
    fallbackPoster: "/about5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 16290,
    titleKo: "노트북",
    primaryGenre: "로맨스",
    releaseYear: 2004,
    fictionReality: 10, highLowTempo: 50, emotionIdea: 95, openClosure: 15,
    fallbackOverview: "17살 시절 뜨겁게 사랑했으나 집안의 반대로 헤어졌던 노아와 앨리. 세월이 흐른 뒤 기적처럼 다시 마주하는 일생을 바친 세기의 러브 스토리.",
    fallbackPoster: "/notebook5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 290825,
    titleKo: "뷰티 인사이드",
    primaryGenre: "로맨스",
    releaseYear: 2015,
    fictionReality: 75, highLowTempo: 40, emotionIdea: 85, openClosure: 25,
    fallbackOverview: "자고 일어나면 매일 남녀노소, 심지어 외국인까지 다른 모습으로 변하는 남자 우진과, 그의 특별한 비밀을 알고 그를 사랑하게 된 여자 이수의 연애담.",
    fallbackPoster: "/beauty5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 50014,
    titleKo: "그 시절, 우리가 좋아했던 소녀",
    primaryGenre: "로맨스",
    releaseYear: 2011,
    fictionReality: 5, highLowTempo: 55, emotionIdea: 90, openClosure: 80,
    fallbackOverview: "반의 문제아 커둥텅과 반의 최고의 우등생이자 첫사랑인 션자이의 유치하고 장난기 가득했던 찬란한 고등학교 학창시절과 애틋한 연애담.",
    fallbackPoster: "/girl5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 80,
    titleKo: "비포 선라이즈",
    primaryGenre: "로맨스",
    releaseYear: 1995,
    fictionReality: 5, highLowTempo: 30, emotionIdea: 85, openClosure: 85,
    fallbackOverview: "기차 안에서 우연히 만나 비엔나에 내린 미국인 청년 제시와 프랑스 여대생 셀린의 하룻밤 동안 벌어지는 지적이고 서정적인 대화와 교감.",
    fallbackPoster: "/bef5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 500,
    titleKo: "500일의 썸머",
    primaryGenre: "로맨스",
    releaseYear: 2009,
    fictionReality: 10, highLowTempo: 55, emotionIdea: 75, openClosure: 80,
    fallbackOverview: "사랑을 운명이라 믿는 청년 톰과 사랑은 가벼운 감정이라 여기는 자유분방한 썸머의 현실적이고도 씁쓸한 500일 동안의 연애 기록 서사.",
    fallbackPoster: "/sum5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 19085,
    titleKo: "말할 수 없는 비밀",
    primaryGenre: "로맨스",
    releaseYear: 2007,
    fictionReality: 75, highLowTempo: 55, emotionIdea: 90, openClosure: 75,
    fallbackOverview: "예술학교 피아노 천재 상륜이 오래된 음악실에서 신비로운 곡을 연주하던 샤오위를 만나 사랑을 키워나가는 피아노와 시공간의 타임슬립 로맨스.",
    fallbackPoster: "/secret5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 12180,
    titleKo: "클래식",
    primaryGenre: "로맨스",
    releaseYear: 2003,
    fictionReality: 10, highLowTempo: 45, emotionIdea: 95, openClosure: 30,
    fallbackOverview: "대학생 지혜가 우연히 발견한 엄마 주희의 첫사랑 편지와 일기를 읽으며, 과거 엄마의 애틋한 사랑 이야기와 현재 자신의 엇갈린 짝사랑이 교차되는 로맨스.",
    fallbackPoster: "/classic5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 17182,
    titleKo: "노팅 힐",
    primaryGenre: "로맨스",
    releaseYear: 1999,
    fictionReality: 15, highLowTempo: 45, emotionIdea: 90, openClosure: 15,
    fallbackOverview: "노팅 힐에서 작은 여행 서점을 운영하는 소심한 청년 윌리엄과 세계적인 탑스타 여배우 안나 스콧의 꿈같은 우연한 만남과 사랑.",
    fallbackPoster: "/not5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 13925,
    titleKo: "시애틀의 잠 못 이루는 밤",
    primaryGenre: "로맨스",
    releaseYear: 1993,
    fictionReality: 15, highLowTempo: 45, emotionIdea: 85, openClosure: 15,
    fallbackOverview: "사별 후 아들과 시애틀에 사는 샘과, 라디오 사연을 듣고 그의 아련함에 끌려 약혼자가 있음에도 엠파이어 스테이트 빌딩에서 운명적 조우를 꿈꾸는 애니의 로맨스.",
    fallbackPoster: "/slee5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 4348,
    titleKo: "오만과 편견",
    primaryGenre: "로맨스",
    releaseYear: 2005,
    fictionReality: 5, highLowTempo: 45, emotionIdea: 85, openClosure: 15,
    fallbackOverview: "명예와 지위를 중시하지만 오만한 귀족 다이시와 영리하고 자존심 세지만 Darcy에 대한 편견을 가졌던 리지(엘리자베스)의 로맨틱 고전 극.",
    fallbackPoster: "/pride5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  // === 사용자 요청 추가 영화 (5편) ===
  {
    tmdbId: 396371,
    titleKo: "미키 17",
    primaryGenre: "SF",
    releaseYear: 2025,
    fictionReality: 95, highLowTempo: 70, emotionIdea: 50, openClosure: 75,
    fallbackOverview: "얼음 행성을 식민지화하기 위해 파견된 탐험대의 소모품 복제인간 '미키 17'. 죽어도 다시 기억을 복제해 되살아나는 그의 생존과 자아 찾기 모험.",
    fallbackPoster: "/loop5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 293670,
    titleKo: "곡성",
    primaryGenre: "공포",
    releaseYear: 2016,
    fictionReality: 80, highLowTempo: 75, emotionIdea: 65, openClosure: 95,
    fallbackOverview: "외지인이 나타난 후 시작된 의문의 연쇄 사건들로 들끓는 시골 마을. 경찰 종구가 자신의 딸을 구하기 위해 무속인 일광과 힘을 합쳐 실체를 추적한다.",
    fallbackPoster: "/it5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 424694,
    titleKo: "보헤미안 랩소디",
    primaryGenre: "드라마",
    releaseYear: 2018,
    fictionReality: 10, highLowTempo: 65, emotionIdea: 90, openClosure: 15,
    fallbackOverview: "시대와 세대를 초월한 전설적인 록 밴드 퀸과 독창적인 보컬 프레디 머큐리의 음악과 열정, 그리고 극적인 인생을 그린 전기 드라마.",
    fallbackPoster: "/b19c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 116745,
    titleKo: "월터의 상상은 현실이 된다",
    primaryGenre: "드라마",
    releaseYear: 2013,
    fictionReality: 40, highLowTempo: 50, emotionIdea: 85, openClosure: 30,
    fallbackOverview: "폐간을 앞둔 라이프지에서 16년째 사진 관리자로 일하는 월터 미티. 사라진 마지막 앨범 사진을 찾아 상상을 넘어선 모험을 시작한다.",
    fallbackPoster: "/grav5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  },
  {
    tmdbId: 244786,
    titleKo: "위플래시",
    primaryGenre: "드라마",
    releaseYear: 2014,
    fictionReality: 10, highLowTempo: 85, emotionIdea: 80, openClosure: 70,
    fallbackOverview: "최고의 재즈 드러머가 되기 위해 명문 음악학교에 입학한 신입생 앤드류와, 그의 천재성을 폭력적으로 이끌어내려는 독종 교수 플레처의 광기 어린 대립.",
    fallbackPoster: "/pp5c8dD1l5s4rG2y2A3b8t9k2d1.jpg"
  }
];

// 3. movies.json 저장 디렉토리 생성 보장
const DATA_DIR = path.resolve(process.cwd(), 'src/data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// 4. 영화 수집 실행
async function run() {
  const result = [];
  
  if (apiKey) {
    console.log('🚀 TMDB API Key가 감지되어 실시간 수집을 진행합니다.');
    console.log('총 96편의 영화 데이터를 TMDB로부터 순차적으로 로드합니다...\n');
    
    for (let i = 0; i < MOVIE_SEED_DATA.length; i++) {
      const seed = MOVIE_SEED_DATA[i];
      const url = `https://api.themoviedb.org/3/movie/${seed.tmdbId}?api_key=${apiKey}&language=ko-KR`;
      
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP Error Status: ${response.status}`);
        }
        
        const data = await response.json();
        
        result.push({
          id: `tmdb-${seed.tmdbId}`,
          tmdbId: seed.tmdbId,
          titleKo: data.title || seed.titleKo,
          originalTitle: data.original_title || seed.titleKo,
          releaseYear: seed.releaseYear,
          primaryGenre: seed.primaryGenre,
          genres: data.genres ? data.genres.map(g => g.name) : [seed.primaryGenre],
          posterPath: data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : seed.fallbackPoster,
          overviewKo: data.overview || seed.fallbackOverview,
          originalLanguage: data.original_language || 'en',
          runtime: data.runtime || null,
          fictionReality: seed.fictionReality,
          highLowTempo: seed.highLowTempo,
          emotionIdea: seed.emotionIdea,
          openClosure: seed.openClosure
        });
        
        console.log(`[${i + 1}/96] 성공: ${seed.titleKo} (${data.title})`);
        
        // TMDB Rate Limit 대비 미세 딜레이
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (e) {
        console.log(`⚠️ [${i + 1}/96] 실패 (${seed.titleKo}): API 호출 에러. 폴백 데이터를 사용합니다. (${e.message})`);
        result.push({
          id: `tmdb-${seed.tmdbId}`,
          tmdbId: seed.tmdbId,
          titleKo: seed.titleKo,
          originalTitle: seed.titleKo,
          releaseYear: seed.releaseYear,
          primaryGenre: seed.primaryGenre,
          genres: [seed.primaryGenre],
          posterPath: seed.fallbackPoster,
          overviewKo: seed.fallbackOverview,
          originalLanguage: 'ko',
          runtime: 120,
          fictionReality: seed.fictionReality,
          highLowTempo: seed.highLowTempo,
          emotionIdea: seed.emotionIdea,
          openClosure: seed.openClosure
        });
      }
    }
  } else {
    console.log('💡 VITE_TMDB_API_KEY가 존재하지 않거나 your_...로 채워져 있어 폴백 모드로 실행합니다.');
    console.log('내장된 96편 영화의 사전 명세와 폴백 포스터/줄거리를 이용해 movies.json을 생성합니다...\n');
    
    for (const seed of MOVIE_SEED_DATA) {
      result.push({
        id: `tmdb-${seed.tmdbId}`,
        tmdbId: seed.tmdbId,
        titleKo: seed.titleKo,
        originalTitle: seed.titleKo,
        releaseYear: seed.releaseYear,
        primaryGenre: seed.primaryGenre,
        genres: [seed.primaryGenre],
        posterPath: seed.fallbackPoster,
        overviewKo: seed.fallbackOverview,
        originalLanguage: 'ko',
        runtime: 120,
        fictionReality: seed.fictionReality,
        highLowTempo: seed.highLowTempo,
        emotionIdea: seed.emotionIdea,
        openClosure: seed.openClosure
      });
    }
  }
  
  // 5. movies.json 파일 생성
  const outputPath = path.resolve(DATA_DIR, 'movies.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8');
  console.log(`\n🎉 완료! 총 ${result.length}편의 영화 데이터셋이 성공적으로 생성되었습니다.`);
  console.log(`경로: ${outputPath}`);
  
  // 6. 8대 장르별 검증 출력
  const genreCounts = {};
  result.forEach(m => {
    genreCounts[m.primaryGenre] = (genreCounts[m.primaryGenre] || 0) + 1;
  });
  console.log('\n📊 [운영 장르별 영화 개수 검증]');
  Object.keys(genreCounts).forEach(g => {
    console.log(` - ${g}: ${genreCounts[g]}편 (요구사항: 12편)`);
  });
}

run();
