import { Location, NavigateFunction } from 'react-router';

/********************************************************************************************************************
 * Variable
 * ******************************************************************************************************************/

let _location: Location<any> | undefined;
let _navigate: NavigateFunction | undefined;
let _navigateScrollTopPos = 0;

/********************************************************************************************************************
 * Function
 * ******************************************************************************************************************/

function setLocation(location: Location<any>) {
  _location = location;
}

function setNavigate(navigate: NavigateFunction) {
  _navigate = navigate;
}

function navigate(path: string, replace = false, scrollTopPos = 0) {
  if (_navigate) {
    _navigateScrollTopPos = scrollTopPos;
    const currentPath = `${_location?.pathname}${_location?.search}${_location?.hash}`;
    if (path === currentPath) {
      window.scrollTo({ left: 0, top: 0 });
    } else {
      _navigate(path, { state: window.location.pathname, replace });
    }
  } else {
    console.log('!Not set navigate.');
  }
}

function navigateBack(path: string) {
  const pathname = path.split('?')[0].split('#')[0];
  if (_location && _location.state === pathname) {
    window.history.back();
  } else {
    navigate(path);
  }
}

function setNavigateScrollTopPos(topPos: number) {
  _navigateScrollTopPos = topPos;
}

function getNavigateScrollTopPos() {
  return _navigateScrollTopPos;
}

/********************************************************************************************************************
 * Global
 * ******************************************************************************************************************/

/* eslint-disable no-var */
declare global {
  var __setLocation: typeof setLocation;
  var __setNavigate: typeof setNavigate;
  var __setNavigateScrollTopPos: typeof setNavigateScrollTopPos;
  var __getNavigateScrollTopPos: typeof getNavigateScrollTopPos;
  var __navigate: typeof navigate;
  var __navigateBack: typeof navigateBack;
}
/* eslint-enable no-var */

globalThis.__setLocation = setLocation;
globalThis.__setNavigate = setNavigate;
globalThis.__setNavigateScrollTopPos = setNavigateScrollTopPos;
globalThis.__getNavigateScrollTopPos = getNavigateScrollTopPos;
globalThis.__navigate = navigate;
globalThis.__navigateBack = navigateBack;

export {};
