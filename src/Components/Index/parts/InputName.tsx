import config from 'config.json';
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
          src={`${config.IMAGER_URL}?figure=${avatar}&head_direction=4&direction=4&size=sml`}
          className="login-avatar"
        />
      </div>
      <input
        className="login-i"
        placeholder="Kullanıcı adı"
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
