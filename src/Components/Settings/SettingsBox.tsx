import { Alert } from '@mui/material';
import { signOut } from 'next-auth/react';
import router from 'next/router';
import { BaseSyntheticEvent, memo, useState } from 'react';
import { SubmitButton } from '../static/Components/Buttons/SubmitButton';
import { ICredentials } from './interfaces/ICredentials';
import { UpdatePassword } from './methods/UpdatePassword';
import { InputPassword } from './parts/InputPassword';

export const SettingsBox = memo(() => {
  const [credentials, setCredentials] = useState<ICredentials>({
    oldPassword: '',
    newPassword: '',
    rePassword: ''
  });
  const [errors, setErrors] = useState<string[]>([]);
  const SubmitPassword = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const data = await UpdatePassword(
      credentials.oldPassword,
      credentials.newPassword,
      credentials.rePassword
    );
    switch (data) {
      case true:
        await signOut({
          redirect: false
        });
        router.push('/');
        break;
      case false:
        break;
      default:
        setErrors(data as string[]);
        break;
    }
  };
  return (
    <div className="regbox d-flex direction-row bbgreen">
      <div className="box-inner">
        <form id="form" onSubmit={SubmitPassword}>
          <b>Change user's password</b>
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
                setCredentials({ ...credentials, oldPassword: val })
              }
              title={'Old password'}
              description={'Enter your old password.'}
              name={'oldPassword'}
            />
            <br />
            <InputPassword
              title={'New password'}
              description={'Enter your new password.'}
              name={'newPassword'}
              onUpdate={(val) =>
                setCredentials({ ...credentials, newPassword: val })
              }
            />
            <br />
            <InputPassword
              title={'Repeat old password'}
              name={'rePassword'}
              onUpdate={(val) =>
                setCredentials({ ...credentials, rePassword: val })
              }
            />
          </div>{' '}
          <SubmitButton text={'Submit!'} />
        </form>
      </div>
    </div>
  );
});
