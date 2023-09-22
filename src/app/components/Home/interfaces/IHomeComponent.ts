import { NewsType } from '../../../../../database/types/NewsTypes';
import { MostActiveUsers } from '../../../../../database/types/UserListsTypes';

export interface IHomeComponent {
  user?: {
    username: string;
    motto: string;
    look: string;
    credits: number;
    duckets: number;
    diamonds: number;
    achievement_score: number;
    //last_login: string;
    last_online: string;
    online: boolean;
  };
  news?: NewsType[];
  topUsers?: MostActiveUsers['users'] | null;
}
