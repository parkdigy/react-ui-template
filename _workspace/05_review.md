# 리뷰: 통과

클라이언트·서버의 빌드, 개발 실행, 전역 주입/타입/ESLint 참조, 배포 제외 경로와 저장소 안내를 Rspack 기준으로 전환했다. Babel 설정, 직접 의존성과 플러그인, Webpack 의존성, 패치 및 서버 module.hot 코드를 제거했다. React Compiler와 Fast Refresh는 SWC에서 동작한다.

정적 검사, 운영 빌드, 실제 개발/운영 브라우저, HMR 상태 유지, CSS, 버전/HTML 렌더링, 로컬 프록시 및 서버 재시작을 검증했다. Babel은 ESLint·SVGR·라이브러리 내부 간접 의존성으로 남는다. 기능 차이와 외부 환경 검증 경계는 04_validation.md와 README에 명시했다.

기존 클라이언트 Webpack 설정과 비교해 운영 카탈로그 제외, 패키지별 청크 분할, HTML 번들 분석 보고서, 개발 스타일 주입과 외부 소스맵, 의존성 소스맵, HTML import와 `.mjs` 해석을 복원했다. lint/TypeScript는 기존 Rspack 스크립트의 선행 검사와 감시 검사로 유지한다. 별도 포트의 개발 카탈로그·SVG 렌더링·SCSS HMR과 임시 자산 번들 검증을 완료했다.
