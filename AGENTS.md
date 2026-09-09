# React UI Template 에이전트 가이드

## 무엇을 다루는가

- 이 저장소는 Webpack 기반 React 19 클라이언트와 Express 5 서버를 함께 빌드·배포하는 애플리케이션 템플릿이다.
- `client/src/component/@Common`은 공통 UI 구현, `client/src/component/@Dev`는 로컬 전용 컴포넌트 카탈로그, `client/src/router`와 `client/src/layout`은 화면 노출 계약의 기준 경로다.
- `server/src`는 클라이언트 정적 제공, 로컬 엔드포인트, `/api` 프록시, 세션·스케줄러·배포 훅의 기준 경로다.
- 루트 `.env`를 클라이언트 Webpack과 서버가 함께 읽는다. 비밀값은 커밋하지 말고 공개 가능한 키 목록은 `.env.example`과 동기화한다.

## 반드시 지킬 경계

- 공통 컴포넌트 변경은 구현·타입·barrel export·스타일을 함께 추적하고, 공개 사용법이 바뀌면 대응하는 `@Dev` 예제와 `*.code.md`도 갱신한다.
- 자동 주입 전역은 실제 export, `client/webpack/ProvidePlugin.*.js`, `client/src/@types/webpack.ProvidePlugin.*.d.ts`, 필요 시 ESLint globals를 하나의 계약으로 다룬다.
- 테마 키는 `client/src/theme/@types`와 `client/src/sass/theme-*.scss`의 CSS 변수를 함께 맞춘다. `ThemeProvider`는 누락된 변수를 런타임 오류로 처리한다.
- 새 화면은 컴포넌트 export, `MainRouter` 또는 `AuthRouter`, 대응 레이아웃을 함께 확인한다. `/dev/controls`는 로컬 전용이며 `@Dev` 소스는 운영 번들에서 제외된다.
- Express 로컬 엔드포인트와 AASA 경로는 `/api` 프록시보다 앞에 있어야 한다. body parser, `/deploy/github`, 정적 제공, SPA fallback의 순서를 동작 계약으로 보존한다.
- `client/dist`, `client/build`, `server/dist`, `server/@dev`, `client/tsconfig.tsbuildinfo`는 생성 결과다. 직접 편집하지 않는다.
- `.publish*`, `pm2:*`, `reset:gitignore`, `reinstall*`, `/deploy/github`는 브랜치·프로세스·의존성 또는 배포 상태를 바꾼다. 사용자의 명시적 요청과 대상 환경 확인 없이 실행하지 않는다.

## 작업 방법

- 시작 전에 `git status --short`와 관련 진입점·barrel·타입·스타일·예제를 확인하고 사용자 변경을 보존한다.
- Node는 `.nvmrc`의 `24.12.0`을 사용한다. 루트, `client`, `server`는 npm workspace가 아닌 별도 설치 경계이므로 대상 디렉터리의 `package.json`을 수정한다.
- 일반 코드 변경 후 루트에서 `npm run verify`를 실행한다. Webpack·환경·정적 자산·서버 번들·배포 경로 변경은 `npm run build`도 실행한다.
- UI는 `npm run dev`로 실제 라우팅과 상태를, 서버·프록시는 필요 시 `npm run server:dev`와 실제 HTTP 요청으로 확인한다. 정적 검사나 빌드만으로 런타임 동작을 완료 처리하지 않는다.
- 저장소 전용 작업 절차는 `.agents/skills/react-template-orchestrator/SKILL.md`, 구조 설명과 변경 영향표는 그 스킬의 `references/architecture.md`, 협업 규약은 `docs/harness/react-template/team-spec.md`를 따른다.
