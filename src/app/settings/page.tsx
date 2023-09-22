import AlertBox from '@/app/components/Register/AlertBox';
import SettingsBox from '@/app/components/Settings/SettingsBox';
import AnnouncementBar from '@/app/components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/app/components/static/Components/footer/footer';
import Header from '@/app/components/static/Components/header/header';
import Main from '@/app/components/static/Components/Main/main';
import Navigator from '@/app/components/static/Components/nav/navigator';
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
