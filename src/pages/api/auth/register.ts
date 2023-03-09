import DatabaseManager from "database/DatabaseManager";
import { RegisterType } from "database/types/RegisterTypes";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
type RegisterBody = {
  username: string;
  password: string;
  mail: string;
  look: string;
  gender: string;
};
type RegisterResponse = {
  status: "OK" | "ERROR";
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponse>
) {
  if (req.method != "POST") return res.status(404).json({ status: "ERROR" });

  const body: RegisterBody = req.body;
  await DatabaseManager.GetInstance().CreateUser({
    username: body.username,
    password: body.password,
    mail: body.mail,
    look: process.env.REGISTER_LOOK,
    motto: process.env.REGISTER_MOTTO,
    auth_ticket: "errororr",
    gender: body.gender,
    rank: process.env.REGISTER_RANK,
    ip_register: req.socket.remoteAddress?.toString() || "",
    ip_current: req.socket.remoteAddress?.toString() || "",
    last_login: Date.now(),
    account_created: Date.now(),
    credits: process.env.REGISTER_CREDITS,
    diamonds: process.env.REGISTER_DIAMONDS,
    duckets: process.env.REGISTER_DIAMONDS,
  });
}
