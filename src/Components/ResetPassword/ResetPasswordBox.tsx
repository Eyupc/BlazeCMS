import { Alert } from '@mui/material';
import cnf from 'lang/en.json';
import { useRouter } from 'next/router';
import { FormEvent, memo, useState } from 'react';
import InputPassword from '../Settings/parts/InputPassword';
import { SubmitButton } from '../static/Components/Buttons/SubmitButton';
import { IResetPassword } from './interfaces/IResetPassword';
import { TryChangePassword } from './methods/TryChangePassword';
export const ResetPasswordBox = memo(({ username, token }: IResetPassword) => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    password: '',
    rePassword: ''
  });
  const [errors, setErrors] = useState([]);

  const HandleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await TryChangePassword(
      username,
      credentials.password,
      credentials.rePassword,
      token
    );
    if ((result as boolean) == true) router.push('/');
    else setErrors(result);
  };

  return (
    <div className="regbox d-flex direction-row bbgreen">
      <div className="box-inner">
        <form id="form" onSubmit={HandleSubmit}>
          <b>
            {cnf.texts.RESET_FORM_TITLE} {username}
          </b>
          <br />
          {errors.length > 0 ? (
            <Alert severity="error" style={{ margin: '.5rem .5rem .5rem 0' }}>
              {errors.map((e, i) => (
                <div key={i}>
                  {e}
                  <br />
                </div>
              ))}
            </Alert>
          ) : (
            <></>
          )}
          <div className="register-password-main">
            <InputPassword
              onUpdate={(val) =>
                setCredentials({ ...credentials, password: val })
              }
              title={cnf.texts.RESET_FORM_NEWPASS_TITLE}
              description={cnf.texts.RESET_FORM_NEWPASS_DESC}
              name={'password'}
            />
            <br />
            <InputPassword
              title={cnf.texts.RESET_FORM_REPASS_TITLE}
              description={cnf.texts.RESET_FORM_REPASS_DESC}
              name={'rePassword'}
              onUpdate={(val) =>
                setCredentials({ ...credentials, rePassword: val })
              }
            />
          </div>
          <hr />
          <SubmitButton text={cnf.texts.RESET_FORM_SUBMIT_BTN} />
        </form>
      </div>
    </div>
  );
});
