import { Header } from "@/app/header/header";
import Navigator from "@/app/nav/navigator";
import DatabaseManager from "database/DatabaseManager";
import { StaffUser } from "database/types/UserListsTypes";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import "../../app/global.css";

export default function Index(data: StaffProps) {
  return (
    <>
      {console.log(data.ranks)}

      <Head>
        <title>Raze - Staff</title>
      </Head>
      <Navigator></Navigator>
      <Header></Header>
      <div className="announcement-bar">
        <div className="content">
          <div className="frank"></div>
          <div className="announcement-desc">
            <strong>RazeRP is a community full of dedicated users,</strong>
            <p>
              join for free, make friends, make enemies and enjoy the
              experience!
            </p>
          </div>
        </div>
      </div>
      <div className="content mt-2 mb-2">
        <div className="section">
          <div className="staff-menu">
            <div className="box-inner">
              <div className="staff-table">
                <div className="stable-box bg-red stable-active">
                  <strong>Project Founder</strong>
                  <p className="tabledesc">Click to view the team</p>
                </div>
                <div className="stable-box bg-blue">
                  <strong>Manager</strong>
                  <p className="tabledesc">Click to view the team</p>
                </div>
                <div className="stable-box bg-orange">
                  <strong>Moderator</strong>
                  <p className="tabledesc">Click to view the team</p>
                </div>
                <div className="stable-box bg-green">
                  <strong>Silver (Test Mod)</strong>
                  <p className="tabledesc">Click to view the team</p>
                </div>
                <div className="stable-box bg-yellow">
                  <strong>eXpert</strong>
                  <p className="tabledesc">Click to view the team</p>
                </div>
              </div>
            </div>
          </div>

          <div className="staff-team">
            <div className="staff-list">
              <div className="staffbox staff-online">
                <div className="avatarbox">
                  <div
                    className="figure"
                    style={{
                      background:
                        "url(https://www.habbo.com/habbo-imaging/avatarimage?figure=hd-180-1.hr-828-61.ch-255-66.lg-280-110.sh-305-62&amp;action=std,crr=667&amp;gesture=sml&amp;direction=2&amp;head_direction=2&amp;size=n&amp;img_format=png)",
                    }}
                  ></div>
                </div>
                <div className="staffinfo">
                  <div className="s_username staffname-online">RazeUser</div>
                  <div className="user-stats">
                    <strong>Last entry: </strong> 19.11.2021
                  </div>
                </div>
                <div className="staff-flag usflag"></div>
              </div>
            </div>
            <div className="staff-info">
              <div className="info-staff d-flex">
                <div className="staffico"></div>
                <div className="staff-text">
                  <div className="staff-tittle">Project Founder</div>
                  <div className="staff-description">
                    Project founders are the people who control and regulate the
                    smooth progress of RazeRP.
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
  staffs?: {
    FOUNDERS: StaffUser[];
    MANAGERS: StaffUser[];
    MODERATORS: StaffUser[];
    SILVERS: StaffUser[];
    EXPERTS: StaffUser[];
  };
  ranks?: { id: number; name: string }[];
};

export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<{ props: StaffProps }> {
  const session = await getSession({ req: ctx.req });
  const staffs = await DatabaseManager.GetInstance().UserLists.GetStaffs();
  const ranks = await DatabaseManager.GetInstance().UserLists.GetRankNames();

  if (staffs.status && ranks.status) {
    return {
      props: {
        staffs: JSON.parse(JSON.stringify(staffs.data)),
        ranks: JSON.parse(JSON.stringify(ranks.data)),
      },
    };
  }
  return {
    props: {},
  };
}
