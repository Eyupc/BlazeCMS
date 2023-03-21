import { memo } from 'react';
import { IRegisterPassword } from '../interfaces/IRegisterPassword';

export const RegisterPassword = memo(
  ({ password, rePassword }: IRegisterPassword) => {
    return (
      <div className="register-password-main">
        <b>Parola</b>
        <em>En az 6 karakter kullanın.</em>
        <input
          className="register-i mb-08"
          type="password"
          name="password"
          id="password"
          autoComplete="on"
          onChange={(e) => password(e.target.value)}
          required
        />
        <b className="mb-05">Parolanı tekrarla</b>
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
  }
);
