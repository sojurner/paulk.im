import { Button, ButtonProps } from '@chakra-ui/react';

export const ButtonBase: React.FC<ButtonProps> = props => {
  return (
    <Button
    focus
      _focus={{
        outline: 'none',
      }}
      {...props}
    />
  );
};
