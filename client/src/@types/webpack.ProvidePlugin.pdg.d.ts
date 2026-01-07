declare global {
  // types
  export type {
    ValueOf,
    Dict,
    Arr,
    IsObject,
    IsArray,
    ObjectMerge,
    ArrayMerge,
    MutableArray,
    FlattenArray,
    Prettify,
    Writable,
    Func,
    Lv,
    Vl,
    FirstLetter,
    UpperLetter,
    LowerLetter,
    NullableKeys,
    NotNullableKeys,
    NullableProperties,
    NotNullableProperties,
    PartialPick,
    PartialOmit,
    RequiredPick,
    RequiredOmit,
    Spread,
    InValue,
    IsEmpty,
    IsUnionInclude,
    IsStringLiteralUnion,
  } from '@pdg/types';
}

declare global {
  // compare
  const ifEmpty: typeof import('@pdg/compare').ifEmpty;
  const ifNotEmpty: typeof import('@pdg/compare').ifNotEmpty;
  const isEmpty: typeof import('@pdg/compare').isEmpty;
  const isNotEmpty: typeof import('@pdg/compare').isNotEmpty;
  const empty: typeof import('@pdg/compare').empty;
  const notEmpty: typeof import('@pdg/compare').notEmpty;
  const ifNotNull: typeof import('@pdg/compare').ifNotNull;
  const ifNull: typeof import('@pdg/compare').ifNull;
  const isNotNull: typeof import('@pdg/compare').isNotNull;
  const isNull: typeof import('@pdg/compare').isNull;
  const ifNotUndefined: typeof import('@pdg/compare').ifNotUndefined;
  const ifUndefined: typeof import('@pdg/compare').ifUndefined;
  const isNotUndefined: typeof import('@pdg/compare').isNotUndefined;
  const isUndefined: typeof import('@pdg/compare').isUndefined;
  const ifNotNullAndUndefined: typeof import('@pdg/compare').ifNotNullAndUndefined;
  const ifNullOrUndefined: typeof import('@pdg/compare').ifNullOrUndefined;
  const isNotNullAndUndefined: typeof import('@pdg/compare').isNotNullAndUndefined;
  const isNullOrUndefined: typeof import('@pdg/compare').isNullOrUndefined;
  const isContains: typeof import('@pdg/compare').isContains;
  const contains: typeof import('@pdg/compare').contains;
  const isEqual: typeof import('@pdg/compare').isEqual;
  const equal: typeof import('@pdg/compare').equal;
  const isBusinessNo: typeof import('@pdg/compare').isBusinessNo;
  const isEmail: typeof import('@pdg/compare').isEmail;
  const isInteger: typeof import('@pdg/compare').isInteger;
  const isMobileNo: typeof import('@pdg/compare').isMobileNo;
  const isNumericText: typeof import('@pdg/compare').isNumericText;
  const isPersonalNo: typeof import('@pdg/compare').isPersonalNo;
  const isTelNo: typeof import('@pdg/compare').isTelNo;
  const isUrl: typeof import('@pdg/compare').isUrl;

  // date
  const beginDateOfDay: typeof import('@pdg/date-time').beginDateOfDay;
  const beginDateOfMonth: typeof import('@pdg/date-time').beginDateOfMonth;
  const endDateOfDay: typeof import('@pdg/date-time').endDateOfDay;
  const endDateOfMonth: typeof import('@pdg/date-time').endDateOfMonth;
  const extractDate: typeof import('@pdg/date-time').extractDate;
  const now: typeof import('@pdg/date-time').now;
  const nowJs: typeof import('@pdg/date-time').nowJs;
  const nowTime: typeof import('@pdg/date-time').nowTime;
  const weekdayText: typeof import('@pdg/date-time').weekdayText;

  // data
  const lv: typeof import('@pdg/data').lv;
  const vl: typeof import('@pdg/data').vl;
  const copy: typeof import('@pdg/data').copy;

  // react-hook
  const useChanged: typeof import('@pdg/react-hook').useChanged;
  const useFirstSkipChanged: typeof import('@pdg/react-hook').useFirstSkipChanged;
  const useEventEffect: typeof import('@pdg/react-hook').useEventEffect;
  const useEventLayoutEffect: typeof import('@pdg/react-hook').useEventLayoutEffect;
  const useFirstSkipEffect: typeof import('@pdg/react-hook').useFirstSkipEffect;
  const useFirstSkipLayoutEffect: typeof import('@pdg/react-hook').useFirstSkipLayoutEffect;
  const useForwardRef: typeof import('@pdg/react-hook').useForwardRef;
  const useMountedRef: typeof import('@pdg/react-hook').useMountedRef;
  const useAutoUpdateRef: typeof import('@pdg/react-hook').useAutoUpdateRef;
  const useTimeoutRef: typeof import('@pdg/react-hook').useTimeoutRef;
  const clearTimeoutRef: typeof import('@pdg/react-hook').clearTimeoutRef;
  const useIntervalRef: typeof import('@pdg/react-hook').useIntervalRef;
  const clearIntervalRef: typeof import('@pdg/react-hook').clearIntervalRef;
}

export {};
