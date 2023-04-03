import { INews, NewsType } from 'database/types/NewsTypes';
import { Connection } from 'mysql';

export class NewsQueries {
  private connection: Connection;
  constructor(connection: Connection) {
    this.connection = connection;
  }

  public async getLatestNews(limit: number): Promise<INews> {
    return await new Promise((res, rej) => {
      this.connection.query(
        'SELECT c.*,u.username,u.look as avatar FROM `cms_news` c INNER JOIN `users` u ON c.`author_id`= u.`id` ORDER BY c.`id` DESC LIMIT ' +
          limit,
        (_err, results) => {
          if (_err || results.length < 0) res({ status: false });

          const news = results as Array<NewsType>;
          res({
            status: true,
            news: news
          });
        }
      );
    });
  }
}
