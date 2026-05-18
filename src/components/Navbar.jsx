import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-black text-white p-5 flex gap-6 text-xl">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}