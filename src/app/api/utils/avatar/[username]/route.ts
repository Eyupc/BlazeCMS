import DatabaseManager from '../../../../../../database/DatabaseManager';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

interface IAvatarParams {
  params: {
    username: string;
  };
}
export async function GET(req: NextRequest, { params }: IAvatarParams) {
  const data = await DatabaseManager.GetInstance().Query(
    'SELECT `look` FROM `users` WHERE `username` = ? LIMIT 1',
    [params.username]
  );
  if (!data.error) {
    return NextResponse.json(
      {
        status: true,
        username: params.username,
        look: data.data[0].look
      },
      { status: 200 }
    );
  }
  return NextResponse.json(
    {
      status: false
    },
    { status: 200 }
  );
}
