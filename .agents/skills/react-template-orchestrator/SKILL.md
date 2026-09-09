---
name: react-template-orchestrator
description: React UI Template의 공통 컴포넌트와 로컬 카탈로그, React 화면, Express 서버, 환경·빌드·배포 계약을 함께 추적하며 구현과 검증을 조율한다.
---

# React Template Orchestrator

## 언제 사용하는가

- 이 저장소에서 공통 UI, 개발용 컴포넌트 카탈로그, 화면·라우팅, API 호출, 서버, 환경 변수, Webpack 또는 배포 경로를 변경할 때 사용한다.
- 한 파일의 수정이 barrel export, 자동 주입 타입, Sass 테마, 데모 코드, 프록시나 생성 결과에 미치는 영향을 판단할 때 사용한다.
- 설명만 하거나 코드 변경 없이 진단하라는 요청에서는 탐색과 보고까지만 수행한다.

## 필요한 입력

- 사용자의 목표와 완료 기준
- 대상이 공통 컴포넌트, 앱 화면, 클라이언트 기반 구조, 서버 또는 운영 경로 중 어디인지
- 실제 브라우저·서버 검증 필요 여부와 실행 가능한 외부 서비스
- 현재 `git status --short`와 관련 파일의 기존 변경

정보가 부족해도 안전한 읽기 작업부터 진행한다. 결과를 크게 바꾸는 선택이나 외부 시스템 변경이 필요할 때만 사용자에게 묻는다.

## 작업 흐름

### 1. 요청과 상태 고정

1. 사용자의 요청을 기능, 수정 범위, 검증 기준으로 짧게 정리한다.
2. `git status --short`로 기존 변경을 확인하고 덮어쓰지 않는다.
3. `.nvmrc`, 루트와 대상 패키지의 `package.json`, 관련 진입점·barrel·타입·스타일·설정을 확인한다.
4. `references/architecture.md`에서 해당 변경 유형의 연결 계약과 검증 경계를 찾는다.
5. 오래 걸리거나 여러 단계가 필요한 작업만 `_workspace/01_request.md`를 만든다. 작은 작업은 대화 안의 요약으로 충분하다.

### 2. 영향 범위 추적

`references/architecture.md`의 변경 영향표를 사용한다.

- 공통 컴포넌트: 구현과 `*.types.ts` → 인접·상위 barrel → SCSS와 테마 → ProvidePlugin 전역 → 대응 `@Dev` 화면과 `*.code.md`
- 앱 화면: 기능 컴포넌트 → `client/src/component/index.ts` → `MainRouter` 또는 `AuthRouter` → 대응 레이아웃 → 로딩·오류·인증 상태
- 자동 주입 전역: 실제 export → `ProvidePlugin.*.js` → 대응 `.d.ts` → ESLint globals
- 테마: TypeScript 키·타입 → `theme-light.scss`, `theme-dark.scss`, `theme-size.scss`, `theme-screen.scss` → `ThemeProvider`의 CSS 변수 로딩 → 사용 컴포넌트와 로컬 카탈로그
- API 호출: 응답 타입 → `global/api` 래퍼와 오류 처리 → `/api` 경로 재작성 → 쿠키·CSRF 조건
- 서버 엔드포인트: 로컬 라우트 → 프록시 상대 순서 → body parser → 컨트롤러 export → 정적 제공과 SPA fallback
- 환경·운영: `.env.example` → Webpack/Express 소비 코드 → HTTPS·세션·keep-alive·PM2 영향
- 빌드·의존성: 대상 설치 경계의 `package.json` → loader/externals/복사 규칙 → 클라이언트 `dist`와 서버 `dist/app.js` → PM2 실행 경로

### 3. 구현

1. 저장소의 기존 파일명, export 방식, `Props` 분리, SCSS 구조와 코멘트 형식을 우선 재사용한다.
2. 서로 연결된 계약은 같은 변경에서 갱신한다. 타입 오류를 숨기기 위한 `any`, 광범위한 lint 무시, `skipLibCheck` 확대는 사용하지 않는다.
3. 공통 컴포넌트의 props나 동작이 바뀌면 로컬 `/dev/controls`의 조작 예제와 표시 코드가 실제 사용법과 일치하는지 확인한다.
4. 자동 주입 식별자를 임의로 명시 import로 바꾸지 않는다. 새 전역은 주입·타입을 일치시키고, 공통 컴포넌트는 ESLint 인식도 확인한다.
5. 테마 키를 추가·변경할 때 TypeScript 기본 객체와 모든 색상 모드 또는 크기용 CSS 변수를 함께 수정한다.
6. 서버에서는 미들웨어와 라우트 순서를 동작의 일부로 취급한다. 외부 API, Redis, Git, Slack, PM2 호출은 실패와 재시도 시 부작용을 검토한다.
7. 생성물, 배포 브랜치 또는 설치된 모듈을 직접 수정하는 대신 소스·설정·manifest를 수정한다.

### 4. 검증

변경 범위에 맞춰 좁은 검사부터 전체 검사로 진행한다.

1. 수정 파일과 관련 export·타입·스타일·예제 참조를 `rg`로 검색한다.
2. 루트에서 `npm run verify`를 실행한다.
3. Webpack, 환경 주입, 자산 loader, Sass 추출, 서버 번들 또는 배포 경로에 영향을 줬다면 `npm run build`를 추가 실행한다.
4. UI 변경은 `npm run dev`에서 일반 화면과 `/auth/*`, 공통 컴포넌트라면 `/dev/controls`의 기본·오류·상호작용·반응형 상태를 확인한다.
5. 서버 또는 프록시 변경은 가능한 경우 `npm run server:dev`와 실제 HTTP 요청으로 로컬 라우트 우선순위, 상태 코드·응답·경로 재작성을 확인한다.
6. 운영 전용 분기라면 `@Dev` 제외, 런타임 HTML 설정 주입, 정적 자산과 SPA 새로고침 경로를 빌드 결과로 점검한다.
7. `git diff --check`와 `git status --short`로 최종 변경과 기존 사용자 변경의 보존 여부를 확인한다.

실행할 수 없는 검증은 성공으로 표현하지 말고, 미실행 이유와 남은 위험을 결과에 적는다.

### 5. 리뷰와 전달

- 작은 작업은 구현자가 자체 리뷰한다. 인증·세션·웹훅·배포·프로세스 제어처럼 위험한 변경은 별도 리뷰 단계를 둔다.
- 리뷰 기준은 원래 요청 충족, 공통 컴포넌트 공개 계약, 타입·스타일·예제 동기화, 라우트·미들웨어 순서, 오류·빈 상태, 운영 부작용과 검증 증거다.
- 복잡하거나 중단 가능한 작업은 `_workspace/05_review.md`에 `통과`, `수정 필요`, `재검토 필요` 중 하나로 기록한다.
- 최종 보고에는 변경 파일, 핵심 동작, 실행한 검증과 실행하지 못한 검증을 구분한다.

## 협업과 실패 정책

- 기본은 `docs/harness/react-template/team-spec.md`의 순차 파이프라인에 따라 한 에이전트가 분석→구현→검증→리뷰를 소유하는 방식이다.
- 병렬 작업은 사용자가 요청했고 범위가 독립적일 때만 사용한다. 읽기 전용 탐색이나 서로 다른 파일의 리뷰가 적합하며, 같은 파일 수정과 같은 개발 서버·빌드 디렉터리 사용은 직렬화한다.
- 외부 API, Redis, HTTPS 인증서, Slack, Git, GitHub webhook, PM2가 없어 실패한 검증은 코드 실패와 구분한다.
- 검사 실패를 기존 문제로 판단하려면 변경 전 상태나 관련 없는 파일이라는 증거를 남긴다. 실패를 우회하기 위해 검사를 약화하지 않는다.

## 산출물

- 요청에 맞는 소스·설정 변경
- 필요할 때만 생성하는 `_workspace/01_request.md`, `02_design.md`, `04_validation.md`, `05_review.md`
- 실행한 명령과 결과가 포함된 최종 요약
