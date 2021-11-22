import { FlexProps } from '@chakra-ui/react';
import { ƒSearch } from '../types';

export namespace µPanelSearch {
  export interface State {
    postSuggestions: ƒSearch.Suggestion[];
    memeSuggestions: ƒSearch.Suggestion[];
  }
  export interface Props extends FlexProps {}

  export interface Methods {
    onQueryChange: (query: string) => void;
  }
}

export { ƒSearch };
