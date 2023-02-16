import mysql from "mysql";
import { env } from "process";

export default class DatabaseServer {
  private connection: mysql.Connection;

  constructor() {
    this.connection = mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: Number.parseInt(process.env.MYSQL_PORT!),
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });
    this.connection.connect();
  }

  public get Connection(): mysql.Connection {
    return this.connection;
  }
}
