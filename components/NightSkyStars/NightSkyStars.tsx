import { Flex } from '@chakra-ui/react';
import React from 'react';
import styles from './styles.module.scss';

export const NightSkyStars = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.group1}></div>
      <div className={styles.group2}></div>
      <div className={styles.group3}></div>
      <div className={styles.group4}></div>
      <div className={styles.group5}></div>
      <div className={styles.group6}></div>
    </div>
  );
};
