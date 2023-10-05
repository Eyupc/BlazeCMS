import AlertBox from '@/app/components/Register/AlertBox';
import { RegisterBox } from '@/app/components/Register/RegisterBox';
import AnnouncementBar from '@/app/components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/app/components/static/Components/footer/footer';
import Header from '@/app/components/static/Components/header/header';
import Main from '@/app/components/static/Components/Main/main';
import Navigator from '@/app/components/static/Components/nav/navigator';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import Head from 'next/head';
import cnf from '../../../cms-config.json';
import '/styles/styles.css';

export default function RegisterPage() {
  return (
    <>
      <ReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      >
        <Head>
          <title>{cnf.texts.REGISTER_TITLE}</title>
        </Head>
        <Navigator />
        <Header />
        <AnnouncementBar
          title={cnf.texts.REGISTER_AB_TITLE}
          description={cnf.texts.REGISTER_AB_DESC}
        />
        <Main
          child={
            <div className="register">
              <RegisterBox />
              <AlertBox
                title={cnf.texts.REGISTER_ALERTBOX_TITLE}
                description={cnf.texts.REGISTER_ALERTBOX_DESC}
                text={cnf.texts.REGISTER_ALERTBOX_TEXT}
              />
            </div>
          }
        />
        <Footer />
      </ReCaptchaProvider>
    </>
  );
}
