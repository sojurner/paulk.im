import React from 'react';
import { SubTitle } from '@/components/Typography';

import styles from './styles.module.scss';

export const LandingName: React.FC = () => {
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
