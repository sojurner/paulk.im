import { FlexProps } from '@chakra-ui/layout';

export interface Props extends FlexProps {
  meme: Models.Meme;
}

export interface Methods {
  handleFavorite: () => void;
  handleUpvote: (slug: string) => () => Promise<void>;
}
