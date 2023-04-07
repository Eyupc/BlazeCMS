import InformationBox from '@/Components/Index/InformationBox';
import ModalBox from '@/Components/Index/ModalBox';
import AnnouncementBar from '@/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/Components/static/Components/footer/footer';
import Header from '@/Components/static/Components/header/header';
import Main from '@/Components/static/Components/Main/main';
import Navigator from '@/Components/static/Components/nav/navigator';
import cnf from 'cms-config.json';
import Head from 'next/head';
import '/styles/styles.css';
export default function IndexPage() {
  return (
    <>
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
    </>
  );
}
