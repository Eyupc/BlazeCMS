import { memo } from 'react';
import { IInput } from '../interfaces/IInput';
const cnf = require(`../../../../languages/${process.env.NEXT_PUBLIC_CMS_LANGUAGE}`);

const InputPassword = memo(({ Change }: IInput) => {
  return (
    <div className="login-password">
      <div className="passico"></div>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => Change(e.currentTarget.value)}
        className="login-i"
        placeholder={cnf.texts.LOGIN_PASSWORD_PLACEHOLDER}
        autoComplete={'on'}
        required
      />
    </div>
  );
});
export default InputPassword;
