import cnf from 'cms-config.json';
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
        <div className="enterhotel">{cnf.texts.HOME_ENTER_BTN}</div>
      </Link>
      <Link
        style={{ textDecoration: 'none' }}
        href={`${cnf.links.DISCORD_URL}`}
        target={'_blank'}
      >
        <div className="razewiki">{cnf.texts.HOME_DISCORD_BTN}</div>
      </Link>
    </div>
  );
});
export default HomeButtons;
