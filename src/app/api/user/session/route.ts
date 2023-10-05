import { options } from '@/app/api/auth/[...nextauth]/options';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
import { NextResponse } from 'next/server';
import DatabaseManager from '../../../../../database/DatabaseManager';

export async function GET(req: Request) {
  const session = await getServerSession(options);
  if (!session) {
    return NextResponse.json({ status: false });
  }
  const data = await DatabaseManager.GetInstance().Query(
    'SELECT `id`,`username`,`look` FROM `users` WHERE `id` = ? LIMIT 1',
    [session.user.id]
  );
  if (!data.error) {
    return NextResponse.json({
      status: true,
      username: data.data[0].username,
      avatar: data.data[0].look
    });
  }
  return NextResponse.json({
    status: false
  });
}
