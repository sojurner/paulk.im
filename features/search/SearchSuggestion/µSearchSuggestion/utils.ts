import { µUseSearchQuery } from '@/features/search';
import { IdeaIcon, MemeIcon } from '@/components/Icon';

export const getSuggestionCategoryIcon = (
  category: µUseSearchQuery.Enums.SuggestionCategory
) => {
  switch (category) {
    case µUseSearchQuery.Enums.SuggestionCategory.MEME:
      return MemeIcon;
    case µUseSearchQuery.Enums.SuggestionCategory.POST:
      return IdeaIcon;
    default:
      throw new Error('Youre officially a noob');
  }
};
