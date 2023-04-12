import { memo } from 'react';
import { IInput } from '../interfaces/IInput';

export const InputResetEmail = memo(({ Change }: IInput) => {
  return (
    <div className="login-username">
      <input
        className="login-i"
        placeholder={'E-posta'}
        type="email"
        name="email"
        id="email"
        onChange={(e) => Change(e.target.value)}
        autoComplete={'on'}
        required
      />
    </div>
  );
});
