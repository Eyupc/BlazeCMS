import DatabaseManager from 'database/DatabaseManager';
import { GetServerSidePropsContext } from 'next';
import { IStaffComponent } from '../interfaces/IStaffComponent';

export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<{ props: IStaffComponent }> {
  const staffs = await DatabaseManager.GetInstance().UserLists.GetStaffs();
  const ranks = await DatabaseManager.GetInstance().UserLists.GetRankNames();

  return {
    props: {
      staffs: !staffs.status
        ? null
        : JSON.parse(JSON.stringify(staffs.data?.staffs)),
      ranks: JSON.parse(JSON.stringify(ranks.data))
    }
  };
}
