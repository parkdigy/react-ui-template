import fileDownload from 'js-file-download';
import { AxiosResponse } from 'axios';
import { ApiOption, Api, ApiError, ApiRequestData, ApiRequestOption } from '@pdg/api';
import { ApiResult } from './api.types';
import app from '@app';

const defaultOption: ApiOption = {
  baseUrl: '/api',
  timeParamName: '__t__',
  async onRequest(config, baseUrl, path, requestData, requestOption) {
    if (!requestOption?.silent) {
      // 로딩 표시
      __showLoading();
    }
    return config;
  },
  async onResponse(res, config, baseUrl, path, requestData, requestOption) {
    if (!requestOption?.silent) {
      // 로딩 숨김
      __hideLoading();
    }
    const responseData = res.data;
    if (!requestOption?.raw) {
      if (!responseData || !responseData?.result)
        throw new ApiError('예샹치 못한 오류가 발생했습니다.', 'API_ERR_NO_RESULT');
      if (responseData.result.r) {
        __navigate(responseData.result.r);
      }
      if (responseData.result.ro) {
        window.open(responseData.result.ro);
      }
      if (responseData.result.c !== 0) {
        throw new ApiError(responseData.result.m, `${responseData.result.c}`);
      } else {
        if (!requestOption?.silent && notEmpty(responseData.result.m)) {
          app.showSuccessAlert(responseData.result.m);
        }
      }
    }
    return responseData;
  },
  onError(err: ApiError<ApiResult>) {
    const { silent } = err.requestOption || {};
    if (!silent) {
      // 로딩 숨김
      __hideLoading();
    }

    const data = err.response?.data;
    if (data && typeof data === 'object' && data.result) {
      if (data.result.c === 99997) {
        window.location.href = '/auth/signin';
      } else if (!silent) {
        app.showErrorAlert(
          `(${data.result.c}) ${notEmpty(data.result.m) ? data.result.m : '예상치 못한 오류가 발생했습니다.'}`
        );
      }
    } else if (!silent) {
      app.showErrorAlert(`(${err.code}) ${err.message}`);
    }
  },
};

export default {
  /**
   * GET 요청
   * @param path API 경로
   * @param data 요청 데이터
   * @param option API 옵션
   */
  get<T>(path: string, data?: ApiRequestData, option?: ApiRequestOption) {
    return new Api<T>(defaultOption).get(path, data, option);
  },

  /**
   * POST 요청
   * @param path API 경로
   * @param data 요청 데이터
   * @param option API 옵션
   */
  post<T>(path: string, data?: ApiRequestData, option?: ApiRequestOption) {
    return new Api<T>(defaultOption).post(path, data, option);
  },

  /**
   * PATCH 요청
   * @param path API 경로
   * @param data 요청 데이터
   * @param option API 옵션
   */
  patch<T>(path: string, data?: ApiRequestData, option?: ApiRequestOption) {
    return new Api<T>(defaultOption).patch(path, data, option);
  },

  /**
   * DELETE 요청
   * @param path API 경로
   * @param data 요청 데이터
   * @param option API 옵션
   */
  delete<T>(path: string, data?: ApiRequestData, option?: ApiRequestOption) {
    return new Api<T>(defaultOption).delete(path, data, option);
  },

  /**
   * 파일 다운로드
   * @param path API 경로
   * @param data 요청 데이터
   */
  export(path: string, data?: ApiRequestData) {
    let fileName: string;

    const option: ApiOption = {
      ...defaultOption,
      async onResponse(res: AxiosResponse) {
        const contentDisposition = res.headers['content-disposition'];
        if (contentDisposition) {
          fileName = getFilenameFromContentDispositionHeader(contentDisposition);
        }
        return res.data;
      },
    };
    new Api(option).get(`export/${path}`, data, { raw: true }).then((data) => {
      fileDownload(data, fileName);
    });
  },
};

export function createApi<T>(option: Partial<ApiOption>) {
  return new Api<T>({ ...defaultOption, ...option });
}

/********************************************************************************************************************
 * getFilenameFromContentDispositionHeader
 * ******************************************************************************************************************/

/**
 * HTTP Header 의 Content-Deposition 에서 파일명을 추출합니다.
 * @param contentDisposition HTTP Header 의 Content-Deposition
 */
function getFilenameFromContentDispositionHeader(contentDisposition: string) {
  let needsEncodingFixup = true;

  function toParamRegExp(attributePattern: string, flags: string): RegExp {
    return new RegExp(
      `(?:^|;)\\s*${attributePattern}\\s*=\\s*` + '(' + '[^";\\s][^;\\s]*' + '|' + '"(?:[^"\\\\]|\\\\"?)+"?' + ')',
      flags
    );
  }
  function textDecode(encoding: string, $value: string): string {
    let value = $value;
    if (encoding) {
      try {
        const decoder = new TextDecoder(encoding, { fatal: true });
        const bytes = Array.from(value, (c) => c.charCodeAt(0));
        if (bytes.every((code) => code <= 0xff)) {
          value = decoder.decode(new Uint8Array(bytes));
          needsEncodingFixup = false;
        }
      } catch {} //eslint-disable-line no-empty
    }
    return value;
  }
  function fixupEncoding($value: string): string {
    let value = $value;
    if (needsEncodingFixup && /[\x80-\xff]/.test(value)) {
      value = textDecode('utf-8', value);
      if (needsEncodingFixup) {
        value = textDecode('iso-8859-1', value);
      }
    }
    return value;
  }
  function rfc2616unquote($value: string): string {
    let value = $value;
    if (value.startsWith('"')) {
      const parts = value.slice(1).split('\\"');
      for (let i = 0; i < parts.length; i += 1) {
        const quotindex = parts[i].indexOf('"');
        if (quotindex !== -1) {
          parts[i] = parts[i].slice(0, quotindex);
          parts.length = i + 1; // Truncates and stop the iteration.
        }
        parts[i] = parts[i].replace(/\\(.)/g, '$1');
      }
      value = parts.join('"');
    }
    return value;
  }
  function rfc5987decode(extValue: string) {
    const encodingEnd = extValue.indexOf("'");
    if (encodingEnd === -1) return extValue;
    const encoding = extValue.slice(0, encodingEnd);
    const langValue = extValue.slice(encodingEnd + 1);
    const value = langValue.replace(/^[^']*'/, '');
    return textDecode(encoding, value);
  }
  function rfc2231GetParam($contentDisposition: string): string {
    const matches = [];
    const iter = toParamRegExp('filename\\*((?!0\\d)\\d+)(\\*?)', 'ig');
    let match = iter.exec($contentDisposition);
    while (match) {
      const [, n, quot, part] = match;
      const n2 = parseInt(n, 10);
      if (n2 in matches) {
        if (n2 === 0) break;
      } else {
        matches[n2] = [quot, part];
        match = iter.exec($contentDisposition);
      }
    }
    const parts = [];
    for (let n = 0; n < matches.length; n += 1) {
      if (!(n in matches)) {
        break;
      }
      const [quot, part] = matches[n];
      let part2 = rfc2616unquote(part);
      if (quot) {
        part2 = decodeURIComponent(part2.replace(/\+/g, '%20'));
        if (n === 0) {
          part2 = rfc5987decode(part2);
        }
      }
      parts.push(part2);
    }
    return parts.join('');
  }
  function rfc2047decode(value: string): string {
    //eslint-disable-next-line no-control-regex
    if (!value.startsWith('=?') || /[\x00-\x19\x80-\xff]/.test(value)) {
      return value;
    }
    return value.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, (_, charset, encoding, text) => {
      let newText: string = text;
      if (encoding === 'q' || encoding === 'Q') {
        newText = newText.replace(/_/g, ' ');
        newText = newText.replace(/=([0-9a-fA-F]{2})/g, (_2, hex) => String.fromCharCode(parseInt(hex, 16)));
        return textDecode(charset, newText);
      }
      try {
        newText = atob(newText);
      } catch {} //eslint-disable-line no-empty
      return textDecode(charset, newText);
    });
  }

  let exps = toParamRegExp('filename\\*', 'i').exec(contentDisposition);
  if (exps) {
    const exp = exps[1];
    let filename = rfc2616unquote(exp);
    filename = decodeURIComponent(filename.replace(/\+/g, '%20'));
    filename = rfc5987decode(filename);
    filename = rfc2047decode(filename);
    return fixupEncoding(filename);
  }

  const rfc = rfc2231GetParam(contentDisposition);
  if (rfc) {
    const filename = rfc2047decode(rfc);
    return fixupEncoding(filename);
  }

  exps = toParamRegExp('filename', 'i').exec(contentDisposition);
  if (exps) {
    const exp = exps[1];
    let filename = rfc2616unquote(exp);
    filename = rfc2047decode(filename);
    return fixupEncoding(filename);
  }
  return '';
}
