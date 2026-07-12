# MVTI 앱 MVP 구현 계획서

## 배경 및 목표

**MVTI(Movie Viewing Taste Indicator)** — 사용자가 선택한 영화 반응 데이터를 기반으로 4개 축의 영화 취향 유형을 진단하고, 맞춤 추천을 제공하는 인터랙티브 웹 앱.

이번 MVP는 **과제 핵심층**(React + Vite + LocalStorage CRUD)을 완전히 동작하게 만드는 것에 집중합니다. 서비스 확장층(Supabase, 협업 필터링 등)은 시간 허용 시 또는 과제 이후로 보류합니다.

> [!IMPORTANT]
> **핵심 엔터티는 `UserMovieReaction`** — 영화 데이터 자체의 CRUD가 아닌, 사용자의 **영화 반응 기록**을 CRUD 하는 앱입니다. 평가자가 Create/Read/Update/Delete를 즉시 확인할 수 있어야 합니다.

---

## 참고 문서

| 문서 | 역할 |
|------|------|
| [0712-지피티 프로젝트-1차 연구.md](file:///C:/CH/0711-mvti/my-data/0712-지피티 프로젝트-1차 연구.md) | MVTI 유형 정의, 영화 풀, CRUD 구조, 알고리즘, 일정 등 종합 설계안 |
| [SDD.txt](file:///C:/CH/0711-mvti/my-data/SDD.txt) | 기존 프로토타입 PRD/SRS/TRD (MBTI↔MVTI 간극 해석 단일 페이지) |

---

## User Review Required

> [!IMPORTANT]
> **기술 스택 확인**: React + Vite + Vanilla CSS (TailwindCSS 미사용) 으로 진행합니다. 다른 선호가 있으시면 알려주세요.

> [!IMPORTANT]
> **영화 데이터 규모**: MVP에서는 약 60~100편의 영화로 시작합니다. 240편 전체 구축은 데이터 라벨링 시간이 상당하므로, MVP 이후 확장하는 것을 권장합니다.

> [!WARNING]
> **SDD.txt와의 관계**: 기존 SDD는 "30분 타임어택 단일 페이지 프로토타입"으로 설계된 것이고, 이번 MVP는 1차 연구 문서의 본격 CRUD 앱 구조를 따릅니다. SDD의 `GAP_INTERPRETATION_DB`(MBTI↔MVTI 간극 해석)는 결과 화면에 통합 활용합니다.

---

## Open Questions

> [!IMPORTANT]
> 1. **포스터 이미지 출처**: TMDB API를 빌드 시 호출해 `movies.json`에 포스터 URL을 미리 넣어둘까요, 아니면 placeholder 이미지로 시작할까요?
> 2. **배포 환경**: Vercel / Netlify / GitHub Pages 중 어디에 배포할 예정인가요? 아니면 로컬 실행만 할 예정인가요?
> 3. **MBTI 입력 방식**: 온보딩에서 MBTI를 드롭다운(16개 선택)으로 입력받을까요, 아니면 4축 각각 선택하는 방식으로 할까요?
> 4. **일일 추천 기능**: MVP 범위에 포함할까요, 아니면 CRUD + MVTI 계산까지만 할까요?

---

## Proposed Changes

### 1. 프로젝트 초기화 및 구조

#### [NEW] 프로젝트 생성 (Vite + React)

```text
C:\CH\0711-mvti\
├─ README.md
├─ index.html
├─ vite.config.js
├─ package.json
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ index.css
│  ├─ assets/
│  ├─ components/
│  │  ├─ common/           # 공통 UI 컴포넌트
│  │  │  ├─ EmptyState.jsx
│  │  │  ├─ ErrorBoundary.jsx
│  │  │  ├─ Modal.jsx
│  │  │  └─ ConfirmDialog.jsx
│  │  ├─ landing/          # 랜딩 페이지
│  │  │  ├─ DiagonalPosterFlow.jsx
│  │  │  ├─ PosterCard.jsx
│  │  │  └─ SelectionTray.jsx
│  │  ├─ onboarding/       # 온보딩
│  │  │  ├─ MbtiSelector.jsx
│  │  │  ├─ ReactionSelector.jsx
│  │  │  └─ ProgressIndicator.jsx
│  │  ├─ result/           # MVTI 결과
│  │  │  ├─ MvtiTypeCard.jsx
│  │  │  ├─ AxisChart.jsx
│  │  │  └─ MbtiMvtiComparison.jsx
│  │  ├─ taste/            # 내 취향 기록 (CRUD 핵심)
│  │  │  ├─ ReactionList.jsx
│  │  │  ├─ ReactionCard.jsx
│  │  │  ├─ ReactionForm.jsx
│  │  │  ├─ EditReactionModal.jsx
│  │  │  └─ DeleteConfirmDialog.jsx
│  │  └─ dashboard/        # 대시보드 (시간 허용 시)
│  │     ├─ DailyRecommendation.jsx
│  │     └─ RecommendationCard.jsx
│  ├─ hooks/
│  │  ├─ useLocalStorage.js
│  │  ├─ useReactions.js
│  │  └─ useMvtiCalculation.js
│  ├─ utils/
│  │  ├─ mvtiCalculator.js
│  │  ├─ recommendationEngine.js
│  │  └─ validators.js
│  ├─ constants/
│  │  ├─ mvtiTypes.js      # 16개 MVTI 유형 정의
│  │  └─ gapInterpretations.js  # SDD의 GAP_INTERPRETATION_DB
│  └─ pages/
│     ├─ LandingPage.jsx
│     ├─ OnboardingPage.jsx
│     ├─ MvtiResultPage.jsx
│     ├─ MyTastePage.jsx
│     └─ DashboardPage.jsx
├─ data/
│  ├─ movies.json          # 영화 풀 (읽기 전용)
│  └─ CHANGELOG.md
├─ docs/
│  ├─ 01-requirements.md
│  ├─ 02-data-model.md
│  ├─ 03-feature-breakdown.md
│  ├─ 04-prompts.md
│  ├─ 05-ai-review.md
│  ├─ 06-error-log.md
│  ├─ 07-test-results.md
│  └─ 08-security-copyright.md
├─ screenshots/
└─ my-data/                # 기존 연구 자료 (유지)
```

---

### 2. 데이터 모델

#### [NEW] `data/movies.json` — 영화 풀 (읽기 전용)

1차 연구 문서의 `Movie` 구조를 그대로 따릅니다:

```ts
Movie {
  id: string
  tmdbId: number
  titleKo: string
  originalTitle: string
  releaseYear: number
  primaryGenre: string
  genres: string[]
  posterPath: string
  overviewKo: string
  originalLanguage: string
  productionCountries: string[]
  runtime: number | null

  // MVTI 4축 점수 (0~100)
  fictionReality: number     // 0=Reality ↔ 100=Fiction
  highLowTempo: number       // 0=Low ↔ 100=High
  emotionIdea: number        // 0=Idea ↔ 100=Emotion
  openClosure: number        // 0=Closure ↔ 100=Open

  moodTags: string[]
  themeTags: string[]
  popularityTier: "mainstream" | "mid" | "niche"
  onboardingEligible: boolean
  source: "tmdb"
  poolVersion: string
}
```

#### [NEW] `UserMovieReaction` — CRUD 핵심 엔터티

```ts
UserMovieReaction {
  id: string                 // UUID
  movieId: string            // Movie.id 참조
  sentiment: "like" | "dislike" | "neutral"
  strength: 1 | 2 | 3       // 1=약함, 2=보통, 3=강함
  watchStatus: "seen" | "wantToWatch" | "notNow"
  note: string               // 사용자 메모
  createdAt: string          // ISO 8601
  updatedAt: string          // ISO 8601
}
```

**LocalStorage 키**: `mvti_user_reactions_v1`

#### [NEW] `UserProfile` — 사용자 프로필 (LocalStorage)

```ts
UserProfile {
  mbti: string | null        // 사용자 선택 MBTI (16개 중 택 1)
  mvti: string | null        // 계산된 MVTI 코드 (예: "M-RLIO")
  mvtiScores: {              // 4축 연속 점수
    fictionReality: number
    highLowTempo: number
    emotionIdea: number
    openClosure: number
  } | null
  confidence: number | null  // 신뢰도 (0~100)
  onboardingCompleted: boolean
  createdAt: string
  updatedAt: string
}
```

**LocalStorage 키**: `mvti_user_profile_v1`

---

### 3. 핵심 CRUD 기능 (과제 평가 필수)

#### [NEW] `src/hooks/useReactions.js`

| 동작 | 함수 | 설명 |
|------|------|------|
| **Create** | `addReaction(movieId, sentiment, strength, watchStatus, note)` | 영화에 반응 추가. 중복 검증, 필수값 검증 포함 |
| **Read** | `reactions` (state), `getReactionByMovieId(id)` | 전체 목록 조회, 개별 조회 |
| **Update** | `updateReaction(reactionId, updates)` | 반응/강도/관람상태/메모 수정. 존재하지 않는 ID 오류 처리 |
| **Delete** | `deleteReaction(reactionId)` | 확인 후 삭제. 삭제 후 빈 상태 전환 |

**검증 규칙:**
- 동일 영화 중복 추가 차단 → 에러 메시지
- sentiment 필수값 없이 추가 시 → 검증 오류 메시지
- 존재하지 않는 reactionId로 수정/삭제 시 → 에러 처리
- LocalStorage JSON 손상 시 → 빈 배열 + 경고 메시지
- 저장 용량 초과 시 → 에러 처리 + 안내

#### [NEW] `src/hooks/useLocalStorage.js`

- 앱 최초 로드 시 LocalStorage에서 JSON 파싱
- 데이터 변경 시 자동 저장 (debounce 적용)
- JSON 파싱 오류 시 빈 배열 + 사용자 경고
- 새로고침 후 데이터 유지 검증
- 전체 초기화 기능 (확인 대화상자 필수)

---

### 4. MVTI 계산 엔진

#### [NEW] `src/utils/mvtiCalculator.js`

1차 연구 문서 §1-4 계산 방식을 정확히 구현:

```text
1. 사용자가 반응한 영화들의 4축 점수를 수집
2. 반응 가중치 적용:
   - like(strength=3): +1.5  |  like(strength=2): +1.0  |  like(strength=1): +0.7
   - dislike(strength=3): -1.5  |  dislike(strength=2): -1.0  |  dislike(strength=1): -0.7
   - watchStatus="wantToWatch" / "notNow": 취향 계산 제외
3. 가중 평균으로 4축 최종 점수 산출
4. MBTI 기반 초기 참고값 반영 (선택 수에 따라 감소)
   - 6개 이하: MBTI 참고 15%
   - 12개 이하: 5%
   - 20개 이상: 0%
5. 각 축 50점 기준으로 문자 선택 → 4글자 MVTI 코드 생성
6. 신뢰도 계산: 선택 수 × 장르 다양성 × 축 편향도
```

#### [NEW] `src/constants/mvtiTypes.js`

16개 MVTI 유형 데이터:

| 코드 | 유형명 | 핵심 취향 |
|------|--------|-----------|
| M-FHEO | 폭발형 몽상가 | 화려한 세계관, 강한 감정, 예측 불가능한 여운 |
| M-FHEC | 영웅서사 몰입가 | 판타지·모험, 빠른 전개, 감정적 승리와 완결 |
| M-FHIO | 우주 퍼즐러 | 고자극 SF, 복잡한 개념, 반전과 해석의 여지 |
| M-FHIC | 세계관 전략가 | 정교한 설정, 빠른 사건, 논리적인 해결 |
| M-FLEO | 몽환 감성가 | 느리고 아름다운 판타지, 감정과 여운 |
| M-FLEC | 따뜻한 판타지스트 | 편안한 세계관, 관계 중심, 따뜻한 마무리 |
| M-FLIO | 사유형 탐험가 | 느린 SF·철학적 판타지, 개념과 열린 해석 |
| M-FLIC | 세계관 설계자 | 치밀한 설정, 차분한 전개, 논리적 완성도 |
| M-RHEO | 감정 롤러코스터 | 현실적 갈등, 강한 감정, 충격과 여운 |
| M-RHEC | 대중서사 해결가 | 현실 기반, 빠른 전개, 관계 회복과 명확한 결말 |
| M-RHIO | 미스터리 추적자 | 범죄·사회 문제, 긴장감, 반전과 해석 |
| M-RHIC | 현실 전략 실행가 | 사실적 사건, 빠른 판단, 원인과 해결이 명확한 극 |
| M-RLEO | 생활 여운 관찰자 | 일상·인간관계, 느린 호흡, 감정적 여운 |
| M-RLEC | 힐링 현실주의자 | 소박한 현실, 따뜻한 관계, 안정적 마무리 |
| M-RLIO | 사회 사유 탐구자 | 현실 문제, 느린 전개, 철학·사회적 질문 |
| M-RLIC | 사실서사 분석가 | 실제 사건, 절제된 연출, 논리와 완결성 |

#### [NEW] `src/constants/gapInterpretations.js`

SDD.txt의 `GAP_INTERPRETATION_DB` 16개 유형별 해석 문장을 이 파일에 모듈화하여 저장. MVTI 결과 화면에서 MBTI↔MVTI 간극 해석에 활용합니다.

---

### 5. 화면(페이지) 구성

#### Page 1: 랜딩 페이지 (`LandingPage.jsx`)

- **사선 포스터 흐름** (`DiagonalPosterFlow`): 여러 레인을 비스듬히 배치, 자동 스크롤
  - 포스터 hover 시 해당 레인 일시정지
  - `prefers-reduced-motion` 지원
  - 키보드 접근성 확보
- **포스터 카드** (`PosterCard`): 클릭 시 좋아요/싫어요/안 봤어요 선택 팝업
- **선택 트레이** (`SelectionTray`): 선택한 영화 하단 고정, 최소 6편 선택 유도
- 중복 추가 차단
- **CTA**: "취향 분석 시작하기" → 6편 이상 선택 시 활성화

#### Page 2: 온보딩 (`OnboardingPage.jsx`)

- **MBTI 선택기** (`MbtiSelector`): 16개 유형 드롭다운 또는 4축 각각 선택
- **진행률** (`ProgressIndicator`): 최소 6편 선택까지의 진행도 표시
- **반응 선택기** (`ReactionSelector`): 추가 영화에 대한 세부 반응 입력

#### Page 3: MVTI 결과 (`MvtiResultPage.jsx`)

- **유형 카드** (`MvtiTypeCard`): 코드 + 유형명 + 핵심 취향 설명
- **4축 차트** (`AxisChart`): 각 축의 연속 점수를 바 차트로 시각화
- **신뢰도 표시**: 분석 근거 (선호 N편, 비선호 N편, N개 장르)
- **MBTI↔MVTI 비교** (`MbtiMvtiComparison`): SDD의 간극 해석 문장 출력
- **공유 버튼**: 결과 이미지 생성 / 링크 복사

#### Page 4: 내 취향 기록 (`MyTastePage.jsx`) — **CRUD 핵심 페이지**

- **반응 목록** (`ReactionList`): 사용자가 추가한 모든 반응 카드 리스트
- **반응 카드** (`ReactionCard`): 영화 포스터 + 반응 + 강도 + 메모 + 수정/삭제 버튼
- **반응 추가 폼** (`ReactionForm`): 영화 검색 → 반응 선택 → 메모 입력 → 추가
- **수정 모달** (`EditReactionModal`): 반응·강도·관람상태·메모 변경 폼
- **삭제 확인** (`DeleteConfirmDialog`): "정말 삭제하시겠습니까?" 확인 대화상자
- **빈 상태** (`EmptyState`): 기록 0건일 때 안내 + 영화 추가 유도
- **필터/정렬**: 반응 유형별 필터, 최신순/오래된순 정렬

#### Page 5: 대시보드 (`DashboardPage.jsx`) — 시간 허용 시

- **오늘의 3편 추천** (정확 추천 / 취향 확장 / 오늘의 의외작)
- 각 추천에 이유 표시
- 추천 영화에 대한 피드백 (저장/이미 봄/관심 없음)

---

### 6. UI/UX 디자인 방향

#### 디자인 시스템 (`index.css`)

- **컬러**: 다크 모드 기본. 영화관의 어두운 분위기 + 네온 포인트
  - 배경: `hsl(230, 25%, 8%)` ~ `hsl(230, 20%, 12%)`
  - 포인트: Amber/Gold 계열 (`hsl(40, 95%, 55%)`)
  - 보조: Violet 계열 (`hsl(270, 70%, 60%)`)
- **타이포그래피**: Google Fonts — `Outfit` (제목), `Inter` (본문)
- **카드**: 글래스모피즘 (`backdrop-filter: blur`) + 미묘한 보더
- **애니메이션**: 부드러운 전환, 카드 hover 스케일, 포스터 흐름 무한 스크롤
- **반응형**: 모바일 퍼스트 (360px~)

#### 핵심 인터랙션

- 포스터 클릭 → 반응 선택 팝업 (좋아요❤️ / 싫어요👎 / 안 봤어요👀)
- 반응 강도: 1~3 하트/비선호 아이콘으로 시각화
- 선택 트레이: 하단 fixed, 선택한 영화 미니 포스터 나열
- MVTI 결과 reveal: 카운트다운 → 축별 바 애니메이션 → 유형 카드 등장
- 수정/삭제: 명확한 버튼 + 모달/대화상자 (토글만으로 Update 증명 금지)

---

### 7. 라우팅

React Router v6 사용:

```text
/              → LandingPage (포스터 흐름 + 영화 선택)
/onboarding    → OnboardingPage (MBTI 선택 + 추가 영화 반응)
/result        → MvtiResultPage (MVTI 계산 결과 + 간극 해석)
/my-taste      → MyTastePage (CRUD 핵심 — 반응 목록/추가/수정/삭제)
/dashboard     → DashboardPage (일일 추천 — 시간 허용 시)
```

---

### 8. 예외 상태 처리 (과제 필수)

| # | 예외 상태 | 처리 방법 |
|---|----------|-----------|
| 1 | 영화 기록 0건 | EmptyState 컴포넌트 + "영화를 추가해보세요" 유도 |
| 2 | 필수 반응값 없이 추가 | 폼 검증 + 인라인 에러 메시지 |
| 3 | 동일 영화 중복 추가 | 차단 + "이미 추가된 영화입니다" 토스트 |
| 4 | 존재하지 않는 ID 수정 | 에러 핸들링 + 사용자 안내 |
| 5 | 존재하지 않는 ID 삭제 | 에러 핸들링 + 사용자 안내 |
| 6 | LocalStorage JSON 손상 | 빈 배열 복구 + 경고 메시지 |
| 7 | 저장 용량/브라우저 실패 | try-catch + 에러 안내 |
| 8 | 포스터 이미지 로딩 실패 | fallback 이미지 + alt 텍스트 |
| 9 | 미선택 영화 부족 | 추천 불가 안내 |
| 10 | MVTI 최소 선택 미달 | "6편 이상 선택 필요" 안내 |

---

### 9. 영화 데이터 구축 (MVP 범위)

MVP에서는 **약 60~80편**의 영화 데이터를 `data/movies.json`에 정적으로 포함합니다.

**구축 절차:**

1. SDD의 19편 영화를 기반 시드로 활용
2. 장르별 최소 5편씩 확보하여 60편 이상으로 확장
3. 각 영화에 4축 점수 라벨링 (AI 1차 + 수동 검토)
4. 지역/시대/인지도 균형 가볍게 확인
5. `onboardingEligible: true`인 영화 약 20~30편 선정

> [!NOTE]
> 240편 풀은 MVP 이후 별도 데이터 파이프라인으로 구축합니다. MVP에서 구조만 240편 호환되게 설계합니다.

---

### 10. 구현 일정 (10일)

| 일차 | 작업 | 산출물 |
|------|------|--------|
| **1일차** | 프로젝트 초기화, 요구사항 문서, 데이터 구조 정의 | Vite 프로젝트, `docs/01`, `docs/02`, `movies.json` 스키마 |
| **2일차** | **Read** — movies.json 로드, 포스터 목록, 내 취향 기록 목록, 빈 상태 | `ReactionList`, `ReactionCard`, `EmptyState` |
| **3일차** | **Create** — 영화에 반응 추가, 중복/필수값 검증, 폼 초기화 | `ReactionForm`, `ReactionSelector`, validation |
| **4일차** | **Update + Delete** — 수정 모달, 수정 취소, 삭제 확인, 삭제 후 빈 상태 | `EditReactionModal`, `DeleteConfirmDialog` |
| **5일차** | **LocalStorage** — 자동 저장, JSON 오류 처리, 새로고침 테스트 | `useLocalStorage`, `useReactions` 완성 |
| **6일차** | **MVTI 계산** — 4축 점수, 16개 유형, 신뢰도, MBTI↔MVTI 비교 | `mvtiCalculator`, `MvtiResultPage` |
| **7일차** | **UI 완성** — 사선 포스터 흐름, 반응 선택 UI, 모바일 대응, 접근성 | `DiagonalPosterFlow`, 반응형 CSS, a11y |
| **8일차** | **일일 추천** (시간 허용 시) — 3슬롯 추천, 추천 이유, 피드백 | `DashboardPage`, `recommendationEngine` |
| **9일차** | **Supabase 연동** (시간 허용 시) — 회원가입, 반응 동기화, RLS | Supabase 설정, 로그인 UI |
| **10일차** | **제출 품질** — 전체 테스트, 캡처, AI 검토표, 오류 기록, README | 모든 `docs/`, `screenshots/`, README |

---

### 11. 구현 범위 정리

#### ✅ 반드시 구현 (MVP 필수)

- [x] Vite + React 프로젝트 구조
- [ ] 영화 데이터 60~80편 (`movies.json`) + 4축 라벨링
- [ ] `UserMovieReaction` CRUD 전체
- [ ] LocalStorage 저장/복구/오류 처리
- [ ] MVTI 4축 계산 + 16개 유형 판별
- [ ] MBTI↔MVTI 간극 해석 (SDD 데이터 활용)
- [ ] 신뢰도 표시
- [ ] 포스터 목록 화면
- [ ] 반응 목록/추가/수정 폼/수정 모달/삭제 확인
- [ ] 빈 상태, 입력 오류, 저장 오류 처리
- [ ] 모바일 반응형
- [ ] README, 테스트 기록, AI 활용 기록, 오류 기록
- [ ] 스크린샷 10장

#### ⏳ 시간 허용 시 구현

- [ ] 사선 포스터 흐름 애니메이션 (고급 버전)
- [ ] 일일 3편 추천 + 추천 이유
- [ ] 상황형 필터 (오늘은 가볍게 / 깊게 몰입 등)
- [ ] Supabase 회원가입 + RLS + 반응 동기화
- [ ] OTT 제공처 표시

#### 🚫 과제 이후로 보류

- 협업 필터링
- 사용자 리뷰 커뮤니티
- 유형별 별점 통계
- NLP 리뷰 분석
- 관리자용 영화 풀 편집기
- 상업용 API 라이선스 전환

---

## Verification Plan

### Automated Tests

```bash
# 1. 빌드 성공 확인
npm run build

# 2. 개발 서버 구동
npm run dev
```

### Manual Verification

| # | 검증 항목 | 방법 |
|---|----------|------|
| 1 | **Read**: 기록 목록 표시 | 반응 추가 후 목록 페이지에서 모든 카드 확인 |
| 2 | **Create**: 반응 추가 | 영화 선택 → 반응/강도/메모 입력 → 추가 후 목록에 반영 |
| 3 | **Update**: 반응 수정 | 수정 버튼 → 모달에서 값 변경 → 저장 후 변경 확인 |
| 4 | **Delete**: 반응 삭제 | 삭제 버튼 → 확인 대화상자 → 삭제 후 목록에서 사라짐 |
| 5 | **Persist**: 새로고침 | 데이터 추가 후 F5 → 데이터 유지 확인 |
| 6 | **Empty State**: 빈 목록 | 모든 기록 삭제 후 빈 상태 UI 확인 |
| 7 | **Validation**: 입력 검증 | 필수값 없이 추가 시 에러 메시지 확인 |
| 8 | **Duplicate**: 중복 차단 | 같은 영화 2번 추가 시 차단 메시지 확인 |
| 9 | **MVTI 계산**: 6편 이상 선택 → 결과 화면에서 유형/신뢰도 확인 |
| 10 | **모바일**: 크롬 DevTools 모바일 뷰 확인 |

각 항목에 대해 `screenshots/` 폴더에 캡처를 저장합니다.
