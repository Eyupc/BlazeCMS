import { StatusType } from "./StatusType";

export type StaffLists = {
  status: StatusType["status"];
  data?: {
    staffs: StaffUser[];
  };
};
export type StaffUser = {
  username: string;
  look: string;
  motto: string;
  online: boolean;
  rank: number;
};

export type Ranks = {
  status: StatusType["status"];
  data?: { id: number; name: string }[];
};
