import cnf from 'cms-config.json';
import { memo, useState } from 'react';
import { IInput } from '../interfaces/IInput';
import { ChangeAvatar } from '../methods/ChangeAvatar';
const InputName = memo(({ Change }: IInput) => {
  const [avatar, setAvatar] = useState('');
  return (
    <div className="login-username">
      <div className="login-user-avatar">
        <img
          id="userLook"
          alt="Avatar"
          src={`${process.env.NEXT_PUBLIC_IMAGER_URL}?figure=${avatar}&head_direction=4&direction=4&size=sml`}
          className="login-avatar"
        />
      </div>
      <input
        className="login-i"
        placeholder={cnf.texts.LOGIN_UN_PLACEHOLDER}
        type="text"
        name="username"
        id="username"
        onChange={(e) => Change(e.currentTarget.value)}
        onBlur={async (e) => setAvatar(await ChangeAvatar(e.target.value))}
        autoComplete={'on'}
        required
      />
    </div>
  );
});
export default InputName;
