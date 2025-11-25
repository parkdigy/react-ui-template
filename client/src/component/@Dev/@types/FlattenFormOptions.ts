export type FlattenFormOptions<T> =
  T extends ReadonlyArray<infer U>
    ? U extends ReadonlyArray<any>
      ? FlattenFormOptions<U>
      : U extends string
        ? U
        : U extends { option: infer O; cols: any }
          ? O
          : never
    : T extends string
      ? T
      : never;
