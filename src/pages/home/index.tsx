import { Footer } from "@/app/static/footer/footer";
import { Header } from "@/app/static/header/header";
import Navigator from "@/app/static/nav/navigator";
import DatabaseManager from "database/DatabaseManager";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getServerSession, Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { userAgent } from "next/server";
import { HomeProps } from "../../Props/HomeProps";
import moment, { Moment } from "moment";
import "../../app/global.css";
import { AnnouncementBar } from "@/app/Index/AnnouncementBar";
export default function Home(data: HomeProps) {
  return (
    <>
      <Head>
        <title>Blaze - Home</title>
      </Head>
      <Navigator loggedIn={true} />
      <Header />
      <AnnouncementBar
        title={"Blaze Hotel özel kullanıcılarla dolu bir topluluktur."}
        description={
          "Ücretsiz katıl, arkadaş edin, odanı tasarla ve deneyimin tadını çıkar!"
        }
      />
      <div className="content mt-2 mb-2">
        <div className="section">
          <div className="home">
            <div className="mebox">
              <div className="box-inner">
                <div className="user-box">
                  <div
                    className={
                      "status " + (data.user?.online ? "online" : "offline")
                    }
                  ></div>
                  <div className="avatar-inner">
                    <div
                      className="figure"
                      style={{
                        backgroundImage: `url("https://habbo.com/habbo-imaging/avatarimage?figure=${data.user?.look}&action=wlk,wav,crr=667&gesture=sml&direction=2&head_direction=2&size=n&frame=wlk=1&img_format=png")`,
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
                    <strong>Son giriş: </strong> <>{data.user?.last_online}</>
                  </div>
                  {
                    ///<div className="user-stats bank">
                    //<strong>Etkinlik puanı:</strong> 2
                    // </div>
                  }
                  <div className="user-stats level">
                    <strong>Başarı puanı:</strong>{" "}
                    {data.user?.achievement_score}
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
                  style={{ borderBottom: "solid 1px #fe1500" }}
                >
                  <div className="icon health"></div>{" "}
                  <strong>{data.user?.credits}</strong>
                  &nbsp;kredi
                </div>
                <div
                  className="statistics"
                  style={{ borderBottom: "solid 1px #5bc025" }}
                >
                  <div className="icon energy"></div>{" "}
                  <strong>{data.user?.duckets}</strong>
                  &nbsp;ördek
                </div>
                <div
                  className="statistics"
                  style={{ borderBottom: "solid 1px #8547be" }}
                >
                  <div className="icon hyg"></div>{" "}
                  <strong>{data.user?.diamonds}</strong>
                  &nbsp;elmas
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

export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<{ props: HomeProps }> {
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
      "SELECT `achievement_score` FROM `users_settings` WHERE `user_id`= " +
        session.user.id
    );
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
              .format("DD-MM-YYYY"),
            online: user.data!.online,
            credits: currencies.data!.credits,
            duckets: currencies.data!.duckets,
            diamonds: currencies.data!.diamonds,
          },
        },
      };
  }
  return {
    props: {},
  };
}
