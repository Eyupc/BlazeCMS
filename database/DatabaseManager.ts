import { Connection } from "mysql";
import { resolve } from "path";
import { Type } from "typescript";
import DatabaseServer from "./DatabaseServer";
import { RegisterType, RegisterUserCurrency } from "./types/RegisterTypes";
import { User, UserCurrencies } from "./types/UserTypes";
import { UserQueries } from "./User/UserQueries";

export default class DatabaseManager extends DatabaseServer {
  private static DatabaseManager: DatabaseManager | null = null;
  private _UserQueries: UserQueries;
  constructor() {
    super();
    this._UserQueries = new UserQueries(this.Connection);
  }

  public static GetInstance() {
    if (this.DatabaseManager == null)
      this.DatabaseManager = new DatabaseManager();

    return this.DatabaseManager;
  }
  public get UserQueries(): UserQueries {
    return this._UserQueries;
  }

  public async Query(st: string): Promise<{ error: boolean; data?: any }> {
    return new Promise((resolve, reject) => {
      this.Connection.query(st, function (_error, results, fields) {
        if (_error || results.length == 0) resolve({ error: true });

        resolve({ error: false, data: results });
      });
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
