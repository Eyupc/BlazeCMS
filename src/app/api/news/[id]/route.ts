import DatabaseManager from '../../../../../database/DatabaseManager';
import { NextRequest, NextResponse } from 'next/server';

//TODO

interface INewsParams {
  params: {
    id: number;
  };
}
export async function GET(req: NextRequest, { params }: INewsParams) {
  const news = await DatabaseManager.GetInstance().NewsQueries.getNews(
    Number(params.id)
  );

  if (!news.status)
    return NextResponse.json({
      status: false
    });
  else
    return NextResponse.json({
      status: true,
      news: news.news
    });
}
