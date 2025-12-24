import _copyToClipboard from 'copy-to-clipboard';

const clipboard = {
  copy(text: string, toastMessage?: string) {
    _copyToClipboard(text);
    if (toastMessage) {
      toast.default(toastMessage);
    }
  },
};

export default clipboard;
