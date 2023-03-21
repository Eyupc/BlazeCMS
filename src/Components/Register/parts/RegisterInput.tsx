import { memo, useState } from 'react';
import { IRegisterInput } from '../interfaces/IRegisterInput';
import { Validate } from '../methods/Validate';

export const RegisterInput = memo(
  ({ title, description, type, Change }: IRegisterInput) => {
    const [valid, setValid] = useState<boolean | null>(null);

    return (
      <>
        <b>{title}</b>
        <em>{description}</em>
        <input
          className="register-i"
          type="text"
          name={type}
          id={type}
          onKeyDown={(e) => {
            if (e.code == 'Space') e.preventDefault();
          }}
          style={
            valid != null
              ? valid
                ? { border: '1px solid green' }
                : { border: '1px solid red' }
              : {}
          }
          onChange={(e) => {
            Change(e.currentTarget.value);
          }}
          onBlur={async (e) => setValid(await Validate(type, e.target.value))}
          autoComplete="on"
          required
        />
      </>
    );
  }
);
