import { FlexProps } from '@chakra-ui/layout';
import { µSearch } from '@/features/search';

export interface Props extends FlexProps {
  suggestion: µSearch.Suggestion;
  category: µSearch.Enums.SuggestionCategory;
}

export interface Methods {}
