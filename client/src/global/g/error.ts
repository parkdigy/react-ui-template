import { Const } from '@const';
import alert from './alert';

const error = {
  /********************************************************************************************************************
   * API
   * ******************************************************************************************************************/
  api: {
    /** getErrorResult */
    getErrorResult(err: any): ApiResult['result'] | undefined {
      return err.response?.data?.result;
    },

    /** getErrorResultCode */
    getErrorResultCode(err: any): ApiResult['result']['c'] | undefined {
      return err.response?.data?.result?.c;
    },

    /** getErrorResultMessage */
    getErrorResultMessage(err: any): ApiResult['result']['m'] | undefined {
      const result = this.getErrorResult(err);
      if (result) {
        return result.m;
      } else {
        return err.message;
      }
    },

    /** getErrorResultError */
    getErrorResultError(err: any): ApiResult['result']['e'] | undefined {
      return err.response?.data?.result?.e;
    },

    /** isApiError */
    isApiError(err: any) {
      const code = this.getErrorResultCode(err);
      return code !== undefined && contains(Const.Error.allValues, code);
    },

    /** showErrorAlert */
    showErrorAlert(err: any, otherErrorMsgTitle?: string, onConfirm?: (code?: number) => void) {
      const code = this.getErrorResultCode(err);
      const msg = this.getErrorResultMessage(err);
      if (notEmpty(msg) && code !== undefined && contains(Const.Error.allValues, code)) {
        alert.showError(msg, () => onConfirm?.(code));
      } else {
        const content = otherErrorMsgTitle
          ? `${otherErrorMsgTitle} 중 문제가 발생했습니다.\n잠시 후 재시도 해주세요.`
          : '문제가 발생했습니다.\n잠시 후 재시도 해주세요.';
        alert.showError(code ? `(${code})\n${content}` : content, () => onConfirm?.(code));
      }
    },
  },
};

export default error;
