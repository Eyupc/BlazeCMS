export type User = {
  status: "OK" | "ERROR";
  id?: number;
  username?: string;
  look?: string;
  mail?: string;
  motto?: string;
  password?: string;
  rank?: number;
  auth_ticket?: string;
  ip_last?: string;
  ip_reg?: string;
};
export type UserCurrencies = {
  status: "OK" | "ERROR";
  credits?: number;
  duckets?: number;
  diamonds?: number;
};
export type UserSettings = {
  status: "OK" | "ERROR";
  user_id?: number;
  achievement_score?: number;
  respects_given?: number;
  respects_received?: number;
  can_trade?: boolean;
};
