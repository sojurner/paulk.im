import { TagProps } from "@chakra-ui/tag";

export namespace çSoundCloudTag {
  export interface Props extends TagProps {
    isActive: boolean;
    onClick: () => void;
  }

  export interface Methods {}
}