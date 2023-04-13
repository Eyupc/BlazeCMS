import Link from 'next/link';
import { memo } from 'react';

const Header = memo(() => {
  return (
    <header>
      <div className="landspace"></div>
      <div className="landspace"></div>
      <div className="landspace"></div>
      <div className="clouds"></div>
      <Link href="/" className="logo"></Link>
    </header>
  );
});
export default Header;
