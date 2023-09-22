import AlertBox from '@/app/components/Register/AlertBox';
import { IResetPassword } from '@/app/components/ResetPassword/interfaces/IResetPassword';
import { ResetPasswordBox } from '@/app/components/ResetPassword/ResetPasswordBox';
import { getServerSideProps } from '@/app/components/ResetPassword/ServerSide/ResetServerSideProps';
import AnnouncementBar from '@/app/components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/app/components/static/Components/footer/footer';
import Header from '@/app/components/static/Components/header/header';
import Main from '@/app/components/static/Components/Main/main';
import Head from 'next/head';
import cnf from '../../../../cms-config.json';
import '../../../../styles/styles.css';

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
