import type { NextApiRequest, NextApiResponse } from 'next';
import { request, memes_query, articles_query } from '@/lib/graphcms';

const getAllHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = `{
    ${memes_query}
    ${articles_query}
  }`;

  const { memes, articles } = await request({ query });

  if (!memes || !articles) {
    res.status(200).json({ success: false });
    return;
  }

  res.status(200).json({ success: true, memes, posts: articles });
};

export default getAllHandler;
