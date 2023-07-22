import { setup } from '../../../../../lib/csrf';

export const getServerSideProps = setup(async ({ req, res }: any) => {
  return { props: {} };
});
