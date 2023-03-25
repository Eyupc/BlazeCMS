import Link from 'next/link';
import { memo } from 'react';

const Header = memo(() => {
  return (
    <header>
      <div className="landspace"></div>
      <div className="landspace"></div>
      <div className="landspace"></div>
      <div className="clouds"></div>
      <Link
        href="/"
        className="rplogo animate__animated animate__jackInTheBox"
      ></Link>
    </header>
  );
});
export default Header;
