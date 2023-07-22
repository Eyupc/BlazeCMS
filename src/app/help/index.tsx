import { HelpBox } from '@/app/Components/Help/HelpBox';
import AnnouncementBar from '@/app/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/app/Components/static/Components/footer/footer';
import Header from '@/app/Components/static/Components/header/header';
import Main from '@/app/Components/static/Components/Main/main';
import Navigator from '@/app/Components/static/Components/nav/navigator';
import Head from 'next/head';
import cnf from '../../../cms-config.json';
import '/styles/styles.css';
export default function HelpPage() {
  return (
    <>
      <Head>
        <title>{cnf.texts.HELP_AB_TITLE}</title>
      </Head>
      <Navigator />
      <Header />
      <AnnouncementBar
        title={cnf.texts.HELP_AB_TITLE}
        description={cnf.texts.HELP_AB_DESC}
      />
      <Main child={<HelpBox />} />
      <Footer />
    </>
  );
}
