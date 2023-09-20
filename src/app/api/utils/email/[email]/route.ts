import DatabaseManager from '../../../../../../database/DatabaseManager';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

interface IEmailParams {
  params: {
    email: string;
  };
}
export async function GET(req: NextRequest, { params }: IEmailParams) {
  const email: string = params.email;
  const data = await DatabaseManager.GetInstance().UserQueries.MailExist(email);
  if (data) {
    return NextResponse.json(
      {
        exist: true
      },
      { status: 200 }
    );
  }
  return NextResponse.json(
    {
      exist: false
    },
    { status: 200 }
  );
}
