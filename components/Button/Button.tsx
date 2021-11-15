import React from 'react';

import { µButton } from './types';
import styles from './styles.scss';

export const Button: React.FC<µButton.Props> = ({
  className,
  variant = 'default',
  ...props
}) => {
  const classes = `${µButton.Variants[variant]} ${className || ''} ${
    styles.btnBase
  }`;
  return <button className={classes} {...props} />;
};

Button.defaultProps = {
  variant: 'default',
};
