import React from 'react';
import { ButtonGroup, ButtonGroupProps } from '@chakra-ui/react';

const inactiveStyles = {
  filter: 'grayscale(1)',
};

const activeStyles = {
  borderBottom: '2px',
  marginBottom: '-2px',
};

export const SelectButtonGroup: React.FC<{
  onChange: (value: string) => void;
  value: string;
  groupProps?: ButtonGroupProps;
}> = ({ onChange, value, children, groupProps }) => {
  if (!children) throw new Error('Children required');
  // iterate over array of child nodes to apply extended props
  return (
    <ButtonGroup {...groupProps}>
      {React.Children.map(children as React.ReactElement[], CHILD => {
        return React.cloneElement(CHILD, {
          onClick: () => {
            if (value === CHILD?.props?.value) return;
            onChange(CHILD?.props?.value);
          },
          ...(value !== CHILD?.props?.value && { sx: inactiveStyles }),
          ...(value === CHILD?.props?.value && { sx: activeStyles }),
        });
      })}
    </ButtonGroup>
  );
};

