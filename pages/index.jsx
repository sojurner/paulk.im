import dayjs from 'dayjs';
import Script from 'next/script';

import objectSupport from 'dayjs/plugin/objectSupport';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import isBetween from 'dayjs/plugin/isBetween';

import React from 'react';
import { request, CONTENT_OF_WEEK_QUERY } from '@/lib/graphcms';

import { HomeRoot } from '@/features/home';

dayjs.extend(objectSupport);
dayjs.extend(weekOfYear);
dayjs.extend(isBetween);

const HomePage = ({ results }) => {
  return (
    <>
      <HomeRoot gridArea="body" results={results} />
    </>
  );
};

export async function getStaticProps() {
  const response = await request({
    query: `{
      ${CONTENT_OF_WEEK_QUERY}
    }`,
  });

  const results = response.contentOfTheWeeks.map(COW => {
    const end = dayjs({ year: COW?.year }).week(COW?.weekNumber);
    const start = end.startOf('week');
    return {
      ...COW,
      weekRange: `${start.format('MMM D')} - ${end.format('MMM D')}`,
    };
  });

  return { props: { results } };
}

export default HomePage;
