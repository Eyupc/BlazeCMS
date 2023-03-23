import { StaffUser } from 'database/types/UserListsTypes';

export interface IStaffComponent {
  staffs?: StaffUser[];
  ranks?: { id: number; rank_name: string }[];
}
