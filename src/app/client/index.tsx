import DatabaseManager from '../../../database/DatabaseManager';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import { SSOGenerator } from '../../../utils/SSOGenerator';

export default function IndexPage({ sso }: ClientProps) {
  return (
    <>
      <Head>
        <title>Blaze - Client</title>
      </Head>
      <iframe
        id="beta"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding: 0,
          overflow: 'hidden',
          zIndex: 1
        }}
        src={`${process.env.NEXT_PUBLIC_NITRO_URL}?sso=${sso}`}
      ></iframe>
    </>
  );
}

type ClientProps = {
  sso: string;
};
export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<{ props: ClientProps }> {
  const session = await getSession({ req: ctx.req });
  const SSO = SSOGenerator.Generate();
  DatabaseManager.GetInstance().Pool.query(
    'UPDATE `users` SET `auth_ticket`= ? WHERE `id`= ?',
    [SSO, session!.user.id]
  );

  return {
    props: {
      sso: SSO
    }
  };
}
