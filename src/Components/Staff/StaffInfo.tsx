import { memo } from 'react';
import { IStaffInfo } from './interfaces/IStaffInfo';

const cnf = require(`../../../languages/${process.env.NEXT_PUBLIC_CMS_LANGUAGE}`);

const StaffInfo = memo(({ rankName }: IStaffInfo) => {
  return (
    <div className="staff-info">
      <div className="info-staff d-flex">
        <div className="staffico"></div>
        <div className="staff-text">
          <div className="staff-tittle">{rankName}</div>
          <div className="staff-description">{cnf.texts.STAFFS_INFO_TEXT}</div>
        </div>
      </div>
    </div>
  );
});
export default StaffInfo;
