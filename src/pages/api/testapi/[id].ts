import DatabaseManager from 'database/DatabaseManager';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  const id: number = Number(req.query.id);

  const data = await (
    await DatabaseManager.GetInstance().UserQueries.GetUser(id)
  ).data;

  const motto = data?.motto;
  res.json({
    status: true,
    username: data?.username,
    motto: data?.motto,
    //rank: data?.rank,
    look: data?.look
  });
}
