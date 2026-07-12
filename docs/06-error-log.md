# 오류 해결 기록표 (`06-error-log.md`)

본 문서는 MVTI 프로젝트의 개발 과정 중 발생한 주요 환경적, 코드적 예외 및 오류 사항에 대하여 원인을 심층 분석하고 이를 성공적으로 해결한 조치 기록입니다.

---

## [오류 1] Git 초기 커밋 실패: Author Identity Unknown

* **발생 상황**: 로컬 프로젝트 초기화(`git init`) 후 첫 `git commit` 시도 시 발생.
* **오류 메시지**:
  ```text
  Author identity unknown
  *** Please tell me who you are.
  Run git config --global user.email "you@example.com"
  fatal: unable to auto-detect email address
  ```
* **원인 분석**: Git 최초 커밋 시 커밋의 저자를 식별할 수 있는 전역 또는 지역 이메일과 이름 환경 설정이 존재하지 않아 Git 프로세스가 안전을 위해 커밋 생성을 차단함.
* **해결 내용**: 
  - Git 지역 설정을 통해 본 리포지토리에 한정하여 저자 정보를 명시적으로 등록함.
  ```bash
  git config user.email "antigravity@google.com"
  git config user.name "Antigravity"
  ```
* **재실행 결과**: `Author identity unknown` 오류 없이 `Initial commit` 및 브랜치 생성이 정상 성공함.

---

## [오류 2] PowerShell 스크립트 보안 정책에 따른 npm 실행 거부

* **발생 상황**: Vite 개발 환경 구동을 위해 `npm install` 명령을 터미널에서 실행할 때 발생.
* **오류 메시지**:
  ```text
  npm : 이 시스템에서 스크립트를 실행할 수 없으므로 C:\Program Files\nodejs\npm.ps1 파일을 로드할 수 없습니다. 
  자세한 내용은 about_Execution_Policies 페이지를 참조하십시오.
  CategoryInfo : 보안 오류: (:) [], PSSecurityException
  ```
* **원인 분석**: 윈도우 파워쉘의 기본 보안 실행 정책(`ExecutionPolicy`)에 의해 외부 서명되지 않은 파워쉘 스크립트(`.ps1` 파일)의 실행이 제한되어 npm 스크립트 호출이 차단됨.
* **해결 내용**:
  - 파워쉘 스크립트 정책을 우회하기 위해, 스크립트가 아닌 Windows CMD 실행 파일 규격인 **`npm.cmd`** 형식으로 명령어를 직접 우회 타깃팅하여 실행함.
  ```bash
  npm.cmd install
  npm.cmd run dev
  ```
* **재실행 결과**: 스크립트 권한 에러 없이 의존성 67개 패키지가 9초 만에 정상 완수되었으며, 개발 서버도 포트 3000번에서 성공적으로 리로드 구동됨.

---

## [오류 3] TMDB API Key 가입 반려 오류 (Summary Length)

* **발생 상황**: 영화 포스터 및 데이터 연동을 위한 TMDB API Key 신청 양식 제출 시 발생.
* **오류 메시지**:
  ```text
  Application summary please elaborate on how you plan to use our API
  ```
* **원인 분석**: TMDB 개발자 등록 양식 중 "Application Summary(사용 개요)" 란의 입력 문장 길이가 시스템 내부 필터링 기준(보통 영문 150자 이상)보다 너무 짧거나, 구체적인 설명 목적이 빠져 승인이 제한됨.
* **해결 내용**:
  - 비상업적인 학술 교육 목적의 포트폴리오 프로젝트라는 내용과, 오직 영화 메타데이터의 단순 출력(Read-only)에만 사용하고 마케팅 정보로 활용하지 않는다는 구체적인 문장(300자 이상 영문)을 정교히 작성하여 입력함.
* **재실행 결과**: 반려 없이 신청 즉시 TMDB API Key가 성공적으로 생성 및 발급되어 정상 구동에 사용됨.
