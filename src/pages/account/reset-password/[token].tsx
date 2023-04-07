import AlertBox from '@/Components/Register/AlertBox';
import AnnouncementBar from '@/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/Components/static/Components/footer/footer';
import Header from '@/Components/static/Components/header/header';
import Main from '@/Components/static/Components/Main/main';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import 'styles/styles.css';
export default function ResetPassword({ username, token }: IResetPassword) {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    password: '',
    rePassword: ''
  });

  const HandleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await axios('/api/reset/password', {
      method: 'POST',
      data: {
        username: username,
        password: credentials.password,
        rePassword: credentials.rePassword,
        token: token
      }
    }).then((resp) => {
      if (resp.data.status as Boolean) router.push('/');
      else console.log(resp.data.errors);
    });
  };
  return (
    <>
      <Head>
        <title>Reset your password</title>
      </Head>
      <Header />
      <AnnouncementBar title={'test'} description={'test'} />
      <Main
        child={
          <div className="content mt-2 mb-2">
            <div className="section">
              <div className="register">
                <div className="regbox d-flex direction-row bbgreen">
                  <div className="box-inner">
                    <form id="form" onSubmit={HandleSubmit}>
                      <b>Reset password of user: {username}</b>
                      <br />
                      <div className="register-password-main">
                        <b>Parola</b>
                        <em>En az 6 karakter kullanın.</em>
                        <input
                          className="register-i mb-08"
                          type="password"
                          name="password"
                          id="password"
                          onChange={(e) =>
                            setCredentials({
                              ...credentials,
                              password: e.target.value
                            })
                          }
                        />
                        <b className="mb-05">Parolanı tekrarla</b>
                        <input
                          className="register-i"
                          type="password"
                          name="repeat"
                          id="repeat"
                          onChange={(e) =>
                            setCredentials({
                              ...credentials,
                              rePassword: e.target.value
                            })
                          }
                        />
                      </div>
                      <hr />
                      <button type="submit" id="submit" className="enterhotel">
                        KAYDET!
                      </button>
                    </form>
                  </div>
                </div>
                <AlertBox
                  title={'Reset password'}
                  description={"Reset your user's password easily."}
                  text={
                    "Did u forget your user's password? That happens, on this page u can easily change your user's password! After changing your password, u will be redirected to the login page."
                  }
                />
              </div>
            </div>
          </div>
        }
      />
      <Footer />
    </>
  );
}

export interface IResetPassword {
  username: string;
  token: string;
}
export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<{ props: IResetPassword } | { notFound: boolean }> {
  const token: string = String(ctx.query.token);
  let data: any = null;
  jwt.verify(token, process.env.NEXTAUTH_SECRET, (err, res) => {
    if (err == null) data = res;
  });

  if (data == null)
    return {
      notFound: true
    };
  return {
    props: {
      username: data.username,
      token: token
    }
  };
}
