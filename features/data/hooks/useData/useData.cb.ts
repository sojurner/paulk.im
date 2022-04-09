import { useData } from '.';
export interface State {
  initialized: boolean;
  tils: string[];
}

export interface Methods {
  fetchData: () => Promise<void>;
}

export type Return = ReturnType<typeof useData>;
