import { Ranks, StaffLists, StaffUser } from "database/types/UserListsTypes";
import { Connection } from "mysql";

export class UserLists {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  public async GetStaffs(): Promise<StaffLists> {
    return await new Promise((res, rej) => {
      this.connection.query(
        "SELECT `username`,`look`,`motto`, `rank`,`online` FROM `users` WHERE `rank` >= 10",
        (_err, results) => {
          const staffs = results as Array<StaffUser>;
          if (_err || results.length == 0) res({ status: false });
          res({
            status: true,
            data: {
              FOUNDERS: staffs.filter((u) => u.rank == 14),
              MANAGERS: staffs.filter((u) => u.rank == 13),
              MODERATORS: staffs.filter((u) => u.rank == 12),
              SILVERS: staffs.filter((u) => u.rank == 11),
              EXPERTS: staffs.filter((u) => u.rank == 10),
            },
          });
        }
      );
    });
  }
  public async GetRankNames(): Promise<Ranks> {
    return new Promise((res, rej) => {
      this.connection.query(
        "SELECT `id`,`rank_name` FROM `permissions` WHERE `id` >= 10",
        (_err, results) => {
          if (_err || results.length == 0) res({ status: false });
          res({
            status: true,
            data: results,
          });
        }
      );
    });
  }
}