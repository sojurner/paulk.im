import React from 'react';
import { µCreateContextProvider } from '.';

export function createContextProvider<T>(
  options: µCreateContextProvider.Options
): µCreateContextProvider.Return<T> {
  const {
    errorMessage = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
    name,
  } = options;

  const Context = React.createContext<T | undefined>(undefined);

  Context.displayName = name;

  const useContext = (): T | undefined => {
    const context = React.useContext(Context);

    if (!context) {
      const error = new Error(errorMessage);
      error.name = 'ContextError';
      Error.captureStackTrace?.(error, useContext);
      throw error;
    }

    return context;
  };

  return [
    Context.Provider,
    useContext,
    Context,
  ] as µCreateContextProvider.Return<T>;
}
