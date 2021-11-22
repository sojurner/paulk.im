import React from 'react';
import { Flex } from '@chakra-ui/layout';
import { SubTitle } from '@/components/Typography';

import styles from './styles.module.scss';

export namespace LandingName {
  export interface Props {}

  export interface Methods {}

  export const Component: React.FC = () => {
    return (
      <>
        <SubTitle
          fontSize="60px"
          alignSelf="flex-start"
          color="purple.300"
          className={styles.firstname}
        >
          PAUL
        </SubTitle>
        <SubTitle fontSize="55px" color="blue.300" className={styles.lastname}>
          KIM
        </SubTitle>
      </>
    );
  };
}
