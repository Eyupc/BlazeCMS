import { memo } from 'react';
import { IStaffMenu } from './interfaces/IStaffMenu';

const StaffMenu = memo(({ setRank, currentRank, ranks }: IStaffMenu) => {
  return (
    <div className="staff-menu">
      <div className="box-inner">
        <div className="staff-table">
          <div
            onClick={() => setRank(14)}
            className={
              'stable-box bg-red ' + (currentRank == 14 ? 'stable-active' : '')
            }
          >
            <strong>{ranks.filter((u) => u.id == 14)[0].rank_name}</strong>
            <p className="tabledesc">Click to view the team</p>
          </div>
          <div
            onClick={() => setRank(13)}
            className={
              'stable-box bg-blue ' + (currentRank == 13 ? 'stable-active' : '')
            }
          >
            <strong>{ranks.filter((u) => u.id == 13)[0].rank_name}</strong>
            <p className="tabledesc">Click to view the team</p>
          </div>
          <div
            onClick={() => setRank(12)}
            className={
              'stable-box bg-orange ' +
              (currentRank == 12 ? 'stable-active' : '')
            }
          >
            <strong>Moderator</strong>
            <p className="tabledesc">
              {ranks.filter((u) => u.id == 12)[0].rank_name}
            </p>
          </div>
          <div
            onClick={() => setRank(11)}
            className={
              'stable-box bg-green ' +
              (currentRank == 11 ? 'stable-active' : '')
            }
          >
            <strong>{ranks.filter((u) => u.id == 11)[0].rank_name}</strong>
            <p className="tabledesc">Click to view the team</p>
          </div>
          <div
            onClick={() => setRank(10)}
            className={
              'stable-box bg-yellow ' +
              (currentRank == 10 ? 'stable-active' : '')
            }
          >
            <strong>{ranks.filter((u) => u.id == 10)[0].rank_name}</strong>
            <p className="tabledesc"></p>
          </div>
        </div>
      </div>
    </div>
  );
});
export default StaffMenu;
