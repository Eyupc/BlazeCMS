import { StaffUser } from 'database/types/UserListsTypes';

export interface IStaffTeam {
  currentRank: number;
  staffs: StaffUser[];
  rankName: string;
}
