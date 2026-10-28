# React UI Template 구조와 변경 영향

## 실행 구조

```text
브라우저
  └─ client/src/index.tsx → App
      ├─ init/axios + 전역 Sass
      └─ BrowserRouter → ErrorBoundary → RootLayout
          ├─ ThemeProvider + ScreenSizeContextProvider + AppContextProvider
          ├─ RootLayoutAppInitializer → g.nav / g.location
          ├─ /auth/* → AuthLayout → AuthRouter
          └─ /*      → DefaultLayout → MainRouter
                         └─ local: /dev/controls → @Dev 컴포넌트 카탈로그

개발: client Rspack 개발 서버 : APP_HOST:APP_PORT
  └─ /api/* → API_URL/*

운영: server/src/app.ts : APP_PORT 또는 APP_SECURE_PORT
  ├─ 로컬 API 버전·AASA 엔드포인트
  ├─ /api/* → API_URL/*
  ├─ /deploy/github
  ├─ client/dist 정적 파일
  └─ 정규식 fallback → EJS로 client/dist/index.html 렌더링
```

## 패키지와 생성 결과

| 영역 | 소스·설정 | 생성 결과 | 핵심 명령 |
| --- | --- | --- | --- |
| 루트 | `package.json`, `.env*`, `.publish*` | 배포 브랜치·배포 묶음 | `npm run verify`, `npm run build` |
| 클라이언트 | `client/src`, `client/public`, `client/rspack*`, `client/package.json` | `client/dist`, `client/build/stats.json`, `client/tsconfig.tsbuildinfo` | `npm run client:dev`, `npm run client:build` |
| 서버 | `server/src`, `server/rspack.config.js`, `server/ecosystem.config.js`, `server/package.json` | 개발 `server/@dev`, 운영 `server/dist/app.js` | `npm run server:dev`, `npm run server:build` |

- 루트에 npm workspace 설정은 없다. 루트·`client`·`server`는 각자 `package.json`과 `node_modules`를 가진 별도 설치 경계다.
- 저장소는 lockfile을 `.gitignore`로 제외한다. 설치된 모듈에서의 성공은 깨끗한 설치 재현성을 증명하지 않는다.
- `client/package.json`은 브라우저 런타임 패키지까지 `devDependencies`에 둔다. 일반적인 dependencies 관례로 임의 재분류하지 말고 배포 방식과 함께 검토한다.

## 클라이언트 경계

### 진입점, 컨텍스트와 라우팅

- `client/src/index.tsx`가 React root를 만들고 lazy `App`을 렌더링한다.
- `App`은 초기화와 전역 Sass, `BrowserRouter`, 루트 오류 경계를 설치한다.
- `RootLayout`은 테마·화면 크기·앱 컨텍스트, 인증 초기화, HTML 로딩, dialog와 toast를 소유한다.
- `RootLayoutAppInitializer`는 React Router 상태를 `g.nav`와 `g.location`에 연결한다.
- `/auth/*`는 `AuthLayout`과 `AuthRouter`, 그 밖의 경로는 `DefaultLayout`과 `MainRouter`가 처리한다. 각 router의 wildcard는 현재 `/`로 이동한다.
- `/dev/controls`와 `DevButtons`는 `env.isLocal`일 때만 노출된다. 운영 Rspack 빌드는 `@Dev` 경로를 `ignore-loader`로 비워 카탈로그 구현과 예제 모듈을 제외한다.

### 컴포넌트와 카탈로그 계약

- 공통 UI는 `client/src/component/@Common/{분류}/{이름}` 아래의 구현, `*.types.ts`, SCSS와 인접 `index.ts`로 구성된다.
- export는 분류별 barrel, `client/src/component/@Common/index.ts`, `client/src/component/index.ts`로 이어진다. 자동 주입 여부와 무관하게 이 공개 경로를 확인한다.
- 기능 화면은 `client/src/component/{기능}` 아래에 두고 인접·상위 barrel과 router에서 연결한다.
- `client/src/component/@Dev`는 공통 컴포넌트의 로컬 카탈로그다. 대화형 옵션, variant 예제, `*.code.md`의 표시 코드는 실제 props와 사용법을 따라야 한다.
- `*.md`와 `*.txt`는 Rspack `asset/source`로 읽는다. 예제 문서의 placeholder 문법은 인접한 기존 예제를 재사용한다.

### 경로 별칭

- `client/tsconfig.json`의 `paths`가 `@comp`, `@ccomp`, `@theme`, `@context` 등의 기준이며 Rspack이 이를 읽어 같은 alias를 만든다.

### 자동 주입 전역

`client/rspack/ProvidePlugin.js`는 다음 묶음을 합친다.

- `ProvidePlugin.react.js`: `React`
- `ProvidePlugin.react-hooks.js`: React 훅
- `ProvidePlugin.pdg.js`: `@pdg/*` 비교·날짜·데이터·훅 유틸리티
- `ProvidePlugin.third-party.js`: router 훅, styled-components, dayjs 등
- `ProvidePlugin.common-component.js`: `Button`, `PageRootContainer`, `T` 등 공통 컴포넌트
- `ProvidePlugin.app.js`: `api`, `g`, `env`, `loadable`, 컨텍스트 훅 등 앱 전역

각 식별자의 TypeScript 선언은 `client/src/@types/rspack.ProvidePlugin.*.d.ts`에 있다. 공통 컴포넌트 목록은 ESLint 전역에도 사용되므로 주입 설정, 타입 선언, ESLint 인식을 함께 맞춘다.

React Compiler는 `builtin:swc-loader`의 `jsc.transform.reactCompiler`로 활성화되어 있고 ESLint는 `React.FC`, `React.memo`, `React.forwardRef` 사용을 금지한다. ref가 필요한 기존 컴포넌트는 저장소의 `useForwardRef` 패턴을 따른다.

### 테마와 스타일

- `client/src/theme/@types`가 색상·크기·화면 키와 `Theme` 기본 shape를 정의한다.
- `client/src/sass/theme-light.scss`, `theme-dark.scss`, `theme-size.scss`, `theme-screen.scss`가 해당 CSS 변수를 제공하고 `sass/index.scss`가 이를 불러온다.
- `ThemeProvider`는 계산된 CSS 변수를 읽어 런타임 theme과 `g.theme`을 채운다. 선언된 색상·크기·화면 변수가 없으면 오류를 던진다.
- 공통 컴포넌트의 색상·크기 props를 바꾸면 TypeScript union, Sass 변수, provider 변환, 카탈로그 옵션을 함께 확인한다.
- 개발은 `style-loader`로 스타일을 주입하고 운영은 `CssExtractRspackPlugin`으로 CSS를 추출한다. 운영 CSS 자산은 `../assets/` 상대 경로로 참조한다.

### API 계약

- 화면 코드는 `client/src/global/api`의 `api` 또는 `createApi`를 기준으로 호출한다.
- 공통 응답은 `ApiResult`, 목록은 필요 시 `ApiPaging` 계약을 사용한다.
- 브라우저 요청의 `/api/foo`는 개발 Rspack과 운영 Express 모두 외부 `API_URL/foo`로 전달된다.
- `APP_HOST`와 `API_URL` 도메인이 다르면 쿠키가 적용되지 않는다는 기존 운영 제약이 있다.
- Axios 초기화는 `XSRF-TOKEN` 쿠키를 `X-CSRF-TOKEN` 헤더로 연결한다.
- 개발 HTML은 `.env` 값을, 운영 HTML은 Express가 EJS로 주입한 `appEnv`와 `title`을 `window.$$MyAppConfig`에 담는다. `global/env`는 이 값을 모드와 버전 플래그로 변환한다.

## 서버 경계

- `server/src/init`이 루트 `.env`와 서버 전역 유틸리티를 먼저 초기화한다.
- Redis 세션은 관련 환경값이 모두 있고 `SESSION_DRIVER=redis`일 때만 설치된다.
- `/api/version/app`과 중첩된 버전 경로, `/apple-app-site-association`, `/.well-known/apple-app-site-association`은 외부 프록시보다 먼저 등록된다.
- 외부 API 프록시는 `/api` prefix를 제거해 `API_URL`로 전달하고 선택적으로 keep-alive agent를 사용한다.
- JSON/body parser는 현재 프록시 뒤, `/deploy/github` 앞에 있다. 순서 변경은 프록시 본문과 webhook 서명 계산에 영향을 줄 수 있다.
- `express.static` 다음의 정규식 fallback은 React Router 새로고침을 위해 `client/dist/index.html`을 EJS로 렌더링한다. Express 5 경로 문법을 고려해 임의의 문자열 wildcard로 되돌리지 않는다.
- 스케줄러는 로컬이 아닌 환경에서 시작하며 `PM2_RELOAD`가 활성화된 경우에만 일일 reload job을 등록한다. `JobBase`는 같은 프로세스 안의 중복 실행만 막는다.
- SIGINT 종료, HTTP→HTTPS redirect, API/app keep-alive timeout, PM2 `ready` 신호와 Slack 기동 알림은 서버 생명주기 계약이다.

## 변경 영향표

| 변경 종류 | 함께 확인할 곳 | 최소 검증 |
| --- | --- | --- |
| 공통 컴포넌트 props·동작 | 구현·타입·SCSS·barrel, ProvidePlugin, `@Dev` 예제·`*.code.md` | `npm run verify` + `/dev/controls` 직접 확인 |
| 새 앱 화면·라우트 | 기능 barrel, `MainRouter`/`AuthRouter`, 레이아웃, 로딩·오류 상태 | `npm run verify` + 대상 URL 직접 확인 |
| 전역 유틸리티 | 실제 export, ProvidePlugin, 전역 `.d.ts`, ESLint globals | `npm run verify` + `npm run client:build` |
| 테마 색상·크기·화면 | theme 타입·기본값, Sass 변수, `ThemeProvider`, 사용 컴포넌트·카탈로그 | `npm run verify` + light/dark·반응형 확인 |
| API 요청/응답 | 화면 타입, `global/api`, 오류 처리, 프록시 경로 | `npm run verify` + 실제 요청 확인 |
| 서버 로컬 API·AASA | 컨트롤러/파일, `app.ts` 라우트 순서, proxy·parser·fallback | `npm run verify` + HTTP 상태/본문 확인 |
| 환경 변수 | `.env.example`, 소비 코드, 개발 HTML과 운영 EJS 차이 | `npm run verify` + 해당 환경 기동 |
| Rspack/자산 | client 또는 server config, public 복사, dist 소비 경로 | `npm run build` |
| 의존성 | 대상 `package.json`, loader/externals, 깨끗한 별도 설치 | `npm run verify`; 필요 시 격리된 clean install/build |
| 세션·보안·배포 | Redis 조건, CSP/CSRF, webhook 서명, PM2 경로 | 전체 빌드 + 격리된 환경 검증과 별도 리뷰 |

## 알려진 검증 경계

- 현재 저장소에는 자동 테스트 스크립트가 없다. `npm run verify`는 lint와 TypeScript 정적 검사만 보장한다.
- `npm run build`는 번들 생성 가능성을 검증하지만 브라우저 UX, 외부 API, Redis, HTTPS, Slack, GitHub webhook, PM2 동작까지 증명하지 않는다.
- React/React DOM은 클라이언트 직접 의존성으로 선언한다. Rspack/SWC로 TSX와 React Compiler를 처리하고 개발 시 Fast Refresh를 사용한다.
- 서버 개발은 Rspack 감시 빌드 후 Node 프로세스를 재시작한다. 모듈별 HMR 대신 프로세스 재시작으로 적용한다.
- 빌드 시 lint와 TypeScript 검사를 선행한다. 개발 시 lint와 클라이언트 TypeScript 검사는 watch로 실행한다.
- SVG는 `@svgr/webpack`과 `url-loader`로 기본 URL export와 `ReactComponent` named export를 함께 제공한다.
- 번들 분석은 `client/build/report.html`과 `client/build/stats.json`을 사용한다. 운영 vendor 청크는 common 패키지, @pdg 패키지, 나머지 패키지별로 이름을 분리한다.
- `client/tsconfig.json`과 `server/tsconfig.json`은 `src/**/*.test.tsx`를 제외하므로 테스트를 추가하면 별도 테스트 runner와 타입 검사 범위를 설계해야 한다.
- 개발 서버의 `@Dev` 화면은 운영 번들 구성, Express EJS 주입과 정적 fallback을 검증하지 않는다. 반대로 운영 빌드는 사용자 상호작용을 검증하지 않는다.
- lockfile이 추적되지 않고 클라이언트 런타임 패키지가 `devDependencies`에 있으므로 현재 설치 트리의 성공을 새 환경의 재현성 증거로 표현하지 않는다.
- `client/dist`와 `server/dist`는 기본 `.gitignore` 대상이지만 배포 준비 과정에서 규칙을 바꾸는 기존 절차가 있다. 일반 개발 중에는 ignore 규칙을 변경하지 않는다.
