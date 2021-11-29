import { FlexProps } from '@chakra-ui/layout';

export interface Props extends FlexProps {
  memes: Models.Meme[];
}

export interface Methods {
  handleFavorite: (meme: Models.Meme) => () => void;
}
