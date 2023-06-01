import cnf from 'lang/en.json';
import { memo } from 'react';
import { IInput } from '../interfaces/IInput';

export const InputResetUsername = memo(({ Change }: IInput) => {
  return (
    <div className="login-username">
      <input
        className="login-i"
        placeholder={cnf.texts.LOGIN_UN_PLACEHOLDER}
        type="text"
        name="username"
        id="username"
        onChange={(e) => Change(e.target.value)}
        autoComplete={'on'}
        required
      />
    </div>
  );
});
