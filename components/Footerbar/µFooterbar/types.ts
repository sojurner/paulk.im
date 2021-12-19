import { FlexProps } from '@chakra-ui/react';
import { Component } from 'react';

import { Enums } from '.';

export interface State {
  activeControl: Enums.FeatureControl;
}

export interface Props extends FlexProps {}

export interface Methods {
  forwardOnSetActiveControl: (control: Enums.FeatureControl) => () => void;
  handleContactItemClick: (contact: ContactLink) => void;
}

export interface ContactLink {
  type: Enums.LinkType;
  name: string;
  Icon: any;
  link: string;
}

export { Enums };
