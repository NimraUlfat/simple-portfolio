import Link from 'next/link';

export default function Header() {
  return (
    <div className="header">
      <h1>My Portfolio</h1>
      <ul className="header-buttons">
        <Link href={"/"}>
        <li>Home</li></Link>
        <Link href={"/about"}>
        <li>About</li></Link>
        <Link href={"/contact"}>
        <li>Contact</li></Link>
      </ul>
    </div>
  );
}