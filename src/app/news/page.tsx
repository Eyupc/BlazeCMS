import { INewsPage } from '@/app/components/News/interfaces/INewsPage';
import AnnouncementBar from '@/app/components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/app/components/static/Components/footer/footer';
import Header from '@/app/components/static/Components/header/header';
import Main from '@/app/components/static/Components/Main/main';
import Navigator from '@/app/components/static/Components/nav/navigator';
import Head from 'next/head';
import cnf from '../../../cms-config.json';
import '../../../styles/styles.css';
import DatabaseManager from '../../../database/DatabaseManager';
import NewsPageStatic from '@/app/components/News/NewsComponent';
import NotFound from 'next/dist/client/components/not-found-error';

const getNewsData = async (): Promise<INewsPage> => {
  const news = await DatabaseManager.GetInstance().NewsQueries.getLatestNews(1);
  if (!news.status) return { news: null };
  return { news: JSON.parse(JSON.stringify(news.news![0])) };
};

export default async function NewsPageHome() {
  const newsData = await getNewsData();
  if (!newsData.news) return <NotFound />;
  return (
    <>
      <Head>
        <title>{cnf.texts.NEWS_TITLE}</title>
      </Head>
      <Navigator />
      <Header />
      <AnnouncementBar
        title={'Blaze - News'}
        description={'No news available'}
      />
      <Main child={<NewsPageStatic news={newsData?.news ?? null} />} />
      <Footer />
    </>
  );
}
