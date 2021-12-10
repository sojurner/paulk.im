import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import React from 'react';
import {
  request,
  latest_articles_query,
  latest_memes_query,
} from '@/lib/graphcms';

import { HomeRoot } from '@/features/home';

dayjs.extend(relativeTime);

const HomePage = ({ latestItems }) => {
  return <HomeRoot gridArea="body" latestItems={latestItems} />;
};

export async function getStaticProps() {
  const response = await request({
    query: `{
      ${latest_articles_query}
      ${latest_memes_query}
    }`,
  });

  const posts = response.articles.map(ART => ({
    type: 'POST',
    data: ART,
  }));

  const memes = response.memes.map(MEME => ({
    type: 'MEME',
    data: {
      ...MEME,
      date: {
        label: dayjs(MEME.date).format('MMM D, YYYY'),
        timeFromNow: dayjs(MEME.date).fromNow(),
      },
    },
  }));

  const latestItems = [
    posts[0],
    memes[0],
    posts[1],
    //---
    memes[1],
    posts[2],
    memes[2],
    //---
    memes[3],
    posts[3],
    posts[4],
  ];

  return { props: { latestItems } };
}

export default HomePage;
