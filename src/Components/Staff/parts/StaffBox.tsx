import cnf from 'cms-config.json';
import { memo } from 'react';
import { IStaffBox } from '../interfaces/IStaffBox';

const StaffBox = memo(({ username, online, avatar, motto }: IStaffBox) => {
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
            background: `url(${
              cnf.links.IMAGER_URL
            }?figure=${avatar}&action=std,crr=667&gesture=${
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
          <strong>{cnf.texts.STAFFS_MOTTO} </strong> {motto}
        </div>
      </div>
      <div className="staff-flag usflag"></div>
    </div>
  );
});
export default StaffBox;
