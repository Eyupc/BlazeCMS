import cnf from 'lang/en.json';
import { memo } from 'react';
import { IRegisterPassword } from '../interfaces/IRegisterPassword';
const RegisterPassword = memo(({ password, rePassword }: IRegisterPassword) => {
  return (
    <div className="register-password-main">
      <b>{cnf.texts.REGISTER_PASSOWRD_TITLE}</b>
      <em>{cnf.texts.REGISTER_PASSWORD_DESC}</em>
      <input
        className="register-i mb-08"
        type="password"
        name="password"
        id="password"
        autoComplete="on"
        onChange={(e) => password(e.target.value)}
        required
      />
      <b className="mb-05">{cnf.texts.REGISTER_REPASSWORD_TITLE}</b>
      <input
        className="register-i"
        type="password"
        name="repeat"
        id="repeat"
        onChange={(e) => rePassword(e.target.value)}
        autoComplete="on"
        required
      />
    </div>
  );
});
export default RegisterPassword;
