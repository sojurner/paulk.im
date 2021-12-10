import type { NextApiRequest, NextApiResponse } from 'next';
import { request } from '@/lib/graphcms';

const updateMemeHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { slug } = req.query;

  const query = `mutation {
    updateMeme(
      where: {slug: "${slug}"}
      data: {upvotes: ${req.body.upvotes}}
    ) {
      title
      upvotes
    }
    publishMeme(where: {slug: "${slug}"}) {
      id
    }
  }`;

  const response = await request({ query });

  res.status(200).json({ success: true, response });
};

export default updateMemeHandler;
