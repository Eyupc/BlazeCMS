import { Footer } from "@/app/footer/footer";
import { Header } from "@/app/header/header";
import Navigator from "@/app/nav/navigator";
import DatabaseManager from "database/DatabaseManager";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getServerSession, Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import "../../app/global.css";

export default function Home(data: HomeProps) {
  return (
    <>
      <Head>
        <title>Blaze - Home</title>
      </Head>
      <Navigator></Navigator>
      <Header></Header>
      <div className="announcement-bar">
        <div className="content">
          <div className="frank"></div>
          <div className="announcement-desc">
            <strong>
              Blaze Hotel özel kullanıcılarla dolu bir topluluktur.
            </strong>
            <p>
              Ücretsiz katıl, arkadaş edin, odanı tasarla ve deneyimin tadını
              çıkar!
            </p>
          </div>
        </div>
      </div>
      <div className="content mt-2 mb-2">
        <div className="section">
          <div className="home">
            <div className="mebox">
              <div className="box-inner">
                <div className="user-box">
                  <div className="status online"></div>
                  <div className="avatar-inner">
                    <div
                      className="figure"
                      style={{
                        backgroundImage:
                          "url('https://habbo.com/habbo-imaging/avatarimage?figure=hd-180-1.ch-255-66.lg-280-110.sh-305-62.ha-1012-110.hr-828-61&action=wlk,wav,crr=667&gesture=sml&direction=2&head_direction=2&size=n&frame=wlk=1&img_format=png');",
                      }}
                    ></div>
                    <div className="plate"></div>
                  </div>
                </div>
                <div className="user-info">
                  <div className="username">{data.user?.username}</div>
                  <div className="motto">
                    <i className="fa fa-quote-left"></i>
                    <em>{data.user?.motto}</em>
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <div className="user-stats">
                    <strong>Son giriş: </strong> 19.11.2021
                  </div>
                  <div className="user-stats bank">
                    <strong>Etkinlik puanı:</strong> 2
                  </div>
                  <div className="user-stats level">
                    <strong>Başarı puanı:</strong> 23925
                  </div>
                </div>
                <div className="hotel-button">
                  <div className="enterhotel">OTELE GİR</div>
                  <div className="razewiki">DISCORD</div>
                </div>

                <div className="hotel-shadow"></div>
              </div>
              <div className="me-status">
                <div
                  className="statistics"
                  style={{ borderBottom: "solid 1px #fe1500;" }}
                >
                  <div className="icon health"></div> <strong>100</strong>
                  &nbsp;kredi
                </div>
                <div
                  className="statistics"
                  style={{ borderBottom: "solid 1px #5bc025;" }}
                >
                  <div className="icon energy"></div> <strong>88</strong>
                  &nbsp;ördek
                </div>
                <div
                  className="statistics"
                  style={{ borderBottom: "solid 1px #8547be;" }}
                >
                  <div className="icon hyg"></div> <strong>60</strong>
                  &nbsp;elmas
                </div>
              </div>
            </div>
            <div className="meinfo">
              <div className="infobox workforce-statistics">
                <div className="meinfo-head">
                  <strong>Haftanın kullanıcısı</strong>
                </div>
                <div className="meinfo-body">
                  <div className="work-group">
                    <div
                      className="workico"
                      style={{
                        backgroundImage:
                          "url(https://www.habbo.com/habbo-imaging/avatarimage?figure=hd-180-1.ch-255-66.lg-280-110.sh-305-62.ha-1012-110.hr-828-61&action=wlk,wav,crr=667&gesture=sml&direction=2&head_direction=2&size=n&frame=wlk=1&img_format=png)",
                      }}
                    ></div>
                    <div className="work-name">Furkan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

type HomeProps = {
  user?: Session["user"];
  credits?: number;
  duckets?: number;
  diamonds?: number;
};
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession({ req: ctx.req });
  if (session) {
    const currency = await DatabaseManager.GetInstance().GetUserCurrencies(
      parseInt(session.user.id!)
    );
    if (currency.status == "OK")
      return {
        props: {
          user: session.user,
          credits: currency.credits,
          duckets: currency.duckets,
          diamonds: currency.diamonds,
        }, // will be passed to the page component as props
      };
  }
  return {
    props: {},
  };
}
