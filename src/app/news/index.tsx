import { INewsPage } from '@/app/Components/News/interfaces/INewsPage';
import { LeftArticleBox } from '@/app/Components/News/LeftArticleBox';
import { getServerSideProps } from '@/app/Components/News/ServerSide/NewsServerSideProps';
import AnnouncementBar from '@/app/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/app/Components/static/Components/footer/footer';
import Header from '@/app/Components/static/Components/header/header';
import Main from '@/app/Components/static/Components/Main/main';
import Navigator from '@/app/Components/static/Components/nav/navigator';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import cnf from '../../../cms-config.json';
import '../../../styles/styles.css';
export default function NewsPageHome(props: INewsPage) {
  const router = useRouter();

  useEffect(() => {
    if (props.news != null) router.push(`/news/${props.news!.id}`);
  }, []);

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
      <Main
        child={
          <div className="articlesPages">
            <LeftArticleBox changeNews={() => console.log()} />
          </div>
        }
      />
      <Footer />
    </>
  );
}

export { getServerSideProps };
