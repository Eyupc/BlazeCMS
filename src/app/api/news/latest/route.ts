import DatabaseManager from '../../../../../database/DatabaseManager';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const news = await DatabaseManager.GetInstance().NewsQueries.getLatestNews(
    20
  );

  if (!news.status)
    return NextResponse.json(
      {
        status: false
      },
      { status: 200 }
    );
  else
    return NextResponse.json(
      {
        status: true,
        news: news.news
      },
      { status: 200 }
    );
}
