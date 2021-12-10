import { µUseCollapsible } from '@/features/responsive';

export interface State {
  isLargerThan1600: boolean;
  isLargerThan1280: boolean;
  isLargerThan500: boolean;
}

export interface Methods {}

export interface Return {
  state: State;
  methods: Methods;
}

export interface Args extends µUseCollapsible.Types.State {}
