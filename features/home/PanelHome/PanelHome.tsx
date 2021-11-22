import { Flex, Grid, GridItem, Box } from '@chakra-ui/layout';
import React from 'react';

import { Panel } from '@/components/Panel';
import { µPanelHome } from './types';

export const PanelHome: React.FC<µPanelHome.Props> = props => {
  return (
    <Panel {...props}>
      <Grid
        gridTemplateAreas={`
        "icon title"
        "icon actions"
      `}
        gridTemplateColumns={'50px 1fr'}
        gridTemplateRows={'25px 25px'}
        pl="15px"
        py="15px"
      >
        {/* <GridItem gridArea="icon" height="50px" width="50px">
          <SoundCloudIcon />
        </GridItem>
        <GridItem
          gridArea="title"
          pl="10px"
          alignItems="center"
          alignContent="center"
        >
          <RegularText>Sound Cloud</RegularText>
        </GridItem>
        <GridItem
          display="flex"
          gridArea="actions"
          pl="10px"
          alignItems="center"
          alignContent="center"
        >
          <Switch
            isChecked={featureContext.state.soundCloud.enabled}
            size="md"
            colorScheme="teal"
            onChange={({ currentTarget }) =>
              featureContext.methods.onSettingsUpdate(
                µSettingsProvider.Enums.SettingsStorageKey.SC,
                {
                  ...featureContext.state.soundCloud,
                  enabled: currentTarget.checked,
                }
              )
            }
          />
        </GridItem> */}
      </Grid>
    </Panel>
  );
};
