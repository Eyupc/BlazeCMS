import '@/app/global.css';
import BoxInner from '@/Components/Home/BoxInner';
import { IHomeComponent } from '@/Components/Home/interfaces/IHomeComponent';
import MeStatus from '@/Components/Home/MeStatus';
import { getServerSideProps } from '@/Components/Home/ServerSide/HomeServerSideProps';
import AnnouncementBar from '@/Components/Index/AnnouncementBar';
import { Footer } from '@/Components/static/Components/footer/footer';
import Header from '@/Components/static/Components/header/header';
import Main from '@/Components/static/Components/Main/main';

import Navigator from '@/Components/static/Components/nav/navigator';
import Head from 'next/head';
export default function HomePage(data: IHomeComponent) {
  return (
    <>
      <Head>
        <title>Blaze - Home</title>
      </Head>
      <Navigator />
      <Header />
      <AnnouncementBar
        title={'Blaze Hotel özel kullanıcılarla dolu bir topluluktur.'}
        description={
          'Ücretsiz katıl, arkadaş edin, odanı tasarla ve deneyimin tadını çıkar!'
        }
      />
      <Main
        child={
          <div className="home">
            <div className="mebox">
              <BoxInner
                online={data.user!.online}
                avatar={data.user!.look}
                username={data.user!.username}
                motto={data.user!.motto}
                last_online={data.user!.last_online}
                achievement_score={data.user!.achievement_score}
              />
              <MeStatus
                credits={data.user!.credits}
                duckets={data.user!.duckets}
                diamonds={data.user!.diamonds}
              />
            </div>
          </div>
        }
      />
      <Footer />
    </>
  );
}

export { getServerSideProps };
