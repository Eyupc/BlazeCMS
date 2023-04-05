import DatabaseManager from 'database/DatabaseManager';
import { GetServerSidePropsContext } from 'next';
import { INewsPage } from '../interfaces/INewsPage';

export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<{ props: INewsPage } | { notFound: boolean }> {
  const news = await DatabaseManager.GetInstance().NewsQueries.getNews(
    Number(ctx.query.id)
  );

  if (!news.status)
    return {
      notFound: true
    };

  return {
    props: {
      news: JSON.parse(JSON.stringify(news.news))
    }
  };
}
