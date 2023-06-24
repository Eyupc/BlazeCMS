import InformationBox from '@/Components/Index/InformationBox';
import { IIndexPage } from '@/Components/Index/interfaces/IIndePage';
import ModalBox from '@/Components/Index/ModalBox';
import { getServerSideProps } from '@/Components/Index/ServerSide/IndexServerSideProps';
import AnnouncementBar from '@/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/Components/static/Components/footer/footer';
import Header from '@/Components/static/Components/header/header';
import Main from '@/Components/static/Components/Main/main';
import Navigator from '@/Components/static/Components/nav/navigator';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import Head from 'next/head';
import '/styles/styles.css';

const cnf = require(`../../languages/${process.env.NEXT_PUBLIC_CMS_LANGUAGE}`);
export default function IndexPage({ csrfToken }: IIndexPage) {
  return (
    <>
      <ReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      >
        {' '}
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
export { getServerSideProps };
