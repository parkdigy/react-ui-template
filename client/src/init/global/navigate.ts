import { NavigateFunction } from 'react-router';

let _navigate: NavigateFunction | undefined;
let _navigateScrollTopPos = 0;

function $setNavigate(navigate: NavigateFunction) {
  _navigate = navigate;
}

function $navigate(path: string, scrollTopPos = 0) {
  if (_navigate) {
    _navigateScrollTopPos = scrollTopPos;
    _navigate(path);
  } else {
    console.log('!Not set navigate.');
  }
}

function $setNavigateScrollTopPos(topPos: number) {
  _navigateScrollTopPos = topPos;
}

function $getNavigateScrollTopPos() {
  return _navigateScrollTopPos;
}

/* eslint-disable no-var */
declare global {
  var __setNavigate: typeof $setNavigate;
  var __setNavigateScrollTopPos: typeof $setNavigateScrollTopPos;
  var __getNavigateScrollTopPos: typeof $getNavigateScrollTopPos;
  var navigate: typeof $navigate;
}
/* eslint-enable no-var */

globalThis.__setNavigate = $setNavigate;
globalThis.__setNavigateScrollTopPos = $setNavigateScrollTopPos;
globalThis.__getNavigateScrollTopPos = $getNavigateScrollTopPos;
globalThis.navigate = $navigate;

export {};
