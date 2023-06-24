import Link from 'next/link';
import { memo, useState } from 'react';
import { About } from '../About/About';

const cnf = require(`../../../../../languages/${process.env.NEXT_PUBLIC_CMS_LANGUAGE}`);
const links = require('../../../../../cms-config.json');
export const Footer = memo(() => {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <>
      {showAbout ? <About Close={() => setShowAbout(false)} /> : <></>}
      <div className="footermain">
        <div className="fbox">
          <div
            className="footer-title"
            style={{
              backgroundImage: 'url(/assets/images/flowers.gif)',
              backgroundSize: '100%',
              cursor: 'pointer'
            }}
            onClick={() => setShowAbout(true)}
          >
            {cnf.texts.FOOTER_TITLE}
            <small> ({cnf.texts.FOOTER_TITLE_V})</small>
          </div>
          <p className="footer-desc">{cnf.texts.FOOTER_DESCRIPTION}</p>
          <div className="footer-social">
            <Link
              href={links.links.TWITTER_URL}
              style={{ marginRight: '20px' }}
              target="_blank"
            >
              <i className="fab fa-twitter" style={{ marginRight: '5px' }}></i>
              Twitter
            </Link>
            <Link
              href={links.links.INSTAGRAM_URL}
              style={{ marginRight: '20px' }}
              target="_blank"
            >
              <i
                className="fab fa-instagram"
                style={{ marginRight: '5px' }}
              ></i>{' '}
              Instagram
            </Link>
            <a
              href={links.links.DISCORD_URL}
              target="_blank"
              rel={'noreferrer'}
            >
              <i className="fab fa-discord" style={{ marginRight: '5px' }}></i>{' '}
              Discord
            </a>
          </div>
          <div className="raze-info">
            <a href="#" className="footer-url">
              {cnf.texts.FOOTER_RULES}
            </a>
            <a href="#" className="footer-url">
              {cnf.texts.FOOTER_TERMS}
            </a>
            <a href="#" className="footer-url">
              {cnf.texts.FOOTER_PRIVACY}
            </a>
            <a href="#" className="footer-url">
              {cnf.texts.FOOTER_COOKIES}
            </a>
          </div>
        </div>
      </div>
      <div className="footer">{cnf.texts.FOOTER_COPYRIGHT}</div>
    </>
  );
});
