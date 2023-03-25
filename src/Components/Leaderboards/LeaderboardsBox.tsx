import { memo } from 'react';
import { ILeaderboardsBox } from './interfaces/ILeaderboardsBox';
import LeaderUserBox from './parts/LeaderUserBox';

const LeaderBoardsBox = memo(({ title, data, type }: ILeaderboardsBox) => {
  return (
    <div className="leader">
      <div className="leader-head">{title}</div>
      <div className="leader-main">
        {data.map((u, i) => {
          return (
            <LeaderUserBox
              key={i}
              username={u.username}
              avatar={u.avatar}
              amount={u.amount}
              type={type}
            />
          );
        })}
      </div>
    </div>
  );
});
export default LeaderBoardsBox;
