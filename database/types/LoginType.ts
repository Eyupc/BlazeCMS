import { StatusType } from "./StatusType";

export type LoginType = {
  status: StatusType["status"];
  data?: {
    id: number;
    username: string;
    password: string;
    rank: number;
  };
};
