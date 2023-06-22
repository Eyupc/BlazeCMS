import { RowDataPacket } from 'mysql2';
import DatabaseServer from './DatabaseServer';
import { NewsQueries } from './News/NewsQueries';
import { UserLists } from './User/UserLists';
import { UserQueries } from './User/UserQueries';

export default class DatabaseManager extends DatabaseServer {
  private static DatabaseManager: DatabaseManager | null = null;
  private _UserQueries: UserQueries;
  private _UserLists: UserLists;
  private _NewsQueries: NewsQueries;
  constructor() {
    super();
    this._UserQueries = new UserQueries(this.Pool);
    this._UserLists = new UserLists(this.Pool);
    this._NewsQueries = new NewsQueries(this.Pool);
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
  public get NewsQueries(): NewsQueries {
    return this._NewsQueries;
  }
  public async Query(
    st: string,
    params: any[]
  ): Promise<{ error: boolean; data?: any }> {
    return new Promise((resolve, reject) => {
      this.Pool.query(
        st,
        params,
        (_error, results: RowDataPacket[], fields) => {
          if (_error || results.length == 0) resolve({ error: true });

          resolve({ error: false, data: results });
        }
      );
    });
  }
}
