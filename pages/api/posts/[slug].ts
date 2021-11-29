import type { NextApiRequest, NextApiResponse } from 'next';
import { request } from '@/lib/graphcms';

const updatePostHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { slug } = req.query;

  console.log(req.body);

  const query = `mutation {
    updateArticle(
      where: {slug: "${slug}"}
      data: ${JSON.stringify(req.body)}
    ) {
      title
    }
    publishArticle(where: {slug: "${slug}"}) {
      id
    }
  }`;

  await request({ query });

  res.status(200).json({ success: true });
};

export default updatePostHandler;
