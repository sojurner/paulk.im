import React from 'react';
import { Grid, GridItem, Flex, useColorModeValue } from '@chakra-ui/react';
import { MidText, RegularText } from '@/components/Typography';

import { µSearchSuggestion } from '.';

export const SearchSuggestion: React.FC<µSearchSuggestion.Props> = ({
  suggestion,
  category,
  ...props
}) => {
  const Icon = µSearchSuggestion.getSuggestionCategoryIcon(category);

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
        background: 'blackAlpha.200',
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
          fontStyle="italic"
          color={useColorModeValue('gray.500', 'gray.400')}
          fontSize={['12px', '14px']}
        >{`/${suggestion.type}/${suggestion.id}`}</MidText>
      </GridItem>
    </Grid>
  );
};
