import { FlexProps } from '@chakra-ui/react';

import * as Enums from './enums';

export interface State {
  activeControl: Enums.FeatureControl;
}

export interface Props extends FlexProps {}

export interface Methods {
  forwardOnSetActiveControl: (control: Enums.FeatureControl) => () => void;
}

export { Enums };
