import bcrypt from 'bcrypt';
import cnf from 'cms-config.json';
import DatabaseManager from 'database/DatabaseManager';
import type { NextApiRequest, NextApiResponse } from 'next';
import { SSOGenerator } from 'utils/SSOGenerator';
type RegisterBody = {
  username: string;
  password: string;
  rePassword: string;
  mail: string;
  look: string;
  gender: string;
};
type RegisterResponse = {
  status: boolean;
  errors?: string[] | null;
};

//@response
// status : OK | ERROR
// if ERROR -> return errors
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponse>
) {
  const regexUsername = new RegExp('(^[a-zA-Z0-9-=?!@:.]{1,16}$)');
  const body: RegisterBody = req.body;
  const errors: string[] = [];

  if (req.method != 'POST') return res.status(404).json({ status: false });

  if (
    await DatabaseManager.GetInstance().UserQueries.UsernameExist(body.username)
  ) {
    errors.push(cnf.texts.REGISTER_ERROR_USERNAME);
  }
  if (!regexUsername.test(body.username)) {
    errors.push(cnf.texts.REGISTER_ERROR_USERNAME_NVALID);
  }
  if (await DatabaseManager.GetInstance().UserQueries.MailExist(body.mail)) {
    errors.push(cnf.texts.REGISTER_ERROR_EMAIL_EXIST);
  }

  if (body.password.length < 6) {
    errors.push(cnf.texts.REGISTER_ERROR_PASSWORD_LENGTH);
  }
  if (body.password != body.rePassword) {
    errors.push(cnf.texts.REGISTER_ERROR_PASSWORD_MATCH);
  }

  if (errors.length > 0) {
    return res.status(200).json({
      status: false,
      errors: errors
    });
  }
  const insert = await DatabaseManager.GetInstance().UserQueries.CreateUser({
    username: body.username,
    password: await bcrypt.hash(body.password, 10),
    mail: body.mail,
    look: process.env.REGISTER_LOOK,
    motto: process.env.REGISTER_MOTTO,
    auth_ticket: SSOGenerator.Generate(),
    gender: body.gender == 'M' ? 'M' : 'F',
    rank: process.env.REGISTER_RANK,
    ip_register:
      ((process.env.CLOUDFLARE_ENABLED as Boolean) == true
        ? req.headers['cf-connecting-ip']!.toString()
        : req.socket.remoteAddress!.toString()) || '',
    ip_current:
      ((process.env.CLOUDFLARE_ENABLED as Boolean) == true
        ? req.headers['cf-connecting-ip']!.toString()
        : req.socket.remoteAddress!.toString()) || '',
    last_login: Math.round(+new Date() / 1000),
    account_created: Math.round(+new Date() / 1000),
    credits:
      process.env.REGISTER_CREDITS < 0 ? 0 : process.env.REGISTER_CREDITS,
    diamonds:
      process.env.REGISTER_DIAMONDS < 0 ? 0 : process.env.REGISTER_DIAMONDS,
    duckets: process.env.REGISTER_DUCKETS < 0 ? 0 : process.env.REGISTER_DUCKETS
  });
  if (insert) return res.status(200).json({ status: true });
  else return res.status(200).json({ status: false });
}
