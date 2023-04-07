import { LoginType } from 'database/types/LoginType';
import {
  RegisterType,
  RegisterUserCurrency,
  RegisterUserSettings
} from 'database/types/RegisterTypes';
import { User, UserCurrencies, UserSettings } from 'database/types/UserTypes';
import { Connection } from 'mysql';

export class UserQueries {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }
  public async GetUser(param: string | number): Promise<User> {
    return new Promise((resolve, reject) => {
      let sql = '';
      if (typeof param == 'string') {
        sql =
          'SELECT `id`,`username`,`mail`,`motto`,`look`,`rank`,`ip_register`,`ip_current`,`last_login`,`last_online`,`online` FROM `users` WHERE `username`=' +
          `"${param}"`;
      } else {
        sql =
          'SELECT `id`,`username`,`mail`,`motto`,`look`,`rank`,`ip_register`,`ip_current`,`last_login`,`last_online`,`online` FROM `users` WHERE `id`=' +
          `"${param}"`;
      }

      this.connection.query(sql, function (error, results, fields) {
        if (error || results.length == 0) {
          resolve({ status: false });
        } else {
          resolve({
            status: true,
            data: {
              id: results[0].id,
              username: results[0].username,
              mail: results[0].mail,
              motto: results[0].motto,
              look: results[0].look,
              rank: results[0].rank,
              ip_register: results[0].ip_register,
              ip_current: results[0].ip_current,
              last_login: results[0].last_login,
              last_online: results[0].last_online,
              online: !!Number(results[0].online)
            }
          });
        }
      });
    });
  }
  public async GetUserCurrencies(id: number): Promise<UserCurrencies> {
    return new Promise((resolve, reject) => {
      this.connection.query(
        'SELECT `credits`,(SELECT `amount` FROM `users_currency` WHERE `user_id`=' +
          id +
          ' && `type`=0) AS duckets,' +
          '(SELECT `amount` FROM `users_currency` WHERE `user_id`=' +
          id +
          ' && `type`= 5) AS diamonds FROM `users` WHERE `id`=' +
          id,
        function (_error, results, fields) {
          if (_error || results.length == 0) {
            resolve({ status: false });
          } else {
            resolve({
              status: true,
              data: {
                credits: results[0].credits,
                duckets: results[0].duckets,
                diamonds: results[0].diamonds
              }
            });
          }
        }
      );
    });
  }
  public async GetUserSettings(id: number): Promise<UserSettings> {
    return new Promise((resolve, reject) => {
      this.connection.query(
        'SELECT `user_id`,`achievement_score`, `repects_given`,`respects_received`,`can_trade`,`block_friendrequest` FROM `users_settings` WHERE `user_id` = ' +
          id +
          ' LIMIT 1',
        function (_error, results, fields) {
          if (_error || results.length == 0) {
            resolve({ status: false });
          } else {
            resolve({
              status: true,
              data: {
                user_id: results[0].user_id,
                achievement_score: results[0].achievement_score,
                respects_given: results[0].respects_given,
                respects_received: results[0].respects_received,
                can_trade: !!Number(results[0].can_trade),
                block_friendrequest: !!Number(results[0].block_friendrequest)
              }
            });
          }
        }
      );
    });
  }

  public async CreateSubscription(userId: number): Promise<boolean> {
    return await new Promise((resolve, reject) => {
      this.connection.query(
        'INSERT INTO `users_subscriptions`(`user_id`,`subscription_type`,`timestamp_start`,`duration`,`active`)' +
          `VALUES(${userId},"HABBO_CLUB",${Math.round(
            +new Date() / 1000
          )},"56246400",1)`,
        function (_error, results) {
          if (_error || results.length == 0) {
            resolve(false);
          } else {
            resolve(true);
          }
        }
      );
    });
  }
  public async CreateUser(user: RegisterType): Promise<boolean> {
    await new Promise((resolve, reject) => {
      this.connection.query(
        'INSERT INTO `users` (`username`, `password`, `rank`, `motto`, `gender`,`account_created`, `last_login`, `mail`, `look`, `ip_current`, `ip_register`, `credits`) ' +
          `VALUES("${user.username}","${user.password}",${user.rank},"${user.motto}","${user.gender}","${user.account_created}","${user.last_login}","${user.mail}","${user.look}","${user.ip_current}","${user.ip_register}",${user.credits})`,
        function (_error, results) {
          if (_error || results.length == 0) {
            resolve(false);
          } else {
            resolve(true);
          }
        }
      );
    });

    const user_id: number = await new Promise((resolve, reject) => {
      this.connection.query(
        "SELECT `id` FROM `users` WHERE `username`='" +
          user.username +
          "' LIMIT 1",
        (err, results) => {
          if (err || results.length == 0) {
            resolve(0);
          } else {
            resolve(results[0].id);
          }
        }
      );
    });

    await this.CreateUserCurrency({
      id: user_id,
      type: 0,
      amount: user.diamonds
    });

    await this.CreateUserCurrency({
      id: user_id,
      type: 5,
      amount: user.duckets
    });

    await this.CreateUserSettings({
      id: user_id,
      home_room: 0
    });

    await this.CreateSubscription(user_id);

    return true;
  }

  public async CreateUserCurrency(
    user: RegisterUserCurrency
  ): Promise<boolean> {
    // return true if statement is executed
    return await new Promise((resolve, reject) => {
      this.connection.query(
        'INSERT INTO `users_currency` (`user_id`,`type`,`amount`) ' +
          `VALUES(${user.id},${user.type},${user.amount})`,
        function (_error, results) {
          if (_error || results.length == 0) {
            resolve(false);
          } else {
            resolve(true);
          }
        }
      );
    });
  }
  public async CreateUserSettings(
    user: RegisterUserSettings
  ): Promise<boolean> {
    // return true if statement is executed
    return await new Promise((resolve, reject) => {
      this.connection.query(
        'INSERT INTO `users_settings` (`user_id`,`home_room`) ' +
          `VALUES(${user.id},${user.home_room})`,
        function (_error, results) {
          if (_error || results.length == 0) {
            resolve(false);
          } else {
            resolve(true);
          }
        }
      );
    });
  }

  public async UsernameExist(username: string): Promise<boolean> {
    return await new Promise((res, rej) => {
      this.connection.query(
        "SELECT id FROM `users` WHERE `username`= '" + username + "' LIMIT 1",
        (_err, results) => {
          if (_err || results.length == 0) res(false);
          else res(true);
        }
      );
    });
  }
  public async MailExist(mail: string): Promise<boolean> {
    return await new Promise((res, rej) => {
      this.connection.query(
        "SELECT id FROM `users` WHERE `mail`= '" + mail + "' LIMIT 1",
        (_err, results) => {
          if (_err || results.length == 0) res(false);
          else res(true);
        }
      );
    });
  }
  public async TryLogin(username: string): Promise<LoginType> {
    return await new Promise((res, rej) => {
      this.connection.query(
        "SELECT `id`,`username`,`rank`,`password` FROM `users` WHERE `username`= '" +
          username +
          "' LIMIT 1",
        (_err, results) => {
          if (_err || results.length == 0) res({ status: false });
          else
            res({
              status: true,
              data: {
                id: results[0].id,
                username: results[0].username,
                rank: results[0].rank,
                password: results[0].password
              }
            });
        }
      );
    });
  }

  public async CheckUsernameMail(
    username: string,
    mail: string
  ): Promise<boolean> {
    return await new Promise((res, rej) => {
      this.connection.query(
        "SELECT id FROM `users` WHERE `mail`= '" +
          mail +
          "' AND `username`= '" +
          username +
          "'",
        (_err, results) => {
          if (_err || results.length == 0) res(false);
          else res(true);
        }
      );
    });
  }

  public async UpdateLastLogin(id: number, ip: string): Promise<boolean> {
    return await new Promise((res, rej) => {
      this.connection.query(
        'UPDATE `users` SET `last_login` = {login},`ip_current`= "{ip}"'
          .replace('{login}', Math.round(+new Date() / 1000).toString())
          .replace('{ip}', ip),
        (_err, results) => {
          if (_err || results.length == 0) res(false);
          else res(true);
        }
      );
    });
  }
  public async UpdatePassword(
    username: string,
    password: string
  ): Promise<boolean> {
    return await new Promise((res, rej) => {
      this.connection.query(
        'UPDATE `users` SET `password` = "{password}" WHERE `username` = "{username}"'
          .replace('{password}', password)
          .replace('{username}', username),
        (_err, results) => {
          if (_err || results.length == 0) res(false);
          else res(true);
        }
      );
    });
  }
}
