import AlertBox from '@/Components/Register/AlertBox';
import { RegisterBox } from '@/Components/Register/RegisterBox';
import { getServerSideProps } from '@/Components/Register/ServerSide/RegisterServerSideProps';
import AnnouncementBar from '@/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/Components/static/Components/footer/footer';
import Header from '@/Components/static/Components/header/header';
import Main from '@/Components/static/Components/Main/main';
import cnf from 'cms-config.json';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import Head from 'next/head';
import Navigator from '../../Components/static/Components/nav/navigator';
import '/styles/styles.css';
export default function RegisterPage(ctx: any) {
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
export { getServerSideProps };
