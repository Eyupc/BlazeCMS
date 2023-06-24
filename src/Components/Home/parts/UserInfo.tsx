import { memo } from 'react';
import { IUserInfo } from '../interfaces/IUserInfo';
const cnf = require(`../../../../languages/${process.env.NEXT_PUBLIC_CMS_LANGUAGE}`);

const UserInfo = memo(
  ({ username, motto, last_online, achievement_score }: IUserInfo) => {
    return (
      <div className="user-info">
        <div className="username">{username}</div>
        <div className="motto">
          <i className="fa fa-quote-left"></i>
          <em>{motto}</em>
          <i className="fa fa-quote-right"></i>
        </div>
        <div className="user-stats">
          <strong>{cnf.texts.HOME_LAST_ONLINE} </strong> <>{last_online}</>
        </div>
        {
          ///<div className="user-stats bank">
          //<strong>Etkinlik puanı:</strong> 2
          // </div>
        }
        <div className="user-stats level">
          <strong>{cnf.texts.HOME_ACHIEVEMENT_SCORE}</strong>{' '}
          {achievement_score}
        </div>
      </div>
    );
  }
);
export default UserInfo;
