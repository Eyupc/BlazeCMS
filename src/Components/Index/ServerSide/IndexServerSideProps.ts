import { setup } from 'lib/captcha';

export const getServerSideProps = setup(async ({ req, res }: any) => {
  return { props: {} };
});
