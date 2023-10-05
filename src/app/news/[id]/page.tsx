import AnnouncementBar from '@/app/components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/app/components/static/Components/footer/footer';
import Header from '@/app/components/static/Components/header/header';
import Main from '@/app/components/static/Components/Main/main';
import Navigator from '@/app/components/static/Components/nav/navigator';
import Head from 'next/head';
import cnf from '../../../../cms-config.json';
import '/styles/styles.css';
import DynamicNewsComponent from '@/app/components/News/DynamicNewsComponent';
import { INewsPage } from '@/app/components/News/interfaces/INewsPage';
import DatabaseManager from '../../../../database/DatabaseManager';
import NotFound from 'next/dist/client/components/not-found-error';

const getNewsData = async (id: number): Promise<INewsPage> => {
  const news = await DatabaseManager.GetInstance().NewsQueries.getNews(
    Number(id)
  );

  if (!news.status) return { news: null };

  return {
    news: JSON.parse(JSON.stringify(news.news))
  };
};
export default async function NewsPage({ params }: { params: { id: number } }) {
  const newsData = await getNewsData(params.id);

  if (!newsData.news) return <NotFound />;
  return (
    <>
      <Head>
        <title>
          {cnf.texts.HOTEL_NAME} - {newsData.news?.title}
        </title>
      </Head>
      <Navigator />
      <Header />
      <AnnouncementBar
        title={cnf.texts.NEWS_AB_TITLE}
        description={cnf.texts.NEWS_AB_DESC}
      />
      <Main child={<DynamicNewsComponent news={newsData.news} />} />
      <Footer />
    </>
  );
}
