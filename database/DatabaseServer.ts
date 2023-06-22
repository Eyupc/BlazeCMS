import mysql from 'mysql2';
import { IDatabaseServer } from './IDatabaseServer';

export default class DatabaseServer implements IDatabaseServer {
  private pool: mysql.Pool;

  constructor() {
    this.pool = mysql.createPool({
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      charset: 'utf8mb4',
      connectTimeout: 5
    });
  }

  public get Pool(): mysql.Pool {
    return this.pool;
  }
}
