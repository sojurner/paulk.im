import { Grid, GridItem } from '@chakra-ui/layout';
import React from 'react';

import { useSettingsContext, µSettingsProvider } from '@/features/settings';
import { Panel } from '@/components/Panel';
import { SoundCloudIcon } from '@/components/Icon';
import { µPanelSettings } from '.';
import { RegularText } from '@/components/Typography';
import { Switch } from '@chakra-ui/switch';

export const PanelSettings: React.FC<µPanelSettings.Props> = props => {
  const featureContext = useSettingsContext();

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
        <GridItem gridArea="icon" height="50px" width="50px">
          <SoundCloudIcon
            fontSize="3em"
            isActive={featureContext.state.soundCloud.enabled}
          />
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
            colorScheme="cyan"
            onChange={({ currentTarget }) =>
              featureContext.methods.onSettingsUpdate(
                µSettingsProvider.Enums.SettingsStorageKey.SOUND_CLOUD,
                {
                  ...featureContext.state.soundCloud,
                  enabled: currentTarget.checked,
                }
              )
            }
          />
        </GridItem>
      </Grid>
    </Panel>
  );
};
