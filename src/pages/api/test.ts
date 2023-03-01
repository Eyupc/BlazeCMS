import DatabaseManager from "database/DatabaseManager";
import { setServers } from "dns";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession, useSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  let ses = await getSession({ req });
  let data = await DatabaseManager.GetInstance().GetUser("Eyup");
  res.status(200).json(ses!);
}
