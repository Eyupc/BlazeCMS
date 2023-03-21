import { memo } from 'react';
import { IRegisterButton } from '../interfaces/IRegisterButton';

export const RegisterButton = memo(({ text }: IRegisterButton) => {
  return (
    <button type="submit" id="submit" className="enterhotel">
      {text}
    </button>
  );
});
