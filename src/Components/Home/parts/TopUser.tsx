import cnf from 'cms-config.json';
import { memo } from 'react';
import { ITopUser } from '../interfaces/ITopUser';
export const TopUser = memo(({ username, avatar }: ITopUser) => {
  return (
    <div className="work-group">
      <div
        className="workico"
        style={{
          backgroundImage: `url(${cnf.links.IMAGER_URL}?figure=${avatar}&action=wlk,wav,crr=667&gesture=sml&direction=2&head_direction=2&size=n&frame=wlk=1&img_format=png)`
        }}
      ></div>
      <div className="work-name">{username}</div>
    </div>
  );
});
