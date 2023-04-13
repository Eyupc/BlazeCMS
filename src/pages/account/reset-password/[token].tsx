import AlertBox from '@/Components/Register/AlertBox';
import { IResetPassword } from '@/Components/ResetPassword/interfaces/IResetPassword';
import { ResetPasswordBox } from '@/Components/ResetPassword/ResetPasswordBox';
import { getServerSideProps } from '@/Components/ResetPassword/ServerSide/ResetServerSideProps';
import AnnouncementBar from '@/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/Components/static/Components/footer/footer';
import Header from '@/Components/static/Components/header/header';
import Main from '@/Components/static/Components/Main/main';
import cnf from 'cms-config.json';
import Head from 'next/head';
import 'styles/styles.css';
export default function ResetPassword({ username, token }: IResetPassword) {
  return (
    <>
      <Head>
        <title>{cnf.texts.RESET_TITLE}</title>
      </Head>
      <Header />
      <AnnouncementBar
        title={cnf.texts.RESET_AB_TITLE}
        description={cnf.texts.RESET_AB_DESC}
      />
      <Main
        child={
          <div className="register">
            <ResetPasswordBox username={username} token={token} />
            <AlertBox
              title={cnf.texts.RESET_ALERT_TITLE}
              description={cnf.texts.RESET_ALERT_DESC}
              text={cnf.texts.RESET_ALERT_TEXT}
            />
          </div>
        }
      />
      <Footer />
    </>
  );
}

export { getServerSideProps };
