import React from 'react';

import { createContextProvider } from '@/lib/core';
import { useData } from '@/features/data';

import { µDataProvider } from '.';

export const [DataContextProvider, useDataContext] =
  createContextProvider<µDataProvider.Value>({
    name: 'DataContext',
    errorMessage: 'context must be wrapped in Data Provider',
  });

export const DataProvider: React.FC = props => {
  const data = useData();

  return <DataContextProvider value={{ data }} {...props} />;
};
