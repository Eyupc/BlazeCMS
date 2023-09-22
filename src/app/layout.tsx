import { Metadata } from 'next';
import { ReactNode } from 'react';
import { NextAuthProvider } from './SessionProvider';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Index',
  description: 'Welcome to Next.js'
};
export default async function RootLayout({ children }: Props) {
  const session = await getServerSession(options);
  return (
    <html>
      <NextAuthProvider session={session}>
        <body>{children}</body>
      </NextAuthProvider>
    </html>
  );
}
