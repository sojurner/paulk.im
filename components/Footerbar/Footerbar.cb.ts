import { GithubIcon, GmailIcon, LinkedinIcon } from '@/components/Icon';
import { FlexProps } from '@chakra-ui/react';
import { Component } from 'react';

// ============================================================================
// Consts
// ============================================================================
export enum FeatureControl {
  NONE,
  SOUND_CLOUD,
  FAVORITES,
}

export enum LinkType {
  EXTERNAL,
  EMAIL,
}

export const CONTACT_LINKS: ContactLink[] = [
  {
    type: LinkType.EXTERNAL,
    name: 'github',
    Icon: GithubIcon,
    link: 'https://github.com/sojurner',
  },
  {
    type: LinkType.EXTERNAL,
    name: 'linkedin',
    Icon: LinkedinIcon,
    link: 'https://www.linkedin.com/in/paulkim-sojurner/',
  },
  {
    type: LinkType.EMAIL,
    name: 'gmail',
    Icon: GmailIcon,
    link: 'mailto:paul.kim0591@gmail.com',
  },
];

export const COPY_RIGHT = '© 2022 Paul Kim';
// ============================================================================
// Types
// ============================================================================
export interface State {
  activeControl: FeatureControl;
}

export interface Props extends FlexProps {}

export interface Methods {
  forwardOnSetActiveControl: (control: FeatureControl) => () => void;
  handleContactItemClick: (contact: ContactLink) => void;
}

export interface ContactLink {
  type: LinkType;
  name: string;
  Icon: any;
  link: string;
}
