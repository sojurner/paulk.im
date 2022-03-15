import { TagProps } from '@chakra-ui/tag';

export interface Props extends TagProps {
  isActive: boolean;
  onClick: () => void;
}

export interface Methods {}
