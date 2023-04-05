import BoxInner from '@/Components/Home/BoxInner';
import { IHomeComponent } from '@/Components/Home/interfaces/IHomeComponent';
import MeStatus from '@/Components/Home/MeStatus';
import { NewsBox } from '@/Components/Home/NewsBox';
import { getServerSideProps } from '@/Components/Home/ServerSide/HomeServerSideProps';
import { TopUsersBox } from '@/Components/Home/TopUsersBox';
import AnnouncementBar from '@/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/Components/static/Components/footer/footer';
import Header from '@/Components/static/Components/header/header';
import Main from '@/Components/static/Components/Main/main';
import Navigator from '@/Components/static/Components/nav/navigator';
import cnf from 'cms-config.json';
import Head from 'next/head';
import '/styles/styles.css';

export default function HomePage(data: IHomeComponent) {
  if (data.user == undefined) return <>Error</>;
  return (
    <>
      <Head>
        <title>{cnf.texts.HOME_TITLE}</title>
      </Head>
      <Navigator />
      <Header />
      <AnnouncementBar
        title={cnf.texts.HOME_AB_TITLE}
        description={cnf.texts.HOME_AB_DESC}
      />
      <Main
        child={
          <div className="home">
            <div className="mebox">
              <BoxInner
                online={data.user!.online}
                avatar={data.user!.look}
                username={data.user!.username}
                motto={data.user!.motto}
                last_online={data.user!.last_online}
                achievement_score={data.user!.achievement_score}
              />
              <MeStatus
                credits={data.user!.credits}
                duckets={data.user!.duckets}
                diamonds={data.user!.diamonds}
              />
            </div>
            <TopUsersBox users={data.topUsers!} />
            {data.news != null ? <NewsBox news={data.news!} /> : <></>}
          </div>
        }
      />
      <Footer />
    </>
  );
}

export { getServerSideProps };
