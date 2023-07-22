import { Alert } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useReCaptcha } from 'next-recaptcha-v3';
import router from 'next/router';
import { BaseSyntheticEvent, useState } from 'react';
import cnf from '../../../../cms-config.json';
import { SubmitButton } from '../static/Components/Buttons/SubmitButton';
import { ICredentials } from './interfaces/ICredentials';
import { HandleRegister } from './methods/HandleRegister';
import RegisterCheckbox from './parts/RegisterCheckbox';
import RegisterInput from './parts/RegisterInput';
import RegisterOption from './parts/RegisterOption';
import RegisterPassword from './parts/RegisterPassword';
export function RegisterBox() {
  const [credentials, setCredentials] = useState<ICredentials>({
    username: '',
    password: '',
    rePassword: '',
    email: '',
    gender: 'M'
  });
  const [errors, setErrors] = useState<string[]>([]);
  const { executeRecaptcha } = useReCaptcha();

  const SubmitRegister = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const token = await executeRecaptcha('form_submit');
    const result = await HandleRegister({ ...credentials, captcha: token });
    switch (result) {
      case true:
        const signed = await signIn('credentials', {
          username: credentials.username,
          password: credentials.password,
          redirect: false
        });
        if (signed?.ok) router.push('/home');
        return;
      case null:
        return;
      default:
        setErrors(result);
        return;
    }
  };

  return (
    <>
      <div className="regbox d-flex direction-row bbgreen">
        <div className="box-inner">
          <form id="form" onSubmit={SubmitRegister}>
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

            <RegisterInput
              title={cnf.texts.REGISTER_USERNAME_TITLE}
              description={cnf.texts.REGISTER_USERNAME_DESC}
              type={'username'}
              Change={(val) =>
                setCredentials({ ...credentials, username: val })
              }
            />

            <RegisterPassword
              password={(e) => setCredentials({ ...credentials, password: e })}
              rePassword={(e) =>
                setCredentials({ ...credentials, rePassword: e })
              }
            />
            <RegisterInput
              title={cnf.texts.REGISTER_EMAIL_TTLE}
              description={cnf.texts.REGISTER_EMAIL_DESC}
              type={'email'}
              Change={(val) => setCredentials({ ...credentials, email: val })}
            />
            <hr />
            <RegisterOption
              title={cnf.texts.REGISTER_GENDER_TITLE}
              description={cnf.texts.REGISTER_GENDER_DESC}
              getOption={(e) => setCredentials({ ...credentials, gender: e })}
            />
            <hr />
            <RegisterCheckbox description={cnf.texts.REGISTER_CHECKBOX_DESC} />
            <SubmitButton text={cnf.texts.REGISTER_SUBMIT_BTN} />
          </form>
        </div>
      </div>
    </>
  );
}
