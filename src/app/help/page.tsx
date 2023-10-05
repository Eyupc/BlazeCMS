import { HelpBox } from '@/app/components/Help/HelpBox';
import AnnouncementBar from '@/app/components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/app/components/static/Components/footer/footer';
import Header from '@/app/components/static/Components/header/header';
import Main from '@/app/components/static/Components/Main/main';
import Navigator from '@/app/components/static/Components/nav/navigator';
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
