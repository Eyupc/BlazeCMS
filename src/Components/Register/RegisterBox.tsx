import { Alert } from '@mui/material';
import { signIn } from 'next-auth/react';
import router from 'next/router';
import { BaseSyntheticEvent, useState } from 'react';
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

  const SubmitRegister = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const result = await HandleRegister(credentials);
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
            title={'Kullanıcı adı'}
            description={
              "Gelecekte Blaze'de oturum açmak için bu kullanıcı adını kullanmanız gerekecek. Lütfen geçeri bir kullanıcı adı kullanın."
            }
            type={'username'}
            Change={(val) => setCredentials({ ...credentials, username: val })}
          />

          <RegisterPassword
            password={(e) => setCredentials({ ...credentials, password: e })}
            rePassword={(e) =>
              setCredentials({ ...credentials, rePassword: e })
            }
          />
          <RegisterInput
            title={'E-posta'}
            description={
              "Kendi e-posta adresinizi girerek 'parolamı unuttum' işlevini kullanabilirsiniz."
            }
            type={'email'}
            Change={(val) => setCredentials({ ...credentials, email: val })}
          />
          <hr />
          <RegisterOption
            title={'Cinsiyet'}
            description={'Lütfen cinsiyetinizi seçeniz.'}
            getOption={(e) => setCredentials({ ...credentials, gender: e })}
          />
          <hr />
          <RegisterCheckbox
            description={
              'Kullanım Şart ve Koşulları, Gizlilik ve Çerez Politikası Şartlarını kabul ediyorum.'
            }
          />
          <SubmitButton text={'Tamamladık! Hadi, bir avatar yapalım!'} />
        </form>
      </div>
    </div>
  );
}
