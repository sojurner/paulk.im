import { FlexProps } from '@chakra-ui/layout';

export interface Props extends FlexProps {
  width: FlexProps['width'];
  post: Models.Post;
}

export interface Methods {}
