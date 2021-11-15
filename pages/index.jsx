import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { request } from '@/lib/graphcms';
import { Flex } from '@chakra-ui/layout';
import { PanelContent } from '@/components/PanelContent/PanelContent';

const Home = ({ data }) => {
  return (
    <div className={styles.container}>
      {/* <PanelContent /> */}
      <Flex></Flex>
    </div>
  );
};

export default Home;
