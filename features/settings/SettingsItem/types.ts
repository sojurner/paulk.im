import { GridProps } from '@chakra-ui/layout';
import { ChangeEventHandler, ReactNode } from 'react';

export interface Props extends Omit<GridProps, 'onChange'> {
  isEnabled: boolean;
  onChange: ChangeEventHandler;
  Icon: ReactNode;
  content: string[];
}

export interface Methods {}
