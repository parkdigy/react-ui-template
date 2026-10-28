# Rspack 전환 검증

- Node 24.22.1, Rspack core/CLI 2.2.9, dev-server 2.2.2, React Refresh plugin 2.0.2.
- `npm run verify`: 클라이언트·서버 ESLint/TypeScript 통과.
- `npm run build`: 클라이언트·서버 운영 번들 생성 통과. 빌드 스크립트에서도 lint/tsc를 선행한다.
- `git diff --check`: 통과.
- npm 의존성 트리: 클라이언트·서버 모두 webpack/webpack-cli/webpack-dev-server 없음. 서버의 Babel core/register 없음.
- 클라이언트는 기존 eslint-plugin-react-hooks 내부 분석용 @babel/core/parser와 라이브러리의 @babel/runtime이 간접 의존성으로 남는다. 빌드는 builtin:swc-loader로만 처리하며 Babel 변환은 실행하지 않는다. 검사 규칙을 약화하거나 구버전으로 내리지 않았다.
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
- 기존 번들 분석 HTML은 `client/build/stats.json`으로 대체했다.
- SVG는 이미지 URL 자산으로 처리한다. 기존 소스에는 SVG React 컴포넌트 import가 없으며 Babel을 요구하는 SVGR은 제거했다.
- Redis/외부 API/HTTPS/PM2/배포 훅은 실행하지 않았다. 로컬 테스트는 APP_ENV=local, SESSION_DRIVER=memory, 별도 포트와 테스트 백엔드로 격리했다.
- package-lock.json은 기존 저장소 정책상 Git 제외이며 로컬 설치 시 함께 갱신되었다.
