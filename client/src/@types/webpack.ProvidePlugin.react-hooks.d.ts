declare global {
  // id
  const useId: typeof import('react').useId;

  // state
  const useState: typeof import('react').useState;
  const useReducer: typeof import('react').useReducer;

  // context
  const useContext: typeof import('react').useContext;

  // ref
  const useRef: typeof import('react').useRef;
  const useImperativeHandle: typeof import('react').useImperativeHandle;

  // effect
  const useEffect: typeof import('react').useEffect;
  const useEffectEvent: typeof import('react').useEffectEvent;
  const useLayoutEffect: typeof import('react').useLayoutEffect;
  const useInsertionEffect: typeof import('react').useInsertionEffect;

  // performance
  const useCallback: typeof import('react').useCallback;
  const useMemo: typeof import('react').useMemo;
  const useTransition: typeof import('react').useTransition;
  const useDeferredValue: typeof import('react').useDeferredValue;

  // form
  const useActionState: typeof import('react').useActionState;

  // debug
  const useDebugValue: typeof import('react').useDebugValue;

  // storage
  const useSyncExternalStore: typeof import('react').useSyncExternalStore;
}

export {};
