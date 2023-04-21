import DatabaseManager from 'database/DatabaseManager';
import moment from 'moment';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { IHomeComponent } from '../interfaces/IHomeComponent';

export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<{ props: IHomeComponent }> {
  const session = await getSession({ req: ctx.req });

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
        props: {
          user: {
            username: user.data!.username,
            motto: user.data!.motto,
            look: user.data!.look,
            achievement_score: achievement_score.data[0].achievement_score,
            last_online: moment
              .unix(user.data!.last_online)
              .format('DD-MM-YYYY'),
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
        }
      };
  }
  return {
    props: {}
  };
}
