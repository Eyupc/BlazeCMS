import '@/app/global.css';
import InformationBox from '@/Components/Index/InformationBox';
import ModalLogin from '@/Components/Index/ModalLogin';
import AnnouncementBar from '@/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/Components/static/Components/footer/footer';
import Header from '@/Components/static/Components/header/header';
import Main from '@/Components/static/Components/Main/main';
import Navigator from '@/Components/static/Components/nav/navigator';
import Head from 'next/head';
export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Blaze - Index</title>
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
          <div className="login">
            <InformationBox
              alertTitle={'BİLGİLENDİRME'}
              title={'Arkadaş edin'}
              description={
                'Bir kullanıcıya tıklayın, arkadaşınız olmalarını isteyen ve beraber etkinlikere katılın, eğlenin odalar yapın ve rol yapın!'
              }
              banner_img={'/assets/images/corps.png'}
            />
            <InformationBox
              alertTitle={'BİLGİLENDİRME'}
              title={'Ücretsiz oyna'}
              description={
                'Blaze ücretsiz oynanan bir oyundur, ücretsiz binlerce odayı gezebilir, görevlerini tamamlayabilir, sohbet edebilir ve ödüller kazanabilirsiniz!'
              }
              banner_img={'/assets/images/crime.png'}
            />
            <InformationBox
              alertTitle={'BİLGİLENDİRME'}
              title={'Topluluğunu bul'}
              description={
                'Arkadaşlarınla sohbet edip takılmaktan mı hoşlanıyorsun? Blaze grupları, forumları ve rol yapan topluluklar başlangıç için iyi seçenekler.'
              }
              banner_img={'assets/images/community.png'}
            />
          </div>
        }
      />
      <ModalLogin />
      <Footer />
    </>
  );
}
