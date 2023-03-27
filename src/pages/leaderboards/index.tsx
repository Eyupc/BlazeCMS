import '@/app/global.css';
import { ILeaderboardsComponent } from '@/Components/Leaderboards/interfaces/ILeaderboardsComponent';
import LeaderBoardsBox from '@/Components/Leaderboards/LeaderboardsBox';
import { getServerSideProps } from '@/Components/Leaderboards/ServerSide/LeaderServerSideProps';
import AnnouncementBar from '@/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/Components/static/Components/footer/footer';
import Header from '@/Components/static/Components/header/header';
import Main from '@/Components/static/Components/Main/main';

import Navigator from '@/Components/static/Components/nav/navigator';
import Head from 'next/head';

export default function LeaderBoards(data: ILeaderboardsComponent) {
  return (
    <>
      <Head>
        <title>Blaze - Leaderboards</title>
      </Head>
      <Navigator />
      <Header />
      <AnnouncementBar
        title={'Blaze - Leaderboards'}
        description={
          'Hi, this is the leaderboards page! On this page you can consult our top list who has the most credits, diamonds, duckets and achievement points.'
        }
      />
      <Main
        child={
          <div className="leaderboards">
            <LeaderBoardsBox
              title={'Credits top list'}
              type={'credits'}
              data={data.cr_topList}
            />
            <LeaderBoardsBox
              title={'Duckets top list'}
              type={'duckets'}
              data={data.du_topList}
            />
            <LeaderBoardsBox
              title={'Diamonds top list'}
              type={'diamonds'}
              data={data.di_topList}
            />
            <LeaderBoardsBox
              title={'Achievement score top list'}
              type={'achievement_score'}
              data={data.as_topList}
            />
          </div>
        }
      />
      <Footer />
    </>
  );
}
export { getServerSideProps };
