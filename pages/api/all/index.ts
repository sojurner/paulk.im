import type { NextApiRequest, NextApiResponse } from 'next';
import * as graph from '@/lib/graphcms';

const getAllHandler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const query = `{
    ${graph.TIL_QUERY}
    ${graph.TAG_ENUM_QUERY}
  }`;

  const response = await graph.request({ query });

  if (!response || !response?.__type?.enumValues) {
    res.status(200).json({ success: false });
    return;
  }

  res.status(200).json({
    success: true,
    tags: response.__type.enumValues.map((TAG: { name: string }) => TAG.name),
  });
};

export default getAllHandler;
