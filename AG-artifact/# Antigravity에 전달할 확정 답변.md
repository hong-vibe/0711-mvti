# Antigravity에 전달할 확정 답변

## 1. 기술 스택

**React + Vite + Vanilla CSS로 확정합니다. TailwindCSS는 사용하지 않습니다.**

추가 기준은 다음과 같습니다.

* React 함수형 컴포넌트와 Hooks 사용
* 전역 상태관리 라이브러리 없이 `useState`, `useMemo`, `useEffect` 중심
* 필수 CRUD는 LocalStorage 기반으로 먼저 완성
* Supabase·Auth는 필수 CRUD 안정화 이후 선택 확장
* 과도한 라이브러리나 복잡한 아키텍처는 사용하지 않음

과제는 화려한 기술보다 **Read·Create·Update·Delete의 명확한 작동, 데이터 구조, 컴포넌트 분리, 입력·빈 상태·오류 처리, AI 검토 및 README 기록**을 우선 평가하므로 이 구성이 가장 적절합니다. 

---

## 2. 영화 데이터 규모

**MVP 영화 풀은 96편으로 확정합니다.**

다만 “60~100편에 18개 장르를 각각 10편 이상”은 고유 영화 기준으로 동시에 충족하기 어렵습니다. 따라서 MVP에서는 지원 장르를 다음 **8개 운영 장르**로 명확하게 제한합니다.

| MVP 운영 장르   |   목표 수량 |
| ----------- | ------: |
| 드라마         |     12편 |
| 코미디         |     12편 |
| 액션·어드벤처     |     12편 |
| SF          |     12편 |
| 판타지·애니메이션   |     12편 |
| 스릴러·미스터리·범죄 |     12편 |
| 공포          |     12편 |
| 로맨스         |     12편 |
| **합계**      | **96편** |

수량 검증은 중복 장르 태그가 아니라 `primaryGenre`를 기준으로 합니다. 한 영화가 SF·액션·모험에 모두 속하더라도 장르 최소 수량 계산에서는 하나의 주 장르에만 포함합니다.

추가 장르는 `secondaryGenres`와 태그로 저장합니다.

```js
{
  id: "movie-001",
  title: "영화 제목",
  primaryGenre: "SF",
  genres: ["SF", "드라마", "미스터리"]
}
```

MVP 이후에는 다음 순서로 확장합니다.

1. 96편·8개 운영 장르
2. 160편·12개 운영 장르
3. 240편·18개 세부 장르

기존 MBTI 조사 문서의 유형별 영화 목록은 초기 라벨링 참고 자료로만 사용하고, 장기적으로는 자체 사용자의 선호·비선호 반응을 축적해 추천을 개선합니다. 조사 문서도 외부 성격 데이터에 고정적으로 의존하기보다 자체 활동 로그와 평가 데이터를 누적하는 방향을 제안합니다. 

---

## 3. 기존 SDD.txt와의 관계

다음 방향으로 확정합니다.

* 기존 SDD의 **단일 페이지·짧은 타임어택 구조는 그대로 따르지 않음**
* 이번 과제에서는 React CRUD 평가 구조에 맞게 컴포넌트를 분리
* 기존 `GAP_INTERPRETATION_DB`는 폐기하지 않고 MVTI 결과 화면에 활용
* MBTI와 MVTI의 차이를 해석하는 기능은 **파생 결과 기능**으로 유지
* CRUD의 핵심 대상은 영화 원본이 아니라 `사용자 영화 반응 기록`

즉, 기능 구조는 다음과 같습니다.

```text
영화 선택
→ 선호·비선호 기록 생성
→ 기록 조회·수정·삭제
→ 반응 데이터로 MVTI 계산
→ MBTI와 MVTI 차이 해석
→ 오늘의 추천 표시
```

`GAP_INTERPRETATION_DB`는 별도의 복잡한 데이터베이스가 아니라 정적 데이터 파일로 관리합니다.

```text
src/data/gapInterpretations.js
```

이 파일은 CRUD 대상이 아닙니다. CRUD 대상은 다음 구조입니다.

```js
UserMovieReaction {
  id,
  movieId,
  sentiment,
  strength,
  watchStatus,
  note,
  createdAt,
  updatedAt
}
```

---

# Open Questions 확정 답변

## 4. 포스터 이미지 출처

**Placeholder만 사용하지 않고, TMDB 메타데이터를 사전에 수집해 `movies.json`에 저장합니다.**

단, React 앱 실행 중 브라우저에서 TMDB API를 직접 호출하지 않습니다.

### 확정 방식

1. 로컬 개발 환경의 일회성 수집 스크립트가 TMDB 데이터를 호출
2. 수집 결과를 `movies.json`으로 생성
3. React 앱은 생성된 JSON만 읽음
4. API 키는 로컬 `.env`에만 보관
5. `.env`와 API 키는 GitHub에 업로드하지 않음
6. 포스터가 없거나 로딩에 실패하면 로컬 placeholder 표시

권장 구조는 다음과 같습니다.

```text
scripts/
└─ fetchMovies.mjs

src/data/
└─ movies.json

public/
└─ poster-placeholder.svg

.env
.env.example
```

`movies.json`에는 비밀키가 아니라 다음 정보만 저장합니다.

```js
{
  id: "tmdb-157336",
  tmdbId: 157336,
  titleKo: "인터스텔라",
  posterPath: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  primaryGenre: "SF",
  genres: ["SF", "드라마", "모험"]
}
```

### 이 방식을 선택한 이유

* 과제 시연 중 외부 API 장애가 발생해도 목록과 CRUD가 정상 동작함
* 브라우저 코드와 GitHub에 API 키가 노출되지 않음
* 96편의 영화 풀이 항상 동일하게 재현됨
* 실행 화면 캡처 품질이 안정적임
* 데이터 출처와 저작권 점검 내용을 README에 명확히 기록할 수 있음

과제 안내는 API 키와 service role key를 브라우저 코드·README·캡처·GitHub에 노출하지 말 것을 명시합니다. 

**결론: 사전 생성된 TMDB 데이터 + 로컬 fallback placeholder로 진행합니다.**

---

## 5. 배포 환경

**Vercel로 배포합니다.**

선택 이유는 다음과 같습니다.

* Vite 정적 빌드 배포가 간단함
* GitHub 저장소 연결과 재배포가 쉬움
* 향후 Supabase 환경변수를 배포 설정에서 관리 가능
* 제출용 실행 링크를 제공하기 쉬움
* GitHub Pages보다 SPA 경로 설정 부담이 적음

실행 환경은 두 가지를 모두 유지합니다.

```text
로컬 실행: npm run dev
배포 실행: Vercel
```

배포 전에 다음을 확인합니다.

* `.env`가 GitHub에서 제외되었는가
* 소스에 API 키가 하드코딩되지 않았는가
* 배포 URL에서 새로고침 후 정상 실행되는가
* LocalStorage CRUD가 배포 환경에서도 유지되는가
* 외부 링크의 편집 권한이나 개인 정보가 노출되지 않는가

과제 제출에는 GitHub 또는 Drive 링크, 실행 화면 캡처, README, 프롬프트 기록, AI 검토표와 오류 해결 기록이 필수이며, 배포는 이를 보강하는 도전 기능으로 사용합니다. 

---

## 6. MBTI 입력 방식

**4개 축을 각각 질문하지 않고, 사용자가 자신의 MBTI 16개 유형 중 하나를 직접 선택하도록 합니다.**

이유는 다음과 같습니다.

* 이 앱의 목적은 MBTI 검사 제공이 아님
* 사용자가 이미 아는 MBTI를 빠르게 입력하는 것이 적절함
* 4축을 따로 고르게 하면 간이 MBTI 검사로 오해할 수 있음
* 온보딩 시간을 단축할 수 있음
* MBTI보다 영화 선택을 통해 계산되는 MVTI가 중심이라는 점이 명확해짐

UI는 단순 드롭다운보다 **16개 유형 선택 그리드**를 권장합니다.

```text
INTJ  INTP  ENTJ  ENTP
INFJ  INFP  ENFJ  ENFP
ISTJ  ISFJ  ESTJ  ESFJ
ISTP  ISFP  ESTP  ESFP
```

모바일 화면에서는 2열 또는 선택형 `<select>`로 변경할 수 있습니다.

선택지 아래에는 다음 안내를 표시합니다.

> MBTI는 초기 비교 분석을 위한 참고값입니다. 실제 MVTI는 선택한 선호·비선호 영화로 계산됩니다.

MBTI를 모르는 사용자를 위해 `잘 모르겠어요`도 제공합니다. 이 경우 MBTI↔MVTI 비교는 생략하고 영화 반응만으로 MVTI를 계산합니다.

**결론: 16개 MBTI 직접 선택 방식으로 진행합니다.**

---

## 7. 일일 추천 기능

**MVP에 포함합니다. 다만 최소 기능으로 제한합니다.**

과제의 최우선 순서는 다음입니다.

1. Read
2. Create
3. Update
4. Delete
5. LocalStorage 저장
6. 입력 검증·빈 상태·오류 상태
7. MVTI 계산
8. 일일 추천

CRUD와 MVTI 계산이 완성되기 전에 추천 기능을 먼저 구현하지 않습니다. 과제 안내도 필수 CRUD가 안정화되기 전에 Supabase 등 도전 기능을 우선하지 말라고 명시합니다. 

### MVP 일일 추천 범위

로그인 서버나 스케줄러 없이 로컬에서 매일 3편을 계산합니다.

* **정확 추천:** 현재 MVTI와 가장 유사한 영화
* **취향 확장:** 인접한 취향 축을 가진 영화
* **의외의 추천:** 사용자가 적게 선택한 장르의 영화

```text
오늘의 3편
1. 가장 안전한 추천
2. 취향을 한 칸 넓히는 추천
3. 예상 밖의 발견
```

추천 결과에서 다음 피드백을 받을 수 있습니다.

* 좋아요
* 싫어요
* 이미 봤어요
* 보고 싶어요
* 지금은 아니에요

이 피드백은 기존 `UserMovieReaction` CRUD에 저장됩니다. 따라서 추천 기능이 과제의 CRUD와 분리된 장식 기능이 아니라, 새로운 Create·Update 진입점으로 연결됩니다.

### MVP에서 제외할 기능

* 서버 크론 작업
* 푸시 알림
* 이메일 추천
* 추천 이력의 무제한 저장
* 실제 협업 필터링
* 유사 사용자 집계
* 추천 모델 학습
* 매일 자동 DB 생성

날짜를 기준으로 추천 순서를 안정적으로 바꾸는 간단한 로컬 로직이면 충분합니다.

```js
const dailySeed = new Date().toISOString().slice(0, 10);
```

**결론: 일일 추천은 포함하되, 로컬 계산 기반의 오늘의 3편까지만 구현합니다.**

---

# Antigravity가 따라야 할 최종 구현 우선순위

```text
Phase 1
요구사항·데이터 구조·컴포넌트 구조 문서화

Phase 2
96편 movies.json 목록 Read

Phase 3
사용자 영화 반응 Create

Phase 4
반응 목록 Read

Phase 5
반응·강도·메모 Update

Phase 6
반응 기록 Delete와 삭제 확인

Phase 7
LocalStorage 저장·복구·오류 처리

Phase 8
MVTI 4축 계산과 16개 유형 결과

Phase 9
GAP_INTERPRETATION_DB 기반 MBTI↔MVTI 해석

Phase 10
오늘의 3편 추천

Phase 11
Vercel 배포·캡처·README·테스트·AI 검토 기록
```

---

# Antigravity에 그대로 전달할 짧은 답변

```text
확정 사항입니다.

1. 기술 스택
React + Vite + Vanilla CSS로 진행합니다.
TailwindCSS와 별도 전역 상태관리 라이브러리는 사용하지 않습니다.
필수 CRUD는 LocalStorage 기반으로 먼저 완성합니다.

2. 영화 데이터
MVP는 96편으로 구성합니다.
18개 장르 전체가 아니라 다음 8개 운영 장르를 지원하고, primaryGenre 기준 장르별 12편을 확보합니다.
- 드라마
- 코미디
- 액션·어드벤처
- SF
- 판타지·애니메이션
- 스릴러·미스터리·범죄
- 공포
- 로맨스

영화는 복수 genres를 가질 수 있지만 최소 수량 검증은 primaryGenre로 합니다.
240편·18개 장르 확장은 MVP 이후 단계로 남깁니다.

3. SDD 관계
기존 SDD의 단일 페이지 타임어택 구조는 따르지 않고 React CRUD 과제 구조로 재설계합니다.
GAP_INTERPRETATION_DB는 MVTI 결과 화면의 MBTI↔MVTI 차이 분석에 재사용합니다.
CRUD의 핵심 엔터티는 영화가 아니라 UserMovieReaction입니다.

4. 포스터
TMDB 데이터를 브라우저에서 실시간 호출하지 않습니다.
로컬 일회성 스크립트로 TMDB 메타데이터를 수집해 movies.json을 생성합니다.
API 키는 .env에만 저장하고 GitHub에 올리지 않습니다.
앱은 movies.json을 읽고, 이미지 실패 시 로컬 placeholder를 사용합니다.

5. 배포
Vercel에 배포합니다.
로컬 npm run dev 실행도 유지합니다.

6. MBTI 입력
4축 질문 방식이 아니라 16개 MBTI 유형 중 하나를 직접 선택하게 합니다.
UI는 16개 유형 그리드를 기본으로 하고 모바일에서는 select로 전환할 수 있습니다.
'잘 모르겠어요' 선택도 제공합니다.

7. 일일 추천
MVP에 포함하되 CRUD와 MVTI 계산이 완료된 뒤 구현합니다.
서버·크론 없이 날짜와 사용자 취향을 이용해 매일 3편을 로컬 계산합니다.
- 정확 추천
- 취향 확장
- 의외의 추천

추천에 대한 좋아요, 싫어요, 이미 봤어요, 보고 싶어요 피드백은 기존 UserMovieReaction CRUD에 저장합니다.

최우선 완료 기준은 React CRUD 4개 기능, 데이터 구조 정의, 컴포넌트 분리, 입력 검증, 빈 상태, 오류 상태, LocalStorage 유지, 테스트, 실행 캡처, README, AI 검토 및 오류 해결 기록입니다.
```
