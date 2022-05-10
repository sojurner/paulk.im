import type { NextApiRequest, NextApiResponse } from 'next';
import { request, POSTS_QUERY } from '@/lib/graphcms';

const getPostPageHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { page } = req.query;

  const query = `{
    ${POSTS_QUERY({ first: 25, skip: (Number(page) - 1) * 25 })}
  }`;

  const response = await request({ query });

  res.status(200).json({ success: true, response });
};

export default getPostPageHandler;
