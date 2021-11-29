import React from 'react';
import { Grid, GridItem, Flex } from '@chakra-ui/layout';
import { MidText, RegularText } from '@/components/Typography';
import { BlogIcon, MemeIcon } from '@/components/Icon';

import { µSearchSuggestion } from '.';
import { µSearch } from '..';

export const getSuggestionCategoryIcon = (
  category: µSearch.Enums.SuggestionCategory
) => {
  switch (category) {
    case µSearch.Enums.SuggestionCategory.MEME:
      return MemeIcon;
    case µSearch.Enums.SuggestionCategory.POST:
      return BlogIcon;
    default:
      throw new Error('Youre officially a noob');
  }
};

export const SearchSuggestion: React.FC<µSearchSuggestion.Props> = ({
  suggestion,
  category,
  ...props
}) => {
  const Icon = getSuggestionCategoryIcon(category);

  return (
    <Grid
      gridTemplateAreas={`
        "icon title" 
        "icon date"
      `}
      justifyItems="center"
      alignItems="center"
      gridTemplateColumns="60px calc(100% - 60px)"
      gridTemplateRows="auto auto"
      pos="relative"
      overflow="hidden"
      pr="2"
      py="2"
      cursor="pointer"
      _hover={{
        background: 'gray.50',
      }}
      {...props}
    >
      <GridItem gridArea="icon">
        <Flex justifyContent="center" fontSize="2em">
          <Icon isActive />
        </Flex>
      </GridItem>
      <GridItem width="100%" justifySelf="start" gridArea="title">
        <RegularText
          textOverflow="ellipsis"
          fontSize="18px"
          whiteSpace="nowrap"
          overflow="hidden"
          width="100%"
        >
          {suggestion.doc.title}
        </RegularText>
      </GridItem>
      <GridItem justifySelf="start" gridArea="date">
        <MidText>{suggestion.doc.date}</MidText>
      </GridItem>
    </Grid>
  );
};
