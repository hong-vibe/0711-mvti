# MVTI - Movie Viewing Taste Indicator

사용자가 선택한 영화의 선호 반응을 기록(CRUD)하고 분석하여, 성격 유형(MBTI)과 실제 미디어 취향(MVTI)의 간극을 도출해주는 인터랙티브 영화 취향 분석 서비스입니다.

---

## 🚀 주요 기획적 특징

1. **Unique Dislike Correlation (독특한 불호 기반 추천)**
   - 대다수가 명작이라 부르는 유명 영화 중에서 **나만 굳이 싫어하는 영화들**이 나의 진짜 개성적인 취향을 대변합니다.
   - 1단계(선호 선택)와 2단계(불호 선택)를 순차적으로 거치며, "남들의 명작 중 나만의 독특한 불호 코드"가 정확히 일치하는 타 유저의 최애 영화를 신뢰도 높게 추천하는 추천 지표를 제공합니다.

2. **약식 MBTI 4문항 테스트 내장**
   - 자신의 MBTI를 잘 모르는 사용자도 온보딩 과정에서 4가지 간단한 성향 질문에 응답하면 자동으로 MBTI가 도출되어 비교 분석 프로세스를 막힘없이 진행할 수 있습니다.

---

## 🛠️ 사용 기술 및 구동 환경

* **Core**: React 18, Vite
* **Styling**: Vanilla CSS (다크 극장 무드 및 네온 포인트 컬러, 글래스모피즘 룩앤필 적용)
* **Storage**: LocalStorage (비즈니스 데이터 브라우저 영속성 관리)
* **Data**: TMDB (The Movie Database) API 연동 영화 데이터셋 (101편 수집)

---

## 📁 폴더 구조

```text
mvti-app/
├─ index.html
├─ package.json
├─ vite.config.js
├─ scripts/
│  └─ fetchMovies.mjs          # 영화 데이터 수집 Node.js CLI 스크립트
├─ public/
│  └─ poster-placeholder.svg   # 이미지 미싱 대비 SVG 폴백 이미지
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx                  # 2단계 온보딩 흐름 조립 메인 컨트롤러
│  ├─ index.css                # 글로벌 다크/네온 디자인 시스템 CSS
│  ├─ data/
│  │  ├─ movies.json           # 수집 완성된 101편 명작 영화 데이터셋
│  │  └─ gapInterpretations.js # MBTI↔MVTI 간극 매핑 해석 DB
│  ├─ components/
│  │  ├─ landing/
│  │  │  ├─ DiagonalPosterFlow.jsx # 무한 롤링 사선 포스터 레인
│  │  │  └─ SelectionTray.jsx      # 하단 고정형 다이내믹 선택 트레이
│  │  └─ onboarding/
│  │     ├─ MbtiGridSelector.jsx   # 16개 MBTI 그리드 및 모바일 폴백 select
│  │     └─ MbtiMiniTest.jsx       # 4문항 자가 진단 간이 MBTI 질문지
│  └─ hooks/
│     ├─ useLocalStorage.js        # 로컬스토리지 영속 저장 및 파싱 에러 방어
│     └─ useReactions.js           # UserMovieReaction 엔터티 CRUD 제어 훅
└─ docs/
   ├─ 01-requirements.md           # 요구사항 정의서 및 기능 분해표
   ├─ 02-data-model.md             # 상세 데이터 모델 및 스키마 명세서
   ├─ 04-prompts.md                # AI 활용 프롬프트 및 아카이브 기록
   ├─ 05-ai-review.md              # AI 생성물 자가 검토 및 개선 흔적 기록
   └─ 06-error-log.md              # 개발 중 발생한 문제 원인 및 해결 기록
```

---

## ⚙️ 설치 및 로컬 실행 방법

파워쉘의 스크립트 실행 제한 에러를 우회하기 위해 `.cmd` 확장자를 명시해 실행하는 것을 권장합니다.

```bash
# 1. 의존성 라이브러리 설치
npm.cmd install

# 2. 로컬 개발 서버 실행 (자동 브라우저 실행 - 3000포트)
npm.cmd run dev
```

---

## 🎬 영화 데이터셋 수집 및 갱신 방법

로컬 프로젝트 루트에 `.env` 파일을 복사 생성하고 발급받은 TMDB API Key를 적어 넣은 뒤 실행합니다.

```bash
# .env 내용 예시
VITE_TMDB_API_KEY=your_actual_tmdb_api_key

# 영화 정보 및 고화질 포스터 경로 실시간 수집 실행 (101편)
node scripts/fetchMovies.mjs
```

* API Key가 없거나 설정되지 않았을 경우 자동으로 **폴백(Fallback) 모드**가 구동되며, 내장된 사전 정의 데이터와 `poster-placeholder.svg`를 활용해 빌드에 이상이 없도록 `movies.json`을 자동 생성해 줍니다.

---

## 🔒 보안 및 저작권 명시 (Attribution)

1. **보안 지침 준수**:
   - API Key 유출 위험이 있는 `.env` 파일과 `node_modules` 폴더는 `.gitignore`에 등록되어 GitHub 레포지토리에 커밋되지 않도록 철저히 차단되어 있습니다.
   - 사용자 데이터를 서버에 보관하지 않으며, 전적으로 브라우저 내부 `LocalStorage`에만 익명 처리하여 저장합니다.

2. **저작권 출처 표기**:
   - 본 서비스는 영화 메타데이터 및 이미지 로드를 위해 **TMDB (The Movie Database)**의 API를 활용하며, 관련 FAQ 및 브랜딩 수칙을 준수합니다.
   - *This product uses the TMDB API but is not endorsed or certified by TMDB.*
