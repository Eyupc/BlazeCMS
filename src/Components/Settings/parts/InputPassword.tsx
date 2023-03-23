import { memo } from 'react';
import { IInputPassword } from '../interfaces/IInputPassword';

export const InputPassword = memo(
  ({ title, description, name, onUpdate }: IInputPassword) => {
    return (
      <>
        <b className="mb-05">{title}</b>
        {description != undefined ? <em>{description}</em> : <></>}
        <input
          onChange={(e) => onUpdate(e.target.value)}
          className="register-i"
          type="password"
          name={name}
          id={name}
        />
      </>
    );
  }
);
