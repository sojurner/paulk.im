import React, { ReactElement } from 'react';

import { Heading, HeadingProps, TextProps, Text } from '@chakra-ui/react';

// "7xl" = 48px
export const LargeHeading = (props: HeadingProps): ReactElement => {
  return <Heading fontSize="7xl" {...props} />;
};

// 32px
export const Title = (props: HeadingProps): ReactElement => {
  return <Heading fontSize="5xl" {...props} />;
};

// default "3xl" = 24px
export const SubHeading = (props: HeadingProps): ReactElement => {
  return <Heading fontWeight="bold" {...props} />;
};

// 22px
export const SubTitle = (props: HeadingProps): ReactElement => (
  <Heading fontSize="2xl" {...props} />
);

// default "md", 16px
export const RegularText = (props: TextProps): ReactElement => (
  <Text fontSize="md" {...props} />
);

export const BoldText = (props: TextProps): ReactElement => (
  <Text fontWeight="bold" {...props} />
);

// "md" - 16px
export const GrayText = (props: TextProps): ReactElement => (
  <Text fontSize="md" color="darkGray" {...props} />
);

// "sm" - 14px
export const MidText = (props: TextProps): ReactElement => (
  <Text fontSize="sm" lineHeight="20px" {...props} />
);

// "xs" - 12px
export const SmallText = (props: TextProps): ReactElement => (
  <Text fontSize="xs" lineHeight="14px" {...props} />
);