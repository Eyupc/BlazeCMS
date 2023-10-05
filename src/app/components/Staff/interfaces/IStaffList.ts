import { StaffUser } from '../../../../../database/types/UserListsTypes';

export interface IStaffList {
  rank: number;
  staffs: StaffUser[];
}
