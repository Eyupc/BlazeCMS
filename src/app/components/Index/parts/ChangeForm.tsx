import { memo } from 'react';
import { IChangePage } from '../interfaces/IChangePage';

export const ChangeForm = memo(({ Change, text }: IChangePage) => {
  return (
    <div
      onClick={() => Change()}
      style={{ cursor: 'pointer' }}
      className="login-forgot"
    >
      {text}
    </div>
  );
});
