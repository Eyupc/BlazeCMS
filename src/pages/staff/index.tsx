import { AnnouncementBar } from '@/Components/Index/AnnouncementBar';
import { Header } from '@/Components/static/header/header';
import Navigator from '@/Components/static/nav/navigator';
import DatabaseManager from 'database/DatabaseManager';
import { StaffUser } from 'database/types/UserListsTypes';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useMemo, useState } from 'react';
import '../../app/global.css';

export default function Index(data: StaffProps) {
  const [rank, setRank] = useState<number>(14);

  const GetStaffs = useMemo(() => {
    return data.staffs
      ?.filter((u) => u.rank == rank)
      .map((u, i) => {
        return (
          <div
            key={i}
            className={
              'staffbox' +
              (!!Number(u.online) ? ' staff-online' : ' staff-offline')
            }
          >
            <div className="avatarbox">
              <div
                className="figure"
                style={{
                  background: `url(https://www.habbo.com/habbo-imaging/avatarimage?figure=${
                    u.look
                  }&action=std,crr=667&gesture=${
                    !!Number(u.online) ? 'std' : 'eyb'
                  }&direction=2&head_direction=2&size=n&img_format=png)`
                }}
              ></div>
            </div>
            <div className="staffinfo">
              <div
                className={
                  's_username ' +
                  (!!Number(u.online)
                    ? 'staffname-online'
                    : 'staffname-offline')
                }
              >
                {u.username}
              </div>
              <div className="user-stats">
                <strong>Motto: </strong> {u.motto}
              </div>
            </div>
            <div className="staff-flag usflag"></div>
          </div>
        );
      });
  }, [rank, data.staffs]);
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
      <div className="content mt-2 mb-2">
        <div className="section">
          <div className="staff-menu">
            <div className="box-inner">
              <div className="staff-table">
                <div
                  onClick={() => setRank(14)}
                  className={
                    'stable-box bg-red ' + (rank == 14 ? 'stable-active' : '')
                  }
                >
                  <strong>
                    {data.ranks?.filter((u) => u.id == 14)[0].rank_name}
                  </strong>
                  <p className="tabledesc">Click to view the team</p>
                </div>
                <div
                  onClick={() => setRank(13)}
                  className={
                    'stable-box bg-blue ' + (rank == 13 ? 'stable-active' : '')
                  }
                >
                  <strong>
                    {data.ranks?.filter((u) => u.id == 13)[0].rank_name}
                  </strong>
                  <p className="tabledesc">Click to view the team</p>
                </div>
                <div
                  onClick={() => setRank(12)}
                  className={
                    'stable-box bg-orange ' +
                    (rank == 12 ? 'stable-active' : '')
                  }
                >
                  <strong>Moderator</strong>
                  <p className="tabledesc">
                    {data.ranks?.filter((u) => u.id == 12)[0].rank_name}
                  </p>
                </div>
                <div
                  onClick={() => setRank(11)}
                  className={
                    'stable-box bg-green ' + (rank == 11 ? 'stable-active' : '')
                  }
                >
                  <strong>
                    {data.ranks?.filter((u) => u.id == 11)[0].rank_name}
                  </strong>
                  <p className="tabledesc">Click to view the team</p>
                </div>
                <div
                  onClick={() => setRank(10)}
                  className={
                    'stable-box bg-yellow ' +
                    (rank == 10 ? 'stable-active' : '')
                  }
                >
                  <strong>eXpert</strong>
                  <p className="tabledesc">
                    {data.ranks?.filter((u) => u.id == 10)[0].rank_name}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="staff-team">
            <div className="staff-list">
              <> {GetStaffs}</>
            </div>

            <div className="staff-info">
              <div className="info-staff d-flex">
                <div className="staffico"></div>
                <div className="staff-text">
                  <div className="staff-tittle">
                    {data.ranks?.filter((u) => u.id == rank)[0].rank_name}
                  </div>
                  <div className="staff-description">
                    Raze staffs are people that trying to keep the hotel safe,
                    friendly, fun. These people are here to support you, if u
                    got some problems you can directly go to a staff for sue any
                    problem or anything.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

type StaffProps = {
  staffs?: StaffUser[];
  ranks?: { id: number; rank_name: string }[];
};

export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<{ props: StaffProps }> {
  const staffs = await DatabaseManager.GetInstance().UserLists.GetStaffs();
  const ranks = await DatabaseManager.GetInstance().UserLists.GetRankNames();

  if (staffs.status && ranks.status) {
    return {
      props: {
        staffs: JSON.parse(JSON.stringify(staffs.data?.staffs)),
        ranks: JSON.parse(JSON.stringify(ranks.data))
      }
    };
  }
  return {
    props: {}
  };
}
