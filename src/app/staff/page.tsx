import { IStaffComponent } from '@/app/components/Staff/interfaces/IStaffComponent';
import AnnouncementBar from '@/app/components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/app/components/static/Components/footer/footer';
import Header from '@/app/components/static/Components/header/header';
import Main from '@/app/components/static/Components/Main/main';
import Navigator from '@/app/components/static/Components/nav/navigator';
import Head from 'next/head';
import cnf from '../../../cms-config.json';
import '/styles/styles.css';
import DatabaseManager from '../../../database/DatabaseManager';
import StaffComponent from '@/app/components/Staff/StaffComponent';

const getStaffs = async (): Promise<IStaffComponent> => {
  const staffs = await DatabaseManager.GetInstance().UserLists.GetStaffs();
  const ranks = await DatabaseManager.GetInstance().UserLists.GetRankNames();

  return {
    staffs: !staffs.status
      ? null
      : JSON.parse(JSON.stringify(staffs.data?.staffs)),
    ranks: JSON.parse(JSON.stringify(ranks.data))
  };
};
export default async function StaffPage() {
  const staffData = await getStaffs();
  return (
    <>
      <Head>
        <title>{cnf.texts.STAFFS_TITLE}</title>
      </Head>
      <Navigator />
      <Header />
      <AnnouncementBar
        title={cnf.texts.STAFFS_AB_TITLE}
        description={cnf.texts.STAFFS_AB_DESC}
      />
      <Main child={<StaffComponent data={staffData} />} />
      <Footer />
    </>
  );
}
