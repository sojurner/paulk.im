import { FlexProps } from '@chakra-ui/react';

import { Enums } from '.';

export interface State {
  activeControl: Enums.FeatureControl;
}

export interface Props extends FlexProps {}

export interface Methods {
  forwardOnSetActiveControl: (control: Enums.FeatureControl) => () => void;
}

export { Enums };
