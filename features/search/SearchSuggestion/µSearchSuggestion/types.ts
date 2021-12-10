import { FlexProps } from '@chakra-ui/layout';
import { µUseSearchQuery } from '@/features/search';

export interface Props extends FlexProps {
  suggestion: µUseSearchQuery.Types.Suggestion;
  category: µUseSearchQuery.Enums.SuggestionCategory;
}

export interface Methods {}
