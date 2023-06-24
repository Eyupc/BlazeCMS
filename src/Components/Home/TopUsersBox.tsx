import { memo } from 'react';
import { ITopUserBox } from './interfaces/ITopUserBox';
import { TopUser } from './parts/TopUser';
const cnf = require(`../../../languages/${process.env.NEXT_PUBLIC_CMS_LANGUAGE}`);

export const TopUsersBox = memo(({ users }: ITopUserBox) => {
  return (
    <div className="meinfo">
      <div className="infobox workforce-statistics">
        <div className="meinfo-head">
          <strong>{cnf.texts.HOME_MOST_ACITVE_TITLE}</strong>
        </div>
        <div className="meinfo-body">
          {users != null ? (
            users.map((u, i) => {
              return (
                <TopUser key={i} username={u.username} avatar={u.avatar} />
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
});
