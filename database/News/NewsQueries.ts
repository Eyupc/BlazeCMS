import { ILatestNews, INews } from 'database/types/NewsTypes';
import { Connection } from 'mysql';

export class NewsQueries {
  private connection: Connection;
  constructor(connection: Connection) {
    this.connection = connection;
  }

  public async getNews(id: number): Promise<INews> {
    return await new Promise((res, rej) => {
      this.connection.query(
        'SELECT c.*,u.username,u.look as avatar FROM `cms_news` c INNER JOIN `users` u ON c.`author_id`= u.`id` WHERE c.`enabled`= 1 AND c.`id` = ?',
        id,
        (_error, results) => {
          if (_error || results.length == 0) res({ status: false });
          res({
            status: true,
            news: results[0]
          });
        }
      );
    });
  }
  public async getLatestNews(limit: number): Promise<ILatestNews> {
    return await new Promise((res, rej) => {
      this.connection.query(
        'SELECT c.*,u.username,u.look as avatar FROM `cms_news` c INNER JOIN `users` u ON c.`author_id`= u.`id` WHERE c.`enabled` = 1 ORDER BY c.`id` DESC LIMIT ?',
        limit,
        (_err, results) => {
          if (_err || results.length == 0) res({ status: false });

          res({
            status: true,
            news: results
          });
        }
      );
    });
  }
}
