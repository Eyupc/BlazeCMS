import { Connection } from "mysql";
import { resolve } from "path";
import { Type } from "typescript";
import DatabaseServer from "./DatabaseServer";
import { RegisterType, RegisterUserCurrency } from "./types/RegisterTypes";
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
            resolve({ status: "ERROR" });
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
        "SELECT u.credits AS credits,uc.type AS uType, uc.amount as amount FROM `users` u INNER JOIN `users_currency` uc ON `u`.id = `uc`.user_id WHERE `u`.id = " +
          `${id};`,
        function (_error, results, fields) {
          if (_error || results.length == 0) {
            resolve({ status: "ERROR" });
          } else {
            resolve({
              status: "OK",
              credits: results[0].credits,
              duckets:
                results[0].uType == 5 ? results[0].amount : results[1].amount,
              diamonds:
                results[0].uType == 0 ? results[0].amount : results[1].amount,
            });
          }
        }
      );
    });
  }

  public async CreateUser(user: RegisterType): Promise<boolean> {
    let exec = false;
    exec = await new Promise((resolve, reject) => {
      this.Connection.query(
        "INSERT INTO `users` (`username`, `password`, `rank`, `motto`, `gender`,`account_created`, `last_login`, `mail`, `look`, `ip_current`, `ip_register`, `credits`) " +
          `VALUES("${user.username}","${user.password}",${user.rank},"${user.motto}","${user.gender}","${user.account_created}","${user.last_login}","${user.mail}","${user.look}","${user.ip_current}","${user.ip_register}",${user.credits})`,
        function (_error, results) {
          if (_error || results.length == 0) {
            resolve(false);
          } else {
            resolve(true);
          }
        }
      );
    });
    if (!exec) return false;
    const user_id: number = await new Promise((resolve, reject) => {
      this.Connection.query(
        "SELECT `id` FROM `users` WHERE `username`='" +
          user.username +
          "' LIMIT 1",
        (err, results) => {
          if (err || results.length == 0) {
            resolve(0);
          } else {
            resolve(results[0].id);
          }
        }
      );
    });
    if (user_id == 0) return false;
    exec = await this.CreateUserCurrency({
      id: user_id,
      type: 0,
      amount: user.duckets,
    });
    if (!exec) return false;
    exec = await this.CreateUserCurrency({
      id: user_id,
      type: 5,
      amount: user.diamonds,
    });
    if (!exec) return false;
    return true;
  }

  public async CreateUserCurrency(
    user: RegisterUserCurrency
  ): Promise<boolean> {
    // return true if statement is executed
    return await new Promise((resolve, reject) => {
      this.Connection.query(
        "INSERT INTO `users_currency` (`user_id`,`type`,`amount`) " +
          `VALUES(${user.id},${user.type},${user.amount})`,
        function (_error, results) {
          if (_error || results.length == 0) {
            resolve(false);
          } else {
            resolve(true);
          }
        }
      );
    });
  }

  public async UsernameExist(username: string): Promise<boolean> {
    return await new Promise((res, rej) => {
      this.Connection.query(
        "SELECT id FROM `users` WHERE `username`= '" + username + "' LIMIT 1",
        (_err, results) => {
          if (_err || results.length == 0) res(false);
          else res(true);
        }
      );
    });
  }
  public async MailExist(mail: string): Promise<boolean> {
    return await new Promise((res, rej) => {
      this.Connection.query(
        "SELECT id FROM `users` WHERE `mail`= '" + mail + "' LIMIT 1",
        (_err, results) => {
          if (_err || results.length == 0) res(false);
          else res(true);
        }
      );
    });
  }
}
