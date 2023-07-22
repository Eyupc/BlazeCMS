import { ArticleBox } from '@/app/Components/News/ArticleBox';
import { INewsPage } from '@/app/Components/News/interfaces/INewsPage';
import { LeftArticleBox } from '@/app/Components/News/LeftArticleBox';
import { getServerSideProps } from '@/app/Components/News/ServerSide/NewsIdServerSideProps';
import AnnouncementBar from '@/app/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/app/Components/static/Components/footer/footer';
import Header from '@/app/Components/static/Components/header/header';
import Main from '@/app/Components/static/Components/Main/main';
import Navigator from '@/app/Components/static/Components/nav/navigator';
import Head from 'next/head';
import { useState } from 'react';
import cnf from '../../../cms-config.json';
import '/styles/styles.css';
export default function NewsPage(props: INewsPage) {
  const [news, setNews] = useState(props.news!);
  return (
    <>
      <Head>
        <title>
          {cnf.texts.HOTEL_NAME} - {news.title}
        </title>
      </Head>
      <Navigator />
      <Header />
      <AnnouncementBar
        title={cnf.texts.NEWS_AB_TITLE}
        description={cnf.texts.NEWS_AB_DESC}
      />
      <Main
        child={
          <div className="articlesPages">
            <LeftArticleBox changeNews={(ns) => setNews(ns)} />
            <ArticleBox key={news.id} data={news} />
          </div>
        }
      />
      <Footer />
    </>
  );
}

export { getServerSideProps };
