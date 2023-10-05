import InformationBox from '@/app/components/Index/InformationBox';
import ModalBox from '@/app/components/Index/ModalBox';
import AnnouncementBar from '@/app/components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/app/components/static/Components/footer/footer';
import Header from '@/app/components/static/Components/header/header';
import Main from '@/app/components/static/Components/Main/main';
import Navigator from '@/app/components/static/Components/nav/navigator';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import Head from 'next/head';
import cnf from '../../cms-config.json';
import '/styles/styles.css';

export default function IndexPage() {
  return (
    <>
      <ReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      >
        <Head>
          <title>{cnf.texts.INDEX_TITLE}</title>
        </Head>
        <Navigator />
        <Header />
        <AnnouncementBar
          title={cnf.texts.INDEX_AB_TITLE}
          description={cnf.texts.INDEX_AB_DESC}
        />
        <Main
          child={
            <div className="login">
              <InformationBox
                alertTitle={cnf.texts.INDEX_IB1_ALERT}
                title={cnf.texts.INDEX_IB1_TITLE}
                description={cnf.texts.INDEX_IB1_DESC}
                banner_img={cnf.texts.INDEX_IB1_IMG}
              />
              <InformationBox
                alertTitle={cnf.texts.INDEX_IB2_ALERT}
                title={cnf.texts.INDEX_IB2_TITLE}
                description={cnf.texts.INDEX_IB2_DESC}
                banner_img={cnf.texts.INDEX_IB2_IMG}
              />
              <InformationBox
                alertTitle={cnf.texts.INDEX_IB3_ALERT}
                title={cnf.texts.INDEX_IB3_TITLE}
                description={cnf.texts.INDEX_IB3_DESC}
                banner_img={cnf.texts.INDEX_IB3_IMG}
              />
            </div>
          }
        />
        <ModalBox />
        <Footer />
      </ReCaptchaProvider>
    </>
  );
}
