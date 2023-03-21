import { signIn } from 'next-auth/react';
import router from 'next/router';
import { useCallback } from 'react';

export const TryoToLogin = async (username: string, password: string) => {
  const signed = await signIn('credentials', {
    username: username,
    password: password,
    redirect: false
  });
  return signed?.ok;
};
