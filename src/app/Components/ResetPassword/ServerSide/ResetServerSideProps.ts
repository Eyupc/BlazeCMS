import jwt from 'jsonwebtoken';
import { GetServerSidePropsContext } from 'next';
import { setup } from '../../../../../lib/csrf';
import { IResetPassword } from '../interfaces/IResetPassword';
export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<{ props: IResetPassword } | { notFound: boolean }> {
  const token: string = String(ctx.query.token);
  let data: any = null;
  jwt.verify(token, process.env.NEXTAUTH_SECRET, (err, res) => {
    if (err == null) data = res;
  });

  if (data == null)
    return {
      notFound: true
    };
  return {
    props: {
      username: data.username,
      token: token
    }
  };
}
export default setup(getServerSideProps);
