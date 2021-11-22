import { FlexProps } from '@chakra-ui/react';

export namespace µFooterbar {
  export interface State {
    activeControl: Enums.FeatureControl;
  }

  export interface Props extends FlexProps {}

  export interface Methods {
    forwardOnSetActiveControl: (control: Enums.FeatureControl) => () => void;
  }

  export namespace Enums {
    export enum FeatureControl {
      NONE,
      SOUND_CLOUD,
      FAVORITES,
    }
  }
}
