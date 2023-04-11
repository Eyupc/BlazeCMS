import { signIn } from 'next-auth/react';

export const TryoToLogin = async (username: string, password: string) => {
  const signed = await signIn('credentials', {
    username: username,
    password: password,
    redirect: false
  });
  return signed?.ok;
};
