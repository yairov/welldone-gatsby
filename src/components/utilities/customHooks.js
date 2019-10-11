import React from 'react';

export const useBooleanState = (initialBooleanState, callbackHandler) => {
  const [booleanState, setBooleanState] = React.useState(initialBooleanState);

  const booleanToggleFn = React.useCallback(
    (...args) => {
      setBooleanState(b => !b);
      return callbackHandler(...args);
    },
    [callbackHandler]
  );

  const booleanOnFn = React.useCallback(
    (...args) => {
      setBooleanState(true);
      return callbackHandler(...args);
    },
    [callbackHandler]
  );

  const booleanOffFn = React.useCallback(
    (...args) => {
      setBooleanState(false);
      return callbackHandler(...args);
    },
    [callbackHandler]
  );

  return [booleanState, booleanToggleFn, booleanOnFn, booleanOffFn];
};
