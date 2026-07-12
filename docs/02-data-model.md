# MVTI 앱 데이터 구조 정의서 (`02-data-model.md`)

본 명세서는 애플리케이션 내에서 취향 진단, CRUD, 그리고 일일 추천에 사용되는 데이터 엔터티의 스키마와 저장 명세를 정의합니다.

---

## 1. 영화 데이터 모델 (읽기 전용: `Movie`)

96편의 고정 영화 데이터셋(`src/data/movies.json`)에 저장될 구조입니다. TMDB API의 메타데이터와 사전 계산된 4축 취향 지표를 포함합니다.

### A. 데이터 스키마
```typescript
interface Movie {
  id: string;               // "tmdb-{tmdbId}" 형식의 고유 ID
  tmdbId: number;           // TMDB 고유 영화 ID
  titleKo: string;          // 한국어 영화 제목
  originalTitle: string;    // 원제
  releaseYear: number;      // 개봉 연도
  primaryGenre: string;     // 8대 운영 장르 중 하나 (목표 수량 확인용)
  genres: string[];         // 전체 장르 목록 (예: ["SF", "드라마"])
  posterPath: string;       // TMDB 포스터 이미지 상대 경로 (ex: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg")
  overviewKo: string;       // 한국어 줄거리 요약
  originalLanguage: string; // 제작 국가 언어 코드 (ko, en, ja 등)
  runtime: number | null;   // 상영 시간 (분 단위)
  
  // 취향 분석용 4대 지표 (0 ~ 100 범위의 정수)
  fictionReality: number;   // 0 (Reality: 현실형) ↔ 100 (Fiction: 비현실·세계관형)
  highLowTempo: number;     // 0 (Low Tempo: 저자극형) ↔ 100 (High Energy: 고자극형)
  emotionIdea: number;      // 0 (Idea: 사유형) ↔ 100 (Emotion: 감정형)
  openClosure: number;      // 0 (Closure: 완결형) ↔ 100 (Open: 여운형)
}
```

### B. 데이터 예시
```json
{
  "id": "tmdb-157336",
  "tmdbId": 157336,
  "titleKo": "인터스텔라",
  "originalTitle": "Interstellar",
  "releaseYear": 2014,
  "primaryGenre": "SF",
  "genres": ["SF", "드라마", "모험"],
  "posterPath": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  "overviewKo": "세계 각국의 정부와 경제가 붕괴된 미래가 다가온다. 인류의 구원을 위해 시공간의 경계를 넘어 우주로 떠나는 탐험가들의 이야기.",
  "originalLanguage": "en",
  "runtime": 169,
  "fictionReality": 85,
  "highLowTempo": 60,
  "emotionIdea": 40,
  "openClosure": 70
}
```

---

## 2. 사용자 영화 반응 모델 (CRUD 핵심: `UserMovieReaction`)

사용자가 개별 영화에 대해 남기는 선호 및 관람 반응 데이터 구조입니다. LocalStorage에 배열 형태로 영속 저장됩니다.

### A. 데이터 스키마
```typescript
interface UserMovieReaction {
  id: string;               // 생성 시 부여되는 고유 식별자 (타임스탬프 또는 UUID)
  movieId: string;          // 평가 대상 Movie.id 매핑 (Foreign Key 역할)
  sentiment: "like" | "dislike" | "neutral";  // 선호 반응
  strength: 1 | 2 | 3;      // 반응 강도 (1: 약함, 2: 보통, 3: 강함)
  watchStatus: "seen" | "wantToWatch" | "notNow"; // 시청 구분
  note: string;             // 한줄 평 또는 메모 텍스트 (빈 스트링 가능)
  createdAt: string;        // 최초 생성 시각 (ISO 8601 string)
  updatedAt: string;        // 최종 수정 시각 (ISO 8601 string)
}
```

### B. 데이터 예시
```json
{
  "id": "react-1718000000000",
  "movieId": "tmdb-157336",
  "sentiment": "like",
  "strength": 3,
  "watchStatus": "seen",
  "note": "우주 과학적 고증과 가족 간의 눈물 겨운 연출이 완벽했던 명작!",
  "createdAt": "2026-07-12T08:30:00.000Z",
  "updatedAt": "2026-07-12T08:35:00.000Z"
}
```

---

## 3. 사용자 프로필 모델 (`UserProfile`)

온보딩 시 선택한 MBTI 정보와 연산이 완료된 MVTI 취향 최종 상태를 나타냅니다.

### A. 데이터 스키마
```typescript
interface UserProfile {
  mbti: string | null;      // 사용자가 고른 16개 MBTI 코드 (잘 모를 시 null)
  onboardingCompleted: boolean; // 온보딩 프로세스 완료 플래그
}
```

### B. 데이터 예시
```json
{
  "mbti": "INFJ",
  "onboardingCompleted": true
}
```

---

## 4. 로컬스토리지 저장 규격 (LocalStorage Key)

애플리케이션이 브라우저 샌드박스 내에 보관할 저장 키 구조입니다.

| 키 이름 | 저장 데이터 타입 | 설명 |
| --- | --- | --- |
| `mvti_user_reactions_v1` | `UserMovieReaction[]` | 사용자가 등록한 모든 영화 선호 반응 데이터 리스트 (CRUD 대상) |
| `mvti_user_profile_v1` | `UserProfile` | 사용자의 온보딩 완료 여부 및 입력한 MBTI 정보 |

---

## 5. 정적 연계 데이터베이스 (`gapInterpretations`)

1번에서 선택한 원래 성격(MBTI)과 계산되어 도출된 취향(MVTI) 간의 심리적 보완/일치 작용을 설명해주는 해석 테이블입니다. `SDD.txt` 명세서의 `GAP_INTERPRETATION_DB`를 소스 파일로 활용하며 CRUD의 영향은 받지 않는 읽기 전용 상수 파일입니다.

* **경로**: `src/data/gapInterpretations.js`
* **구조**: `Record<string, string>` (Key: 16개 MBTI 대문자 문자열, Value: 매핑 해석 본문)
* **폴백**: 사용자가 MBTI 입력 단계에서 `'잘 모르겠어요'`를 골라 `mbti: null`인 경우, 간극 분석 본문 출력을 숨김 처리하고 순수 취향 차트 분석만 제공합니다.
