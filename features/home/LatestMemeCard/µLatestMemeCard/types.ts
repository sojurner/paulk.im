import { FlexProps } from "@chakra-ui/layout";

export interface Props extends FlexProps {
  width: FlexProps['width'];
  meme: Models.Meme;
}
