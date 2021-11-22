import React from 'react';
import { µUtils } from './types';

export function createContextProvider<T>(
  options: µUtils.CreateContextOptions
): µUtils.CreateContextReturn<T> {
  const {
    errorMessage = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
    name,
  } = options;

  const Context = React.createContext<T | undefined>(undefined);

  Context.displayName = name;

  function useContext(): T | undefined {
    const context = React.useContext(Context);

    if (!context) {
      const error = new Error(errorMessage);
      error.name = 'ContextError';
      Error.captureStackTrace?.(error, useContext);
      throw error;
    }

    return context;
  }

  return [
    Context.Provider,
    useContext,
    Context,
  ] as µUtils.CreateContextReturn<T>;
}
