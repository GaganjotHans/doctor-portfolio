// pages/api/hello.ts
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.json({ message: 'Hello world' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;