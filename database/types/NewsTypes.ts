import { StatusType } from './StatusType';

export type INews = {
  status: StatusType['status'];
  news?: NewsType;
};
export type ILatestNews = {
  status: StatusType['status'];
  news?: NewsType[];
};

export type NewsType = {
  id: number;
  author_id: number;
  title: string;
  description: string;
  full_story: string;
  image: string;
  timestamp: EpochTimeStamp;
  enabled: boolean;

  username: string;
  avatar: string;
};
