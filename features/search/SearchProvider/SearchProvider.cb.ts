import { µUseFlexSearch, µUseSearchToggle } from '@/features/search';

export interface Props {}

export interface Value {
  flexSearch: µUseFlexSearch.Return;
  searchToggle: µUseSearchToggle.Return;
}