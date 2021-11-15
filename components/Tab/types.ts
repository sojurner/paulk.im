import { ChakraComponent } from '@chakra-ui/react';

export namespace µTab {
  export interface Props {
    isActive?: boolean;
  }

  export interface Component extends ChakraComponent<'div', Props> {}
}
