import cnf from 'cms-config.json';
import { memo } from 'react';
import { ILeaderUserBox } from '../interfaces/ILeaderUserBox';
const LeaderUserBox = memo(({ ...props }: ILeaderUserBox) => {
  return (
    <div className="leader-box">
      <div className="leader-avatar">
        <div
          className="figure"
          style={{
            background: `url(${cnf.links.IMAGER_URL}?figure=${props.avatar}&amp;action=std,crr=667&amp;gesture=sml&amp;direction=2&amp;head_direction=2&amp;size=n&amp;headonly=1&amp;img_format=png)`
          }}
        ></div>
      </div>
      <div className="leader-user-info">
        <div className="username">{props.username}</div>
        <div className="description">
          {props.amount} {props.type}
        </div>
      </div>
    </div>
  );
});
export default LeaderUserBox;
