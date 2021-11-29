import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { request, articles_query, memes_query } from '@/lib/graphcms';

import { Appbar } from '@/components/Appbar';
import { HomeRoot, PanelHome } from '@/features/home';

const HomePage = ({ memes, posts }) => {
  return (
    <>
      <Appbar gridArea="panel / panel / appbar / appbar" />
      <HomeRoot gridArea="body / panel / body / body" />
    </>
  );
};

export async function getStaticProps() {
  const { articles, memes } = await request({
    query: `{
      ${articles_query}
      ${memes_query}
    }`,
  });

  return { props: { posts: articles, memes } };
}

export default HomePage;
