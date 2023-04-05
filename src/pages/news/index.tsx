import { INewsPage } from '@/Components/News/interfaces/INewsPage';
import { LeftArticleBox } from '@/Components/News/LeftArticleBox';
import { getServerSideProps } from '@/Components/News/ServerSide/NewsServerSideProps';
import AnnouncementBar from '@/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/Components/static/Components/footer/footer';
import Header from '@/Components/static/Components/header/header';
import Main from '@/Components/static/Components/Main/main';
import Navigator from '@/Components/static/Components/nav/navigator';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import 'styles/styles.css';
export default function NewsPageHome(props: INewsPage) {
  const router = useRouter();

  useEffect(() => {
    if (props.news != null) router.push(`/news/${props.news!.id}`);
  }, []);

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
            <LeftArticleBox changeNews={() => console.log()} />
          </div>
        }
      />
      <Footer />
    </>
  );
}

export { getServerSideProps };
