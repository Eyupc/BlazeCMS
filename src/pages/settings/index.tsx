import AlertBox from '@/Components/Register/AlertBox';
import { getServerSideProps } from '@/Components/Settings/ServerSide/SettingsServerSideProps';
import SettingsBox from '@/Components/Settings/SettingsBox';
import AnnouncementBar from '@/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/Components/static/Components/footer/footer';
import Header from '@/Components/static/Components/header/header';
import Main from '@/Components/static/Components/Main/main';
import Navigator from '@/Components/static/Components/nav/navigator';
import cnf from 'cms-config.json';
import Head from 'next/head';
import '/styles/styles.css';
export default function SettingsPage() {
  return (
    <>
      <Head>
        <title>{cnf.texts.SETTINGS_TITLE}</title>
      </Head>
      <Navigator />
      <Header />
      <AnnouncementBar
        title={cnf.texts.SETTINGS_AB_TITLE}
        description={cnf.texts.SETTINGS_AB_DESC}
      />
      <Main
        child={
          <div className="register">
            <SettingsBox />
            <AlertBox
              title={cnf.texts.SETTINGS_ALERTBOX_TITLE}
              description={cnf.texts.SETTINGS_ALERTBOX_DESCRIPTION}
              text={cnf.texts.SETTINGS_ALERTBOX_TEXT}
            />
          </div>
        }
      />
      <Footer />
    </>
  );
}
export { getServerSideProps };
