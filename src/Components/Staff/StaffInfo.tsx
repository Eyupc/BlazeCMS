import { memo } from 'react';
import { IStaffInfo } from './interfaces/IStaffInfo';
const StaffInfo = memo(({ rankName }: IStaffInfo) => {
  return (
    <div className="staff-info">
      <div className="info-staff d-flex">
        <div className="staffico"></div>
        <div className="staff-text">
          <div className="staff-tittle">{rankName}</div>
          <div className="staff-description">
            Raze staffs are people that trying to keep the hotel safe, friendly,
            fun. These people are here to support you, if u got some problems
            you can directly go to a staff for sue any problem or anything.
          </div>
        </div>
      </div>
    </div>
  );
});
export default StaffInfo;
