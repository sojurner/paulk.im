import NextLink from 'next/link';
import { BoldText } from '@/components/Typography';
import { IconWrapper } from '@/components/Icon';

import { Types, Consts } from '.';

export const IconPageLink: React.FC<Types.Props> = ({ variant, href }) => {
  const Icon = Consts.ICON_MAPPING[variant];

  return (
    <NextLink href={href}>
      <div>
        <IconWrapper
          cursor="pointer"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          width="100px"
          fontSize="2.1em"
          _hover={{ textDecor: 'underline' }}
        >
          <Icon />
          <BoldText fontSize="md">{variant}</BoldText>
        </IconWrapper>
      </div>
    </NextLink>
  );
};
