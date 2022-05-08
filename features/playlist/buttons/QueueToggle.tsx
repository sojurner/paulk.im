import { ButtonProps } from '@chakra-ui/react';

import { SmallText } from '@/components/Typography';
import { CaretDown, CaretUp } from '@/components/Icon';

import { ButtonBase } from '.';

export const QueueToggle: React.VFC<
  ButtonProps & { showQueue: boolean; queueCount: number }
> = ({ queueCount, showQueue, ...props }) => {
  return (
    <ButtonBase
      variant="unstyled"
      display="flex"
      fontSize="1.7em"
      {...props}
    >
      {showQueue ? <CaretDown /> : <CaretUp />}
      {!!queueCount && <SmallText fontSize=".6em">{queueCount}</SmallText>}
    </ButtonBase>
  );
};
