export type RegisterType = {
  username: string;
  password: string;
  mail: string;
  look: string;
  motto: string;
  auth_ticket: string;
  gender: string;
  rank: number;
  ip_register: string;
  ip_current: string;
  last_login: EpochTimeStamp;
  account_created: EpochTimeStamp; // timestamp
  credits: number;

  //users_currencies
  duckets: number;
  diamonds: number;
};

export type RegisterUserCurrency = {
  id: number;
  type: number;
  amount: number;
};
