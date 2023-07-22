import { Metadata } from 'next';
import { ReactNode } from 'react';
import { NextAuthProvider } from './SessionProvider';

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js'
};
export default function RootLayout({ children }: Props) {
  return (
    <html>
      <NextAuthProvider>
        <body>{children}</body>
      </NextAuthProvider>
    </html>
  );
}
