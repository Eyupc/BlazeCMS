import mysql from 'mysql';
export interface IDatabaseServer {
  get Connection(): mysql.Connection;
}
