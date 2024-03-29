import { memo, useMemo } from 'react';
import { IStaffList } from '../interfaces/IStaffList';
import StaffBox from './StaffBox';

const StaffList = memo(({ rank, staffs }: IStaffList) => {
  const GetStaffs = useMemo(() => {
    if (staffs == null) return <></>;
    return staffs
      ?.filter((u) => u.rank == rank)
      .map((u, i) => {
        return (
          <StaffBox
            key={i}
            username={u.username}
            online={u.online}
            avatar={u.look}
            motto={u.motto}
          />
        );
      });
  }, [rank, staffs]);
  return (
    <div className="staff-list">
      <> {GetStaffs}</>
    </div>
  );
});
export default StaffList;
