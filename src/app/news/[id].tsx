import { ArticleBox } from '@/app/components/News/ArticleBox';
import { INewsPage } from '@/app/components/News/interfaces/INewsPage';
import { LeftArticleBox } from '@/app/components/News/LeftArticleBox';
import { getServerSideProps } from '@/app/components/News/ServerSide/NewsIdServerSideProps';
import AnnouncementBar from '@/app/components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/app/components/static/Components/footer/footer';
import Header from '@/app/components/static/Components/header/header';
import Main from '@/app/components/static/Components/Main/main';
import Navigator from '@/app/components/static/Components/nav/navigator';
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
