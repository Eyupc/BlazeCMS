import { Connection } from "mysql";
import { Type } from "typescript";
import DatabaseServer from "./DatabaseServer";
import { User, UserCurrencies } from "./types/UserTypes";

export default class DatabaseManager extends DatabaseServer {
  private static DatabaseManager: DatabaseManager | null = null;
  constructor() {
    super();
  }

  public static GetInstance() {
    if (this.DatabaseManager == null)
      this.DatabaseManager = new DatabaseManager();

    return this.DatabaseManager;
  }
  public async Query(st: string): Promise<{ error: boolean; data?: any }> {
    return new Promise((resolve, reject) => {
      this.Connection.query(st, function (_error, results, fields) {
        if (_error || results.length == 0) resolve({ error: true });

        resolve({ error: false, data: results });
      });
    });
  }

  public async GetUser(username: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.Connection.query(
        "SELECT `id`,`username`,`password`,`mail`,`rank`,`auth_ticket` FROM `users` WHERE `username`=" +
          `"${username}"`,
        function (error, results, fields) {
          if (error || results.length == 0) {
            resolve({ status: "ERR" });
          } else {
            resolve({
              status: "OK",
              id: results[0].id,
              username: results[0].username,
              mail: results[0].mail,
              motto: results[0].motto,
              look: results[0].look,
              password: results[0].password,
              rank: results[0].rank,
              auth_ticket: results[0].auth_ticket,
              ip_last: results[0].ip_last,
              ip_reg: results[0].ip_reg,
            });
          }
        }
      );
    });
  }

  public async GetUserCurrencies(id: number): Promise<UserCurrencies> {
    return new Promise((resolve, reject) => {
      this.Connection.query(
        "SELECT u.credits AS credits,uc.type, uc.amount as AANTAL FROM `users` u INNER JOIN `users_currency` uc ON `u`.id = `uc`.user_id WHERE `u`.id = " +
          `${id};`,
        function (_error, results, fields) {
          if (_error || results.length == 0) {
            resolve({ status: "ERR" });
          } else {
            resolve({
              status: "OK",
              credits: results[0].credits,
              duckets: results[0].AANTAL,
              diamonds: results[1].AANTAL,
            });
          }
        }
      );
    });
  }
}
