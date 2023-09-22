'use client';
import axios from 'axios';
import { useReCaptcha } from 'next-recaptcha-v3';

import { FormEvent, memo, useCallback, useState } from 'react';
import { SubmitButton } from '../static/Components/Buttons/SubmitButton';
import { IModalLogin } from './interfaces/IModalLogin';
import { ChangeForm } from './parts/ChangeForm';
import { InputResetEmail } from './parts/InputResetEmail';
import { InputResetUsername } from './parts/InputResetUsername';

import router from 'next/router';
import cnf from '../../../../cms-config.json';
import { LoginHeader } from './parts/LoginHeader';

const ResetPassword = memo(({ changePage }: IModalLogin) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<{ status: boolean; text: string }>();

  const { executeRecaptcha } = useReCaptcha();

  const HandleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const token = await executeRecaptcha('form_submit');
      await axios(`${process.env.NEXT_PUBLIC_HOTEL_URL}/api/reset/request`, {
        method: 'POST',
        data: {
          username: username,
          email: email,
          captcha: token
        }
      }).then((resp) => {
        if ((resp.data.status as boolean) == true) {
          setResult({
            status: true,
            text: cnf.texts.FORGOT_PASSWORD_SUCCESS
          });
          setTimeout(() => router.reload(), 1000);
        } else
          setResult({ status: false, text: cnf.texts.FORGOT_PASSWORD_ERROR });
      });
    },
    [username, email]
  );

  return (
    <>
      <LoginHeader
        title={cnf.texts.FORGOT_PASSWORD_TITLE}
        description={cnf.texts.FORGOT_PASSWORD_DESC}
      />
      <form id="form" onSubmit={HandleSubmit}>
        <InputResetUsername Change={(e: string) => setUsername(e)} />
        <InputResetEmail Change={(e: string) => setEmail(e)} />

        {!result?.status ? (
          <div className="error">{result?.text}</div>
        ) : (
          <div className="success">{result.text}</div>
        )}

        <ChangeForm
          Change={() => changePage()}
          text={cnf.texts.FORGOT_PASSWORD_GOTO_LOGIN}
        />
        <SubmitButton text={cnf.texts.FORGOT_PASSWORD_SUBMIT_BTN} />
      </form>
    </>
  );
});
export default ResetPassword;
