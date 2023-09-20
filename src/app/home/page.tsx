import BoxInner from '@/app/Components/Home/BoxInner';
import { IHomeComponent } from '@/app/Components/Home/interfaces/IHomeComponent';
import MeStatus from '@/app/Components/Home/MeStatus';
import { NewsBox } from '@/app/Components/Home/NewsBox';
import { TopUsersBox } from '@/app/Components/Home/TopUsersBox';
import AnnouncementBar from '@/app/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/app/Components/static/Components/footer/footer';
import Header from '@/app/Components/static/Components/header/header';
import Main from '@/app/Components/static/Components/Main/main';
import Navigator from '@/app/Components/static/Components/nav/navigator';
import Head from 'next/head';
import cnf from '../../../cms-config.json';
import '/styles/styles.css';
import DatabaseManager from '../../../database/DatabaseManager';
import moment from 'moment/moment';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

async function getHomeData(): Promise<IHomeComponent | null> {
  const session = await getServerSession(options);
  if (session) {
    const user = await DatabaseManager.GetInstance().UserQueries.GetUser(
      session.user.id
    );
    const currencies =
      await DatabaseManager.GetInstance().UserQueries.GetUserCurrencies(
        session.user.id
      );
    const achievement_score = await DatabaseManager.GetInstance().Query(
      'SELECT `achievement_score` FROM `users_settings` WHERE `user_id`= ?',
      [session.user.id]
    );
    const newsList =
      await DatabaseManager.GetInstance().NewsQueries.getLatestNews(3);

    const topUsers =
      await DatabaseManager.GetInstance().UserLists.getMostActiveUsers(3);

    if (currencies.status && user.status)
      return {
        user: {
          username: user.data!.username,
          motto: user.data!.motto,
          look: user.data!.look,
          achievement_score: achievement_score.data[0].achievement_score,
          last_online: moment.unix(user.data!.last_online).format('DD-MM-YYYY'),
          online: user.data!.online,
          credits: currencies.data!.credits,
          duckets: currencies.data!.duckets,
          diamonds: currencies.data!.diamonds
        },
        news: !newsList.status
          ? null
          : JSON.parse(JSON.stringify(newsList.news)),
        topUsers: !topUsers.status
          ? null
          : JSON.parse(JSON.stringify(topUsers.users))
      };
  }
  return null;
}

export default async function HomePage() {
  const data = await getHomeData();
  if (!data) return <></>;

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
