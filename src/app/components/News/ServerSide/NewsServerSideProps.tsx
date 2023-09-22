import DatabaseManager from '../../../../../database/DatabaseManager';
import { INewsPage } from '../interfaces/INewsPage';

export async function getServerSideProps(): Promise<{
  props: INewsPage | null;
}> {
  const news = await DatabaseManager.GetInstance().NewsQueries.getLatestNews(1);

  if (!news.status)
    return {
      props: {
        news: null
      }
    };

  return {
    props: {
      news: JSON.parse(JSON.stringify(news.news![0]))
    }
  };
}
