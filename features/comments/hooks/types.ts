import { MutableRefObject } from 'react';

export interface Params {
  url: string;
  theme: string;
  issueTerm: string;
  repo: string;
  ref: MutableRefObject<null>;
}

export interface Return {
  status: Enums.ScriptStatus;
}

export namespace Enums {
  export enum ScriptStatus {
    IDLE,
    LOADING,
    READY,
    ERROR,
  }
}
