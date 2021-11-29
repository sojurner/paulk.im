import React from 'react';
import { Flex, Grid, GridItem, Switch } from '@chakra-ui/react';
import { MidText, RegularText, SubHeading } from '@/components/Typography';

import { µSettingsItem } from './types';

export const SettingsItem: React.FC<µSettingsItem.Props> = ({
  isEnabled,
  onChange,
  content,
  Icon,
  ...props
}) => {
  const [label, description] = content;
  return (
    <Grid
      gridTemplateAreas={`
        "icon title switch"
        "icon desc switch"
      `}
      gridTemplateRows={'auto auto'}
      gridTemplateColumns={'60px 320px 70px'}
      {...props}
    >
      <GridItem justifySelf="center" alignSelf="center" gridArea="icon">
        {Icon}
      </GridItem>
      <GridItem gridArea="title">
        <RegularText>{label}</RegularText>
      </GridItem>
      <GridItem gridArea="desc">
        <MidText color="gray.400">{description}</MidText>
      </GridItem>
      <GridItem alignSelf="center" gridArea="switch">
        <RegularText>
          <Switch
            size="lg"
            isChecked={isEnabled}
            colorScheme="cyan"
            onChange={onChange}
          />
        </RegularText>
      </GridItem>
    </Grid>
  );
};
