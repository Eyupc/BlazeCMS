import Link from "next/link";

export function Header() {
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
}
