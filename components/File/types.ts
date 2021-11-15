import { FlexProps } from '@chakra-ui/react';

export namespace µFile {
  export interface Props extends FlexProps, Components.ContentProps {
    isActive?: boolean; // highlighted
    isCurrent?: boolean; // current route/path
  }
}

export namespace µFileList {
  export interface Props extends FlexProps {}
}
