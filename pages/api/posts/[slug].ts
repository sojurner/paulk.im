import type { NextApiRequest, NextApiResponse } from 'next';
import { request } from '@/lib/graphcms';

const updatePostHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;

  const query = `mutation {
    updateArticle(
      where: {slug: "${slug}"}
      data: ${JSON.stringify(req.body)}
    ) {
      title
      upvotes
    }
    publishArticle(where: {slug: "${slug}"}) {
      id
    }
  }`;

  const response = await request({ query });

  res.status(200).json({ success: true, response });
};

export default updatePostHandler;
