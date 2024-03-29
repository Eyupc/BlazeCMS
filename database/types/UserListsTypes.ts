import { StatusType } from './StatusType';

export type StaffLists = {
  status: StatusType['status'];
  data?: {
    staffs: StaffUser[];
  };
};
export type StaffUser = {
  username: string;
  look: string;
  motto: string;
  rank: number;
  online: boolean;
};

export type Ranks = {
  status: StatusType['status'];
  data?: { id: number; name: string }[];
};

export type TopList = {
  status: StatusType['status'];
  users?: {
    username: string;
    avatar: string;
    amount: number;
  }[];
};
export type MostActiveUsers = {
  status: StatusType['status'];
  users?: {
    username: string;
    avatar: string;
    time: number;
  }[];
};
