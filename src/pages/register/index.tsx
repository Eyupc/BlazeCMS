import Head from 'next/head';
import '../../app/global.css';
import Navigator from '../../Components/static/nav/navigator';

import { AnnouncementBar } from '@/Components/Index/AnnouncementBar';
import { AlertBox } from '@/Components/Register/AlertBox';
import { RegisterBox } from '@/Components/Register/RegisterBox';
import { Footer } from '@/Components/static/footer/footer';
import { Header } from '@/Components/static/header/header';
import { Main } from '@/Components/static/Main/main';
export default function Index(ctx: any) {
  return (
    <>
      <Head>
        <title>Blaze - Register</title>
      </Head>
      <Navigator loggedIn={false} />
      <Header />
      <AnnouncementBar
        title={'Blaze özel kullanıcılarla dolu bir topluluktur'}
        description={
          'Ücretsiz katıl, arkadaş edin, odanı tasarla ve deneyimin tadınıçıkar!'
        }
      />
      <Main
        child={
          <div className="register">
            <RegisterBox />
            <AlertBox
              title={"BLAZE'YE KATIL!"}
              description={
                'Gençler için dünyanın en büyük çevrimiçi topluluğunun bir parçası olun.'
              }
              text={
                'Arkadaşlarınızla sohbet etmeyi ve takılmayı sever misiniz? Blaze Grupları, forumlar ve Rol yapma topluluklarıbaşlamak için harika bir yerdir. Katılın ve sonsuz rol oynamaolasılıklarını keşfedin!'
              }
            />
          </div>
        }
      />
      <Footer />
    </>
  );
}
