import React from 'react';
import { Flex, FlexProps } from '@chakra-ui/layout';

export namespace LandingCurvedText {
  export interface Props extends FlexProps {}

  export interface Methods {}

  export const Component: React.FC<Props> = props => (
    <Flex
      {...props}
      sx={{
        'svg': {
          fontSize: '1.5em',
          overflow: 'inherit',
          position: 'absolute',
          transform: 'rotate(86deg)',
          top: '-25px',
          right: '-60px',
        },
      }}
    >
      <svg
        className="page-home__landing-header__curved-svg"
        viewBox="0 0 500 500"
      >
        <path
          id="curve"
          fill="none"
          d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
        />
        <text width="500">
          <textPath fontWeight="bold" fontFamily="var(--chakra-fonts-heading)" xlinkHref="#curve">
            Software Developer
          </textPath>
        </text>
      </svg>
    </Flex>
  );
}
