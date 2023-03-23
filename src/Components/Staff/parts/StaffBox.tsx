import { memo } from 'react';
import { IStaffBox } from '../interfaces/IStaffBox';

export const StaffBox = memo(
  ({ username, online, avatar, motto }: IStaffBox) => {
    return (
      <div
        className={
          'staffbox' + (!!Number(online) ? ' staff-online' : ' staff-offline')
        }
      >
        <div className="avatarbox">
          <div
            className="figure"
            style={{
              background: `url(https://www.habbo.com/habbo-imaging/avatarimage?figure=${avatar}&action=std,crr=667&gesture=${
                !!Number(online) ? 'std' : 'eyb'
              }&direction=2&head_direction=2&size=n&img_format=png)`
            }}
          ></div>
        </div>
        <div className="staffinfo">
          <div
            className={
              's_username ' +
              (!!Number(online) ? 'staffname-online' : 'staffname-offline')
            }
          >
            {username}
          </div>
          <div className="user-stats">
            <strong>Motto: </strong> {motto}
          </div>
        </div>
        <div className="staff-flag usflag"></div>
      </div>
    );
  }
);
