import { ButtonProps } from '@chakra-ui/react';
import { MediaFullscreen } from '@/components/Icon';
import { ButtonBase } from '.';

export const FullscreenToggle: React.FC<
  ButtonProps & { isFullscreen: boolean }
> = ({ isFullscreen, ...props }) => {
  return (
    <ButtonBase
      variant="ghost"
      fontSize="1.1em"
      p="1"
      {...(isFullscreen && {
        transform: 'rotate(90deg)',
      })}
      {...props}
    >
      <MediaFullscreen />
    </ButtonBase>
  );
};
