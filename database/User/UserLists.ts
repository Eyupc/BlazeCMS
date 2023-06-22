import {
  MostActiveUsers,
  Ranks,
  StaffLists,
  StaffUser,
  TopList
} from 'database/types/UserListsTypes';
import { Pool, RowDataPacket } from 'mysql2';

export class UserLists {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  public async GetStaffs(): Promise<StaffLists> {
    return await new Promise((res, rej) => {
      this.pool.query(
        'SELECT `username`,`look`,`motto`, `rank`,`online` FROM `users` WHERE `rank` >= 10',
        (_err, results: RowDataPacket[]) => {
          const staffs = results as Array<StaffUser>;
          if (_err || results.length == 0) res({ status: false });
          res({
            status: true,
            data: {
              staffs: staffs
            }
          });
        }
      );
    });
  }
  public async GetRankNames(): Promise<Ranks> {
    return new Promise((res, rej) => {
      this.pool.query(
        'SELECT `id`,`rank_name` FROM `permissions` WHERE `id` >= 10',
        (_err, results: RowDataPacket[any]) => {
          if (_err || results.length == 0) res({ status: false });
          res({
            status: true,
            data: results
          });
        }
      );
    });
  }

  public async getTopList(
    type: 'credits' | 'diamonds' | 'duckets' | 'achievement_score'
  ): Promise<TopList> {
    let sql = '';
    switch (type) {
      case 'credits':
        sql =
          'SELECT `username`,`look` as avatar,`credits` as amount FROM `users` WHERE `rank` < 10 ORDER BY `credits` DESC LIMIT 5';
        break;
      case 'diamonds':
        sql =
          'SELECT u.`username`,u.`look` as avatar, uc.`amount` FROM `users` u INNER JOIN `users_currency` uc ON u.`id` = uc.`user_id` WHERE (uc.`type` = 5 AND u.`rank` < 10) ORDER BY uc.`amount` DESC LIMIT 5;';
        break;
      case 'duckets':
        sql =
          'SELECT u.`username`,u.`look` as avatar,uc.`amount` FROM `users` u INNER JOIN `users_currency` uc ON u.`id` = uc.`user_id` WHERE (uc.`type` = 0 AND u.`rank` < 10) ORDER BY uc.`amount` DESC LIMIT 5;';
        break;
      case 'achievement_score':
        sql =
          'SELECT u.`username`,u.`look` as avatar, us.`achievement_score` as amount FROM `users` u INNER JOIN `users_settings` us ON u.`id` = us.`user_id` WHERE u.`rank` < 10 ORDER BY us.`achievement_score` DESC LIMIT 5';
    }
    return new Promise((res, rej) => {
      this.pool.query(sql, (_err, results: RowDataPacket[any]) => {
        if (_err || results.length == 0) res({ status: false });
        res({
          status: true,
          users: results
        });
      });
    });
  }

  public async getMostActiveUsers(limit: number): Promise<MostActiveUsers> {
    return new Promise((res, rej) => {
      this.pool.query(
        'SELECT u.`username`,u.`look` as avatar, s.`online_time` as time FROM `users` u INNER JOIN `users_settings` s ON u.`id` = s.`user_id` ORDER BY s.`online_time` DESC LIMIT ?',
        limit,
        (_err, results: RowDataPacket[any]) => {
          if (_err || results.length == 0) res({ status: false });
          res({ status: true, users: results });
        }
      );
    });
  }
}
