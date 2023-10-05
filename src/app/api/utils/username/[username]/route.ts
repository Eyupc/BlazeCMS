import DatabaseManager from '../../../../../../database/DatabaseManager';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

interface IUsernameParams {
  params: {
    username: string;
  };
}
export async function GET(req: NextRequest, { params }: IUsernameParams) {
  const username: string = params.username;
  const data = await DatabaseManager.GetInstance().UserQueries.UsernameExist(
    username
  );
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
