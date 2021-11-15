import { StackProps } from '@chakra-ui/react';

export namespace µDirectory {
  export interface Props extends Components.ContentProps, StackProps {
    isActive?: boolean;
    initialExpanded?: boolean;
  }

  export interface Methods {}
}
