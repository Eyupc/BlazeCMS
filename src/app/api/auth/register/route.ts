import bcrypt from 'bcrypt';
import cnf from '../../../../../cms-config.json';
import DatabaseManager from '../../../../../database/DatabaseManager';
import { VerifyCaptcha } from '../../../../../lib/captcha';
import { SSOGenerator } from '../../../../../utils/SSOGenerator';
import { StringToBool } from '../../../../../utils/StringToBool';
import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
type RegisterBody = {
  username: string;
  password: string;
  rePassword: string;
  mail: string;
  look: string;
  gender: string;
  captcha: string;
};
type RegisterResponse = {
  status: boolean;
  errors?: string[] | null;
};

// @response
// status : OK | ERROR
// if ERROR -> return errors
export async function POST(
  req: NextRequest
): Promise<NextResponse<RegisterResponse>> {
  const regexUsername = new RegExp('(^[a-zA-Z0-9-=?!@:.]{1,16}$)');
  const { username, password, mail, rePassword, gender, captcha } =
    (await req.json()) as RegisterBody;
  const errors: string[] = [];

  try {
    const captchaResult = await VerifyCaptcha(captcha);

    if (!captchaResult)
      return NextResponse.json(
        { status: false, error: 'Google recaptcha error' },
        { status: 400 }
      );

    if (await DatabaseManager.GetInstance().UserQueries.UsernameExist(username))
      errors.push(cnf.texts.REGISTER_ERROR_USERNAME);

    if (!regexUsername.test(username))
      errors.push(cnf.texts.REGISTER_ERROR_USERNAME_NVALID);

    if (await DatabaseManager.GetInstance().UserQueries.MailExist(mail))
      errors.push(cnf.texts.REGISTER_ERROR_EMAIL_EXIST);

    if (password.length < 6) {
      errors.push(cnf.texts.REGISTER_ERROR_PASSWORD_LENGTH);
    }
    if (password != rePassword) {
      errors.push(cnf.texts.REGISTER_ERROR_PASSWORD_MATCH);
    }

    if (errors.length > 0) {
      return NextResponse.json(
        {
          status: false,
          errors: errors
        },
        { status: 200 }
      );
    }
    const insert = await DatabaseManager.GetInstance().UserQueries.CreateUser({
      username: username,
      password: await bcrypt.hash(password, 10),
      mail: mail,
      look: process.env.REGISTER_LOOK,
      motto: process.env.REGISTER_MOTTO,
      auth_ticket: SSOGenerator.Generate(),
      gender: gender == 'M' ? 'M' : 'F',
      rank: process.env.REGISTER_RANK,
      ip_register: StringToBool(String(process.env.CLOUDFLARE_ENABLED))
        ? (req.headers.get('cf-connecting-ip') as string) ?? ''
        : req.ip ?? '',
      ip_current: StringToBool(String(process.env.CLOUDFLARE_ENABLED))
        ? (req.headers.get('cf-connecting-ip') as string) ?? ''
        : req.ip ?? '',
      last_login: Math.round(+new Date() / 1000),
      account_created: Math.round(+new Date() / 1000),
      credits:
        process.env.REGISTER_CREDITS < 0 ? 0 : process.env.REGISTER_CREDITS,
      diamonds:
        process.env.REGISTER_DIAMONDS < 0 ? 0 : process.env.REGISTER_DIAMONDS,
      duckets:
        process.env.REGISTER_DUCKETS < 0 ? 0 : process.env.REGISTER_DUCKETS
    });
    if (insert) return NextResponse.json({ status: true }, { status: 200 });
    else return NextResponse.json({ status: false }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ status: false }, { status: 200 });
  }
}
