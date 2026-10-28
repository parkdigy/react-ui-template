# Rspack 전환 검증

- Node 24.22.1, Rspack core/CLI 2.2.9, dev-server 2.2.2, React Refresh plugin 2.0.2.
- `npm run verify`: 클라이언트·서버 ESLint/TypeScript 통과.
- `npm run build`: 클라이언트·서버 운영 번들 생성 통과. 빌드 스크립트에서도 lint/tsc를 선행한다.
- `git diff --check`: 통과.
- 실행 스크립트와 앱 번들러는 Rspack이다. 클라이언트의 호환 로더 peer dependency 때문에 npm 설치 트리에 webpack이 포함되지만 webpack-cli/webpack-dev-server는 설치하지 않는다. 서버의 Babel core/register 없음.
- 앱의 TSX와 React Compiler는 builtin:swc-loader로 처리한다. ESLint 분석과 SVG 변환용 SVGR은 Babel을 내부적으로 사용한다.
- 실제 개발 브라우저: Home 렌더링. 임시 카운터를 1로 변경한 뒤 소스 문구를 수정해 새로고침 없이 문구 변경과 카운터 1 유지 확인. 임시 코드는 원복했다.
- 실제 브라우저 DOM에서 동적 SCSS CSS 청크 로딩 확인.
- 개발 서버/Express 각각 로컬 테스트 백엔드로 `/api/proxy-probe?x=1` POST 요청. `/proxy-probe?x=1`로 전달되고 JSON 본문 유지 확인.
- Express 개발 서버: 버전 API 정상 응답, 중첩 SPA 경로 HTML 200 및 EJS 환경값 렌더링 확인.
- 서버 소스에 임시 응답 헤더를 추가해 자동 재빌드·프로세스 재시작 후 응답 헤더 반영 확인. 원복 후 헤더 제거 확인.
- 운영 번들을 `node server/dist/app.js`로 실행하여 브라우저 중첩 경로→Home 라우팅, 실제 앱 제목, 콘솔 오류 없음 확인.
- 운영 HTML은 직렬화 후 EJS 자리표시자를 삽입하여 제목·환경값과 버전 API의 기존 파싱 계약을 유지한다.
- 제한된 실행 환경의 native watcher는 EMFILE이 발생하므로 CHOKIDAR_USEPOLLING=true WATCHPACK_POLLING=true로 동작 검증했다. 일반 실행 명령과 폴링 명령은 README에 기재했다.

## 동작 변경 및 검증 경계

- 서버 개발은 모듈 단위 HMR 대신 빌드 후 Node 프로세스 재시작을 사용한다.
- 기존 번들 분석 HTML을 `client/build/report.html`에 복원하고 `client/build/stats.json`도 유지한다.
- SVG는 기본 URL과 `ReactComponent` named export를 모두 지원한다. CSS/HTML의 SVG 참조는 asset 모듈로 처리한다.
- Redis/외부 API/HTTPS/PM2/배포 훅은 실행하지 않았다. 로컬 테스트는 APP_ENV=local, SESSION_DRIVER=memory, 별도 포트와 테스트 백엔드로 격리했다.
- package-lock.json은 기존 저장소 정책상 Git 제외이며 로컬 설치 시 함께 갱신되었다.

## 기존 Webpack 설정과의 기능 비교 후 검증

- `npm run verify`, `npm run build`: 통과. 서버와 클라이언트 운영 빌드 성공.
- 운영 stats의 `@Dev` 항목은 ignore-loader로 비운 `index.ts` 1바이트만 남는다. 카탈로그 구현·예제 모듈은 없다.
- 기존 `vendors/_common_*`, `vendors/_pdg_*`, 패키지별 vendor 청크 이름 규칙을 복원했다.
- 개발 서버를 별도 포트 19906과 폴링 모드로 실행해 `/dev/controls`의 카탈로그·FormRadioGroup 렌더링과 SVG 43개를 확인했다. 브라우저 콘솔 오류 없음.
- 개발 DOM에 style 태그가 주입되는 것을 확인했다. 임시 SCSS outline 수정이 새로고침 없이 반영되고 폼 화면이 유지됐다. 임시 소스 수정은 원복했다.
- 임시 자산 입력으로 100KB 초과 SVG의 파일 저장·URL/default export·ReactComponent export, HTML 내부 이미지, CSS의 상대 자산 경로, `.mjs`의 확장자 없는 import를 확인했다.
- 운영 HTML의 EJS 자리표시자와 `window.$$MyAppConfig` 주입은 유지된다.
- Rspack CLI가 개발 시 자동으로 켜는 지연 컴파일을 명시적으로 껐다. 서버 재시작 후 지연 청크를 기다리며 로딩이 멈추는 경우를 방지하고 기존 Webpack의 전체 컴파일 방식을 유지한다.
