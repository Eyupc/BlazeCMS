import { Connection } from "mysql";
import { Type } from "typescript";
import DatabaseServer from "./DatabaseServer";

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
  public async Query(st: string): Promise<[{}]> {
    return new Promise((resolve, reject) => {
      this.Connection.query(st, function (error, results, fields) {
        if (error) resolve([{ status: "error" }]);
        resolve(results);
      });
    });
  }
  public async GetUser(username: string): Promise<{
    status: string;
    id?: string;
    username?: string;
    mail?: string;
    password?: string;
    rank?: number;
    auth_ticket?: string;
  }> {
    return new Promise((resolve, reject) => {
      this.Connection.query(
        "SELECT `id`,`username`,`password`,`mail`,`rank`,`auth_ticket` FROM `users` WHERE `username`=" +
          `"${username}"` +
          " LIMIT 1",
        function (error, results, fields) {
          console.log(error);
          if (error) resolve({ status: "ERR" });
          resolve({
            status: "OK",
            id: results[0].id,
            username: results[0].username,
            mail: results[0].mail,
            password: results[0].password,
            rank: results[0].rank,
            auth_ticket: results[0].auth_ticket,
          });
        }
      );
    });
  }
}
