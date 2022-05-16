import { Button, ButtonProps } from '@chakra-ui/react';

export const ButtonBase: React.FC<ButtonProps> = props => {
  return (
    <Button
      _focus={{
        outline: 'none',
      }}
      {...props}
    />
  );
};
