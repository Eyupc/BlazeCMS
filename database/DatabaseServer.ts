import mysql from 'mysql';
import { IDatabaseServer } from './IDatabaseServer';

export default class DatabaseServer implements IDatabaseServer {
  private connection: mysql.Connection;

  constructor() {
    this.connection = mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      charset: 'utf8mb4',
      connectTimeout: 5
    });
    this.connection.connect();
  }

  public get Connection(): mysql.Connection {
    return this.connection;
  }
}
