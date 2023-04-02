import cnf from 'cms-config.json';
import Link from 'next/link';
import router from 'next/router';
import { FormEvent, memo, useCallback, useState } from 'react';
import { TryoToLogin } from './methods/TryToLogin';
import InputName from './parts/InputName';
import InputPassword from './parts/InputPassword';
import { LoginHeader } from './parts/LoginHeader';
const ModalLogin = memo(() => {
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
          router.push('/home');
          break;
        default:
          setError(cnf.texts.LOGIN_ERROR);
          break;
      }
    },
    [username, password]
  );
  return (
    <div
      className="login-modal animate__animated animate__fadeIn"
      style={{ visibility: 'hidden', opacity: 0 }}
    >
      <div className="modalbox">
        <div className="userbox d-flex direction-row">
          <LoginHeader
            title={cnf.texts.LOGIN_TITLE}
            description={cnf.texts.LOGIN_DESC}
          />
          <form id="form" onSubmit={HandleSubmit}>
            <InputName Change={(uname) => setUsername(uname)} />
            <InputPassword Change={(password) => setPassword(password)} />
            <div className="error">{error}</div>
            <Link href="#" target="_blank" className="login-forgot">
              {cnf.texts.LOGIN_FORGOT_PASSWORD}
            </Link>
            <button type="submit" id="submit" className="enterhotel">
              {cnf.texts.LOGIN_SUBMIT_BTN}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});
export default ModalLogin;
