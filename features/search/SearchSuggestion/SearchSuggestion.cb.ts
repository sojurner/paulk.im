import { µUseSearchQuery } from '@/features/search';
import { IdeaIcon, MemeIcon } from '@/components/Icon';
import { FlexProps } from '@chakra-ui/layout';

export interface Props extends FlexProps {
  suggestion: µUseSearchQuery.Suggestion;
  category: µUseSearchQuery.SuggestionCategory;
}

export interface Methods {}

export const getSuggestionCategoryIcon = (
  category: µUseSearchQuery.SuggestionCategory
) => {
  switch (category) {
    case µUseSearchQuery.SuggestionCategory.MEME:
      return MemeIcon;
    case µUseSearchQuery.SuggestionCategory.POST:
      return IdeaIcon;
    default:
      throw new Error('Youre officially a noob');
  }
};
