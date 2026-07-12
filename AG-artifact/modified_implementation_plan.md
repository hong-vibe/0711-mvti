# MVTI 앱 MVP 구현 계획서 (과제 기준 보강본)

## 배경 및 목표

**MVTI(Movie Viewing Taste Indicator)** — 사용자가 선택한 영화 반응 데이터를 기반으로 4개 축의 영화 취향 유형을 진단하고, 원래 성격(MBTI)과의 간극(Gap)을 분석하는 인터랙티브 웹 앱.

본 계획서는 **과제5_ReactCRUD_과제안내.pdf**에 명시된 평가 기준(필수 CRUD 완성도, 요구사항 정의, AI 활용 기록, 오류 해결 기록, 보안 점검, README 품질 등)을 철저히 충족하도록 설계되었습니다.

---

## 1. 과제 평가 기준 분석 및 반영

과제 안내서의 6개 평가 항목(A~F)을 다음과 같이 반영합니다:

* **A. 필수 CRUD 기능 완성도**: 영화 반응 엔터티(`UserMovieReaction`)에 대해 목록 조회(R), 추가(C), 수정(U), 삭제(D) 기능이 완벽하게 동작하도록 구현합니다.
* **B. 요구사항 정의와 데이터 구조**: 코드 구현 전에 사용자와 입력, 처리, 출력, 데이터 필드, 예외 상황을 정의한 `docs/01-requirements.md`와 `docs/02-data-model.md`를 우선 작성합니다.
* **C. AI 활용 과정과 프롬프트 품질**: 한 번에 전체 앱 작성을 요청하지 않고, 안내서의 수행 절차에 따라 기능 단위별(Read -> Create -> Update -> Delete -> LocalStorage -> 추천)로 프롬프트를 나누어 실행하고 `docs/03-feature-breakdown.md` 및 `docs/04-prompts.md`에 기록합니다.
* **D. 결과 검토와 오류 해결**: 생성된 코드에 대해 11가지 검토 항목 기반의 **AI 생성 결과 검토표**(`docs/05-ai-review.md`)를 작성하고, 발생한 오류와 해결 과정은 **오류 해결 기록표**(`docs/06-error-log.md`)에 상세히 기록합니다.
* **E. README와 제출 품질**: 실행 화면 캡처(목록, 추가, 수정 전/후, 삭제 확인, 삭제 결과, 빈 상태, 새로고침 유지 등 총 10장)와 배운 점, 보안/저작권 점검 결과를 포함한 `README.md`를 최종 완성합니다.
* **F. 권장/도전 기능 또는 개선 태도**: **LocalStorage 저장** 및 **컴포넌트 분리(App, Form, List, Card 등)**를 준수하고, **Vercel 배포** 및 **일일 추천 기능**을 보완 제출 요소로 포함합니다.

---

## 2. 데이터 모델 (최종 확정)

### Movie (`src/data/movies.json`)
```typescript
interface Movie {
  id: string;               // "tmdb-ID" 형식
  tmdbId: number;
  titleKo: string;
  originalTitle: string;
  releaseYear: number;
  primaryGenre: string;     // 8대 장르 (드라마, 코미디, 액션·어드벤처, SF, 판타지·애니메이션, 스릴러·미스터리·범죄, 공포, 로맨스)
  genres: string[];         // 전체 장르 목록
  posterPath: string;       // 포스터 이미지 경로
  overviewKo: string;
  originalLanguage: string;
  runtime: number | null;

  // 4축 취향 지표 (0~100)
  fictionReality: number;   // 0: Reality(현실) ↔ 100: Fiction(비현실)
  highLowTempo: number;     // 0: Low Tempo(저자극) ↔ 100: High Energy(고자극)
  emotionIdea: number;      // 0: Idea(사유) ↔ 100: Emotion(감정)
  openClosure: number;      // 0: Closure(완결) ↔ 100: Open(여운)
}
```

### UserMovieReaction (LocalStorage CRUD 대상)
```typescript
interface UserMovieReaction {
  id: string;               // UUID 또는 고유 타임스탬프
  movieId: string;          // Movie.id 매핑
  sentiment: "like" | "dislike" | "neutral";
  strength: 1 | 2 | 3;      // 1: 약함, 2: 보통, 3: 강함
  watchStatus: "seen" | "wantToWatch" | "notNow";
  note: string;             // 한줄 평/메모
  createdAt: string;        // ISO 8601
  updatedAt: string;        // ISO 8601
}
```

---

## 3. UI 컴포넌트 아키텍처 (역할 분리)

과제 가이드라인의 "컴포넌트 분리(App, Form, List, Item/Card)"를 충족하도록 설계합니다.

```text
App.jsx (전체 Layout, Page Routing 및 전역 상태 전달)
├─ LandingPage.jsx (영화 다중 선택 및 트레이 제공)
│  ├─ DiagonalPosterFlow.jsx (사선 포스터 무한 롤링 레인)
│  └─ SelectionTray.jsx (하단 고정 영화 선택/조정 트레이)
├─ OnboardingPage.jsx (MBTI 선택 및 초기 반응 등록)
│  └─ MbtiGridSelector.jsx (16개 MBTI 그리드 UI / 모바일 select 폴백)
├─ MvtiResultPage.jsx (결과 시각화 및 간극 분석)
│  ├─ AxisChart.jsx (4축 취향 지표 바 차트)
│  └─ GapAnalysis.jsx (MBTI↔MVTI 간극 해석 - GAP_INTERPRETATION_DB)
├─ MyTastePage.jsx (★CRUD 구현 핵심 페이지)
│  ├─ ReactionForm.jsx (영화 검색창 및 신규 반응 추가 폼 - Create)
│  ├─ ReactionList.jsx (등록된 반응 카드 그리드 - Read)
│  │  └─ ReactionCard.jsx (개별 영화 반응 카드 - Update/Delete 트리거 포함)
│  ├─ EditReactionModal.jsx (수정 팝업 모달 - Update)
│  └─ ConfirmDialog.jsx (삭제 확인 팝업 - Delete)
└─ DashboardPage.jsx (대시보드 및 일일 추천)
   └─ DailyRecommendations.jsx (오늘의 3편 추천 슬롯 및 피드백)
```

---

## 4. 예외 상태 및 입력 검증 (10대 시나리오)

과제 평가 시 빈 상태 및 오류 처리가 원활한지 확인하는 검증 루틴을 포함합니다:

1. **빈 제목/필수값 누락**: 한줄 평 등록 시 sentiment 미선택이나 공백 제출 방지 -> 경고 피드백 표시.
2. **동일 영화 중복 추가**: 이미 반응이 등록된 영화에 대해 추가 시도 시 "이미 추가된 영화입니다" 토스트 알림 및 등록 방지.
3. **빈 목록 상태 (Empty State)**: 반응 내역이 하나도 없을 때 "아직 등록된 영화 반응이 없습니다. 영화를 추가하여 MVTI를 분석해보세요!" 메시지 및 추가 유도 버튼 노출.
4. **로컬스토리지 JSON 손상**: parse 에러 발생 시 try-catch로 캐치하여 초기 빈 배열로 안전하게 복구.
5. **포스터 이미지 로딩 실패**: 이미지 onerror 이벤트 발생 시 로컬 `poster-placeholder.svg`로 대체하고 타이틀 텍스트를 중앙에 표기.
6. **존재하지 않는 ID 접근**: 수정/삭제 요청 시 ID 유효성을 검사하여 무반응 에러가 나지 않도록 차단.
7. **MVTI 분석 최소 기준 미달**: 등록된 영화 반응이 6편 미만일 시 결과 분석 페이지에서 "최소 6편 이상의 영화 반응을 기록해야 정확한 MVTI가 계산됩니다." 경고 배너 및 진입 제한 처리.
8. **MBTI 미선택 ('잘 모르겠어요')**: 간극 분석 영역에 "MBTI 정보가 입력되지 않아 취향 분석만 제공합니다"로 자연스러운 폴백 문구 노출.
9. **저장 실패 (QuotaExceededError)**: 용량 초과 에러 시 "브라우저 저장 공간이 부족합니다. 일부 기록을 삭제해주세요" 사용자 알림.
10. **추천 영화 부족**: 전체 영화 중 이미 평가한 영화가 96편에 가까워 추천할 풀이 부족할 경우, 기존 평가 항목 중 일부를 무작위 추천 혹은 "새로운 영화를 불러올 수 없습니다" 안내.

---

## 5. Verification Plan (과제 테스트 시나리오 일치)

과제 안내서 14페이지의 `12-1. 기능 테스트 시나리오`에 명시된 9대 테스트 항목을 100% 매핑하여 테스트를 수행하고 결과를 `docs/07-test-results.md`에 기록합니다.

| 번호 | 테스트 항목 | 입력 또는 행동 | 기대 결과 |
|---|---|---|---|
| 1 | **초기 화면** | 앱 실행 (LocalStorage 초기 상태) | 샘플 영화 목록 노출 또는 "등록된 반응 없음" 빈 상태 표시 |
| 2 | **항목 추가** | 정상 제목 및 반응 입력 후 추가 | 반응 목록 및 대시보드에 새 항목이 즉시 표출됨 |
| 3 | **빈 입력 검증** | 필수값(선호도) 없이 추가 시도 | "선호도를 선택해주세요" 등의 유효성 에러 메시지 표시 |
| 4 | **항목 수정** | 특정 항목의 강도/메모 수정 | 변경 사항이 화면과 LocalStorage에 즉시 반영됨 |
| 5 | **수정 취소** | 수정 모달에서 취소 버튼 클릭 | 기존의 데이터 값들이 변경되지 않고 그대로 유지됨 |
| 6 | **항목 삭제** | 삭제 버튼 클릭 후 확인 클릭 | 목록에서 해당 영화 반응 카드가 영구 제거됨 |
| 7 | **빈 상태** | 모든 영화 반응 항목 삭제 | "등록된 반응이 없습니다" 안내문 및 영화 추가 CTA 표시 |
| 8 | **새로고침** | CRUD 작업 수행 후 브라우저 새로고침(F5) | LocalStorage 연동으로 이전 데이터 상태가 그대로 유지됨 |
| 9 | **보안/키 유출 검증** | 배포된 소스코드 및 GitHub 확인 | `.env` 제외 확인, 코드 및 커밋 로그 내 TMDB API 키 하드코딩 여부 점검 |

---

## 6. 보안 및 저작권 점검 계획 (15일차 반영)

과제 안내서 15페이지의 `13. 보안·개인정보·저작권·키 관리 안내` 수칙을 준수합니다.

* **API Key 보안**: 영화 수집 시 사용하는 TMDB API Key는 로컬 `.env`에 보관하며, `.gitignore`에 `.env` 및 `scripts/` 빌드 환경을 반드시 추가하여 커밋에 포함되지 않게 합니다.
* **민감 정보**: 사용자 데이터는 로컬스토리지에만 저장하며 실명, 이메일 등 개인정보를 절대 수집하거나 저장하지 않습니다.
* **저작권 명시**: 영화 이미지와 정보의 출처가 **TMDB(The Movie Database)**임을 사이트 하단(Footer) 및 README.md에 가이드라인에 맞추어 명확히 명시합니다.

---

## 7. 구현 일정 (10일 계획)

* **1일차**: 요구사항 및 데이터 구조 정의 (`docs/01`, `docs/02` 작성) 및 TMDB 96편 영화 사전 수집 스크립트 실행 (`movies.json` 생성).
* **2일차**: LocalStorage 연동 Hook 설계 및 CRUD 핵심 로직(`useReactions.js`) 작성.
* **3일차**: 랜딩 페이지 퍼블리싱 및 사선 포스터 무한 스크롤 애니메이션 디자인.
* **4일차**: Onboarding Page 퍼블리싱 (16개 MBTI 그리드 및 드롭다운 반응형 UI).
* **5일차**: 내 취향 페이지(MyTastePage) Read & Create 개발 (영화 검색, 반응 입력 폼).
* **6일차**: 내 취향 페이지 Update & Delete 개발 (수정 모달 및 삭제 확인 팝업 연동).
* **7일차**: MVTI 계산 공식 구현 및 결과 페이지(차트 및 간극 분석) 연동.
* **8일차**: 날짜 시드형 오늘의 3편 추천 모듈 및 피드백 CRUD 연결.
* **9일차**: 전체 Vanilla CSS 세부 폴리싱 및 모바일 디바이스 뷰포트 호환성 확인.
* **10일차**: Vercel 최종 배포 및 9대 예외/테스트 케이스 검증 후 README.md, AI 활용 보고서 완성.
