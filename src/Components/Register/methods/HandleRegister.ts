import axios from 'axios';
import { signIn } from 'next-auth/react';
import router from 'next/router';
import { IHandleRegister } from '../interfaces/IHandleRegister';

export const HandleRegister = async (credentials: IHandleRegister) => {
  return await axios('/api/auth/register', {
    method: 'POST',
    withCredentials: true,
    data: {
      username: credentials.username,
      password: credentials.password,
      rePassword: credentials.rePassword,
      mail: credentials.email,
      gender: credentials.gender
    }
  })
    .then(async (resp) => {
      if (resp.data.status) {
        return true;
      } else {
        return resp.data.errors;
      }
    })
    .catch((err) => {
      return null;
    });
};
