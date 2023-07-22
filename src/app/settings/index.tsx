import AlertBox from '@/app/Components/Register/AlertBox';
import { getServerSideProps } from '@/app/Components/Settings/ServerSide/SettingsServerSideProps';
import SettingsBox from '@/app/Components/Settings/SettingsBox';
import AnnouncementBar from '@/app/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/app/Components/static/Components/footer/footer';
import Header from '@/app/Components/static/Components/header/header';
import Main from '@/app/Components/static/Components/Main/main';
import Navigator from '@/app/Components/static/Components/nav/navigator';
import Head from 'next/head';
import cnf from '../../../cms-config.json';
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
