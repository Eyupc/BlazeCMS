import axios from 'axios';
import cnf from 'cms-config.json';
import { useReCaptcha } from 'next-recaptcha-v3';

import { FormEvent, memo, useCallback, useState } from 'react';
import { IModalLogin } from './interfaces/IModalLogin';
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
      await axios('/api/reset/request', {
        method: 'POST',
        data: {
          username: username,
          email: email,
          captcha: token
        }
      }).then((resp) => {
        if (resp.data.status as Boolean)
          setResult({
            status: true,
            text: 'We have sent you an email to reset your password!'
          });
        else setResult({ status: false, text: 'Wrong username or email.' });
      });
    },
    [username, email]
  );

  return (
    <>
      <LoginHeader
        title={cnf.texts.LOGIN_TITLE}
        description={cnf.texts.LOGIN_DESC}
      />
      <form id="form" onSubmit={HandleSubmit}>
        <div className="login-username">
          <input
            className="login-i"
            placeholder={cnf.texts.LOGIN_UN_PLACEHOLDER}
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            autoComplete={'on'}
            required
          />
        </div>
        <div className="login-username">
          <input
            className="login-i"
            placeholder={'E-posta'}
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete={'on'}
            required
          />
        </div>

        {!result?.status ? (
          <div className="error">{result?.text}</div>
        ) : (
          <div className="success">{result.text}</div>
        )}

        <div
          onClick={() => changePage()}
          style={{ cursor: 'pointer' }}
          className="login-forgot"
        >
          {'Go back'}
        </div>

        <button type="submit" id="submit" className="enterhotel">
          {'Send mail'}
        </button>
      </form>
    </>
  );
});
export default ResetPassword;
