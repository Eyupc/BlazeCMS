import { IStaffComponent } from '@/app/components/Staff/interfaces/IStaffComponent';
import { getServerSideProps } from '@/app/components/Staff/ServerSide/StaffServerSideProps';
import StaffMenu from '@/app/components/Staff/StaffMenu';
import { StaffTeam } from '@/app/components/Staff/StaffTeam';
import AnnouncementBar from '@/app/components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/app/components/static/Components/footer/footer';
import Header from '@/app/components/static/Components/header/header';
import Main from '@/app/components/static/Components/Main/main';
import Navigator from '@/app/components/static/Components/nav/navigator';
import Head from 'next/head';
import { useState } from 'react';
import cnf from '../../../cms-config.json';
import '/styles/styles.css';

export default function StaffPage(data: IStaffComponent) {
  const [rank, setRank] = useState<number>(14);

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

      <Main
        child={
          <>
            <StaffMenu
              setRank={(s: number) => setRank(s)}
              currentRank={rank}
              ranks={data.ranks!}
            />
            <StaffTeam
              currentRank={rank}
              rankName={data.ranks?.find((u) => u.id == rank)!.rank_name!}
              staffs={data.staffs!}
            />
          </>
        }
      />
      <Footer />
    </>
  );
}

export { getServerSideProps };
