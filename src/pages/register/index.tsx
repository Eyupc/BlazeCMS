import AlertBox from '@/Components/Register/AlertBox';
import { RegisterBox } from '@/Components/Register/RegisterBox';
import AnnouncementBar from '@/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/Components/static/Components/footer/footer';
import Header from '@/Components/static/Components/header/header';
import Main from '@/Components/static/Components/Main/main';
import Head from 'next/head';
import Navigator from '../../Components/static/Components/nav/navigator';
import '/styles/styles.css';

export default function RegisterPage(ctx: any) {
  return (
    <>
      <Head>
        <title>Blaze - Register</title>
      </Head>
      <Navigator />
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
