import '@/app/global.css';
import AnnouncementBar from '@/Components/Index/AnnouncementBar';
import AlertBox from '@/Components/Register/AlertBox';
import SettingsBox from '@/Components/Settings/SettingsBox';
import { Footer } from '@/Components/static/Components/footer/footer';
import Header from '@/Components/static/Components/header/header';
import Main from '@/Components/static/Components/Main/main';
import Navigator from '@/Components/static/Components/nav/navigator';
import Head from 'next/head';
import { useState } from 'react';

export default function SettingsPage() {
  const [credentials, setCredentials] = useState('');
  return (
    <>
      <Head>
        <title>Blaze - Settings</title>
      </Head>
      <Navigator />
      <Header />
      <AnnouncementBar
        title={'Blaze settings page'}
        description={
          'Welcome back, this is the settings page of our hotel. Here, u can change some private information of yourself!'
        }
      />
      <Main
        child={
          <div className="register">
            <SettingsBox />
            <AlertBox
              title={'Blaze - Settings'}
              description={'Change your user settings'}
              text={''}
            />
          </div>
        }
      />
      <Footer />
    </>
  );
}
