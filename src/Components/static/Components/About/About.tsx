import Link from 'next/link';
import { memo } from 'react';

export const About = memo(({ Close }: { Close: () => void }) => {
  return (
    <div className={'about'}>
      <div className="main">
        <div id={'header'}>
          <img
            id={'closeBtn'}
            src="/assets/images/close.gif"
            onClick={() => Close()}
          />
          <img id={'logo'} src="/assets/images/about-logo.gif" />
        </div>
        <div id={'info'}>
          <h2>Thank you, for using BlazeCMS!</h2>
          <p>
            BlazeCMS is a modern Habbo CMS , that is available for everyone.
          </p>
          <p>
            Github repository:{' '}
            <Link
              style={{ color: '#ff8000', textDecoration: 'none' }}
              href={'https://github.com/Eyupc/BlazeCMS'}
              target="_blank"
            >
              BlazeCMS
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
});
