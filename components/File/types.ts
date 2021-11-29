import { FlexProps } from '@chakra-ui/react';

export interface Props extends FlexProps, Components.ContentProps {
  isActive?: boolean; // highlighted
  isCurrent?: boolean; // current route/path
}

export type { FlexProps };
