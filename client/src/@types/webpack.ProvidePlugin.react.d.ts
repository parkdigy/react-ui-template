import React from 'react';

declare global {
  const React: typeof React;

  type Ref<T> = React.Ref<T>;

  type RefObject<T> = React.RefObject<T>;

  type ReactElement<
    P = unknown,
    T extends string | React.JSXElementConstructor<any> = string | React.JSXElementConstructor<any>,
  > = React.ReactElement<P, T>;

  type ElementType<
    P = any,
    Tag extends keyof React.JSX.IntrinsicElements = keyof React.JSX.IntrinsicElements,
  > = React.ElementType<P, Tag>;

  type ReactNode = React.ReactNode;

  type ComponentType<P = {}> = React.ComponentType<P>;

  type CSSProperties = React.CSSProperties;
}

export {};
