const _alert = {
  show(msg: string, callback?: () => void) {
    alert(msg);
    callback?.();
  },

  showSuccess(msg: string, callback?: () => void) {
    alert(msg);
    callback?.();
  },

  showError(msg: string, callback?: () => void) {
    alert(msg);
    callback?.();
  },
};

export default _alert;
