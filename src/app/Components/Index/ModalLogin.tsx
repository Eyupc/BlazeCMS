'use client';
import router from 'next/router';
import { FormEvent, memo, useCallback, useState } from 'react';
import cnf from '../../../../cms-config.json';
import { StringToBool } from '../../../../utils/StringToBool';
import { SubmitButton } from '../static/Components/Buttons/SubmitButton';
import { IModalLogin } from './interfaces/IModalLogin';
import { TryoToLogin } from './methods/TryToLogin';
import { ChangeForm } from './parts/ChangeForm';
import InputName from './parts/InputName';
import InputPassword from './parts/InputPassword';
import { LoginHeader } from './parts/LoginHeader';
const ModalLogin = memo(({ changePage }: IModalLogin) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const HandleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const loggedIn = await TryoToLogin(username, password);
      switch (loggedIn) {
        case true:
          await router.push('/home');
          break;
        default:
          setError(cnf.texts.LOGIN_ERROR);
          break;
      }
    },
    [username, password]
  );
  return (
    <>
      <LoginHeader
        title={cnf.texts.LOGIN_TITLE}
        description={cnf.texts.LOGIN_DESC}
      />
      <form id="form" onSubmit={HandleSubmit}>
        <InputName Change={(uname) => setUsername(uname)} />
        <InputPassword Change={(password) => setPassword(password)} />
        <div className="error">{error}</div>
        {StringToBool(String(process.env.NEXT_PUBLIC_EMAIL_ENABLED)) ? (
          <ChangeForm
            Change={() => changePage()}
            text={cnf.texts.LOGIN_FORGOT_PASSWORD}
          />
        ) : (
          <></>
        )}
        <SubmitButton text={cnf.texts.LOGIN_SUBMIT_BTN} />
      </form>
    </>
  );
});
export default ModalLogin;
