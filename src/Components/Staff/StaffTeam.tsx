import { memo } from 'react';
import { IStaffTeam } from './interfaces/IStaffTeam';
import { StaffList } from './parts/StaffList';
import { StaffInfo } from './StaffInfo';

export const StaffTeam = memo(
  ({ currentRank, staffs, rankName }: IStaffTeam) => {
    return (
      <div className="staff-team">
        <StaffList rank={currentRank} staffs={staffs} />
        <StaffInfo rankName={rankName} />
      </div>
    );
  }
);
