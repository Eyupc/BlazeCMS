import { memo } from 'react';
import { IBoxInner } from './interfaces/IBoxInner';
import { HomeButtons } from './parts/HomeButtons';
import { UserBox } from './parts/UserBox';
import { UserInfo } from './parts/UserInfo';

export const BoxInner = memo(({ ...params }: IBoxInner) => {
  return (
    <div className="box-inner">
      <UserBox online={params.online} avatar={params.avatar} />
      <UserInfo
        username={params.username}
        motto={params.motto}
        last_online={params.last_online}
        achievement_score={params.achievement_score}
      />
      <HomeButtons />
      <div className="hotel-shadow"></div>
    </div>
  );
});
