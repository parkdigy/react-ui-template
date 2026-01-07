const style = {
  assign<T extends keyof CSSProperties>(style: CSSProperties, key: T, ...values: Array<CSSProperties[T] | undefined>) {
    for (const value of values) {
      if (value !== undefined) {
        style[key] = value;
        return;
      }
    }
  },
};

export default style;
