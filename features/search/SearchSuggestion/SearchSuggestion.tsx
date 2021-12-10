import React from 'react';
import { Grid, GridItem, Flex } from '@chakra-ui/layout';
import { MidText, RegularText, SmallText } from '@/components/Typography';

import { µSearchSuggestion } from '.';

export const SearchSuggestion: React.FC<µSearchSuggestion.Types.Props> = ({
  suggestion,
  category,
  ...props
}) => {
  const Icon = µSearchSuggestion.Utils.getSuggestionCategoryIcon(category);

  return (
    <Grid
      gridTemplateAreas={`
        "icon title" 
        "icon path"
      `}
      justifyItems="center"
      alignItems="center"
      gridTemplateColumns="60px calc(100% - 60px)"
      gridTemplateRows="auto auto"
      pos="relative"
      overflow="hidden"
      width="100%"
      pr="2"
      py="2"
      cursor="pointer"
      _hover={{
        background: 'gray.100',
      }}
      {...props}
    >
      <GridItem gridArea="icon">
        <Flex justifyContent="center" fontSize={['1.4em', '2em']}>
          <Icon />
        </Flex>
      </GridItem>
      <GridItem justifySelf="start" gridArea="title">
        <RegularText
          width="max-content"
          textOverflow="ellipsis"
          fontSize={['15px', '18px']}
          whiteSpace="nowrap"
          overflow="hidden"
        >
          {suggestion.doc.title}
        </RegularText>
      </GridItem>
      <GridItem justifySelf="start" gridArea="path">
        <MidText
          color="blackAlpha.600"
          fontSize={['12px', '14px']}
        >{`/${suggestion.type}/${suggestion.id}`}</MidText>
      </GridItem>
    </Grid>
  );
};
