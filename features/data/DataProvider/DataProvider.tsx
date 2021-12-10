import React from 'react';

import { createContextProvider } from '@/lib/createContextProvider';
import { useData } from '@/features/data';

import { µDataProvider } from '.';

export const [DataContextProvider, useDataContext] =
  createContextProvider<µDataProvider.Types.Value>({
    name: 'DataContext',
    errorMessage: 'context must be wrapped in Data Provider',
  });

export const DataProvider: React.FC = props => {
  const data = useData();

  return <DataContextProvider value={{ data }} {...props} />;
};
