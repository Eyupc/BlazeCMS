import { ArticleBox } from '@/Components/News/ArticleBox';
import { LeftArticleBox } from '@/Components/News/LeftArticleBox';
import AnnouncementBar from '@/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/Components/static/Components/footer/footer';
import Header from '@/Components/static/Components/header/header';
import Main from '@/Components/static/Components/Main/main';
import Navigator from '@/Components/static/Components/nav/navigator';
import DatabaseManager from 'database/DatabaseManager';
import { NewsType } from 'database/types/NewsTypes';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';

import '/styles/styles.css';

export default function NewsPage(props: INewsPage) {
  return (
    <>
      <Head>
        <title>{'Blaze news'}</title>
      </Head>
      <Navigator />
      <Header />
      <AnnouncementBar title={'test'} description={'test2'} />
      <Main
        child={
          <div className="articlesPages">
            <LeftArticleBox />
            <ArticleBox data={props.news} />
          </div>
        }
      />
      <Footer />
    </>
  );
}

type INewsPage = {
  news: NewsType;
};
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
