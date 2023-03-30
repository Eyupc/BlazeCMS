import config from 'config.json';
import Link from 'next/link';
import { memo } from 'react';

const HomeButtons = memo(() => {
  return (
    <div className="hotel-button">
      <Link
        style={{ textDecoration: 'none' }}
        href={'/client'}
        target={'_blank'}
      >
        <div className="enterhotel">OTELE GİR</div>
      </Link>
      <Link
        style={{ textDecoration: 'none' }}
        href={`${config.DISCORD_URL}`}
        target={'_blank'}
      >
        <div className="razewiki">DISCORD</div>
      </Link>
    </div>
  );
});
export default HomeButtons;
