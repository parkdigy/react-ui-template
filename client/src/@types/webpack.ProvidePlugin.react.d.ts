import * as _React from 'react';

declare global {
  namespace React {
    export type {} from 'react';
  }

  const React: typeof _React;

  type Ref<T> = _React.Ref<T>;

  type RefObject<T> = _React.RefObject<T>;

  type ReactElement<
    P = unknown,
    T extends string | _React.JSXElementConstructor<any> = string | _React.JSXElementConstructor<any>,
  > = _React.ReactElement<P, T>;

  type ElementType<
    P = any,
    Tag extends keyof _React.JSX.IntrinsicElements = keyof _React.JSX.IntrinsicElements,
  > = _React.ElementType<P, Tag>;

  type ReactNode = _React.ReactNode;

  type ComponentType<P = {}> = _React.ComponentType<P>;

  type CSSProperties = _React.CSSProperties;
}

export {};
