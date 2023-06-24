import { ArticleBox } from '@/Components/News/ArticleBox';
import { INewsPage } from '@/Components/News/interfaces/INewsPage';
import { LeftArticleBox } from '@/Components/News/LeftArticleBox';
import { getServerSideProps } from '@/Components/News/ServerSide/NewsIdServerSideProps';
import AnnouncementBar from '@/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/Components/static/Components/footer/footer';
import Header from '@/Components/static/Components/header/header';
import Main from '@/Components/static/Components/Main/main';
import Navigator from '@/Components/static/Components/nav/navigator';
import Head from 'next/head';
import { useState } from 'react';
import '/styles/styles.css';
const cnf = require(`../../../languages/${process.env.NEXT_PUBLIC_CMS_LANGUAGE}`);
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
