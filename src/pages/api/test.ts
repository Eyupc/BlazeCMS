import DatabaseManager from "database/DatabaseManager";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  let data = await DatabaseManager.GetInstance().GetUser("Eyup");
  res.status(200).json(data);
}
