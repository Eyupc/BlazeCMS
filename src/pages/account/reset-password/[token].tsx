import AlertBox from '@/Components/Register/AlertBox';
import { IResetPassword } from '@/Components/ResetPassword/interfaces/IResetPassword';
import { ResetPasswordBox } from '@/Components/ResetPassword/ResetPasswordBox';
import { getServerSideProps } from '@/Components/ResetPassword/ServerSide/ResetServerSideProps';
import AnnouncementBar from '@/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/Components/static/Components/footer/footer';
import Header from '@/Components/static/Components/header/header';
import Main from '@/Components/static/Components/Main/main';
import Head from 'next/head';
import 'styles/styles.css';
export default function ResetPassword({ username, token }: IResetPassword) {
  return (
    <>
      <Head>
        <title>Reset your password</title>
      </Head>
      <Header />
      <AnnouncementBar title={'test'} description={'test'} />
      <Main
        child={
          <div className="register">
            <ResetPasswordBox username={username} token={token} />
            <AlertBox
              title={'Reset password'}
              description={"Reset your user's password easily."}
              text={
                "Did u forget your user's password? That happens, on this page u can easily change your user's password! After changing your password, u will be redirected to the login page."
              }
            />
          </div>
        }
      />
      <Footer />
    </>
  );
}

export { getServerSideProps };
