import { memo } from 'react';
import { ISubmitButton } from './ISubmitButton';
export const SubmitButton = memo(({ text }: ISubmitButton) => {
  return (
    <button type="submit" id="submit" className="enterhotel">
      {text}
    </button>
  );
});
