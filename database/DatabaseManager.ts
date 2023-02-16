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
}
