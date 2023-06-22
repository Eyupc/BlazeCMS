import mysql from 'mysql2';
export interface IDatabaseServer {
  get Pool(): mysql.Pool;
}
