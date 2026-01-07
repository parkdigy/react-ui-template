interface Props extends Omit<TProps, 'fw' | 'fontWeight'> {}

export const TBold = (props: Props) => <T fw={700} {...props} />;
export const T100 = (props: Props) => <T fw={100} {...props} />;
export const T200 = (props: Props) => <T fw={200} {...props} />;
export const T300 = (props: Props) => <T fw={300} {...props} />;
export const T400 = (props: Props) => <T fw={400} {...props} />;
export const T500 = (props: Props) => <T fw={500} {...props} />;
export const T600 = (props: Props) => <T fw={600} {...props} />;
export const T700 = (props: Props) => <T fw={700} {...props} />;
export const T800 = (props: Props) => <T fw={800} {...props} />;
export const T900 = (props: Props) => <T fw={900} {...props} />;
