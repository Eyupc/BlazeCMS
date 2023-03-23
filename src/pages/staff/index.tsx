import '@/app/global.css';
import { AnnouncementBar } from '@/Components/Index/AnnouncementBar';
import { IStaffComponent } from '@/Components/Staff/interfaces/IStaffComponent';
import { getServerSideProps } from '@/Components/Staff/ServerSide/StaffServerSideProps';
import { StaffMenu } from '@/Components/Staff/StaffMenu';
import { StaffTeam } from '@/Components/Staff/StaffTeam';
import { Header } from '@/Components/static/Components/header/header';
import { Main } from '@/Components/static/Components/Main/main';
import Navigator from '@/Components/static/Components/nav/navigator';
import Head from 'next/head';
import { useState } from 'react';
export default function StaffPage(data: IStaffComponent) {
  const [rank, setRank] = useState<number>(14);

  return (
    <>
      <Head>
        <title>Raze - Staff</title>
      </Head>
      <Navigator loggedIn={true} />
      <Header />
      <AnnouncementBar
        title={'Blaze - Staffs'}
        description={
          'Hi, this is the staff page. Here can u see our staff team!'
        }
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
    </>
  );
}

export { getServerSideProps };
