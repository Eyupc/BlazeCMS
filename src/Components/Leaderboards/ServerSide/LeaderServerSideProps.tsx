import DatabaseManager from 'database/DatabaseManager';
import { GetServerSidePropsContext } from 'next';
import { ILeaderboardsComponent } from '../interfaces/ILeaderboardsComponent';

export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<{ props: ILeaderboardsComponent }> {
  const credits = await DatabaseManager.GetInstance().UserLists.getTopList(
    'credits'
  );
  console.log(credits);
  const duckets = await DatabaseManager.GetInstance().UserLists.getTopList(
    'duckets'
  );
  const diamonds = await DatabaseManager.GetInstance().UserLists.getTopList(
    'diamonds'
  );
  const achievement_score =
    await DatabaseManager.GetInstance().UserLists.getTopList(
      'achievement_score'
    );

  return {
    props: {
      cr_topList: JSON.parse(JSON.stringify(credits.users)),
      di_topList: JSON.parse(JSON.stringify(diamonds.users)),
      du_topList: JSON.parse(JSON.stringify(duckets.users)),
      as_topList: JSON.parse(JSON.stringify(achievement_score.users))
    }
  };
}
