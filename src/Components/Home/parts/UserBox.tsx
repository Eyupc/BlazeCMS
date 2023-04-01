import cnf from 'cms-config.json';
import { memo } from 'react';
import { IUserBox } from '../interfaces/IUserBox';
const UserBox = memo(({ online, avatar }: IUserBox) => {
  return (
    <div className="user-box">
      <div className={'status ' + (online ? 'online' : 'offline')}></div>
      <div className="avatar-inner">
        <div
          className="figure"
          style={{
            backgroundImage: `url("${cnf.links.IMAGER_URL}?figure=${avatar}&action=wlk,wav,crr=667&gesture=sml&direction=2&head_direction=2&size=n&frame=wlk=1&img_format=png")`
          }}
        ></div>
        <div className="plate"></div>
      </div>
    </div>
  );
});
export default UserBox;
