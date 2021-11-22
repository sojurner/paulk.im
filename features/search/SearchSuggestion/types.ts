import { FlexProps } from '@chakra-ui/layout';
import { ƒSearch } from '../types';

export namespace µSearchSuggestion {
  export interface Props extends FlexProps {
    suggestion: ƒSearch.Suggestion;
    category: ƒSearch.Enums.SuggestionCategory;
  }

  export interface Methods {}
}

export { ƒSearch };
