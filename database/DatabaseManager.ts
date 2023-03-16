import { Connection } from "mysql";
import { resolve } from "path";
import { Type } from "typescript";
import DatabaseServer from "./DatabaseServer";
import { RegisterType, RegisterUserCurrency } from "./types/RegisterTypes";
import { User, UserCurrencies } from "./types/UserTypes";
import { UserLists } from "./User/UserLists";
import { UserQueries } from "./User/UserQueries";

export default class DatabaseManager extends DatabaseServer {
  private static DatabaseManager: DatabaseManager | null = null;
  private _UserQueries: UserQueries;
  private _UserLists: UserLists;
  constructor() {
    super();
    this._UserQueries = new UserQueries(this.Connection);
    this._UserLists = new UserLists(this.Connection);
  }

  public static GetInstance() {
    if (this.DatabaseManager == null)
      this.DatabaseManager = new DatabaseManager();

    return this.DatabaseManager;
  }
  public get UserQueries(): UserQueries {
    return this._UserQueries;
  }
  public get UserLists(): UserLists {
    return this._UserLists;
  }
  public async Query(st: string): Promise<{ error: boolean; data?: any }> {
    return new Promise((resolve, reject) => {
      this.Connection.query(st, function (_error, results, fields) {
        if (_error || results.length == 0) resolve({ error: true });

        resolve({ error: false, data: results });
      });
    });
  }
}
