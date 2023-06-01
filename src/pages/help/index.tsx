import { HelpBox } from '@/Components/Help/HelpBox';
import AnnouncementBar from '@/Components/static/Components/AnnouncementBar/AnnouncementBar';
import Main from '@/Components/static/Components/Main/main';
import { Footer } from '@/Components/static/Components/footer/footer';
import Header from '@/Components/static/Components/header/header';
import Navigator from '@/Components/static/Components/nav/navigator';
import cnf from 'lang/en.json';
import Head from 'next/head';
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
