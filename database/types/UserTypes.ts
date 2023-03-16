import { StatusType } from "./StatusType";

export type User = {
  status: StatusType["status"];
  data?: {
    id: number;
    username: string;
    look: string;
    mail: string;
    motto: string;
    rank: number;
    last_login: EpochTimeStamp;
    ip_register: string;
    ip_current: string;
    last_online: EpochTimeStamp;
    online: boolean;
  };
};
export type UserCurrencies = {
  status: StatusType["status"];
  data?: {
    credits: number;
    duckets: number;
    diamonds: number;
  };
};
export type UserSettings = {
  status: StatusType["status"];
  data?: {
    user_id: number;
    achievement_score: number;
    respects_given: number;
    respects_received: number;
    can_trade: boolean;
    block_friendrequest: boolean;
  };
};
