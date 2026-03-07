import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="text-1xl ml-auto w-[60%] my-3">
        <ul className="flex justify-between">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/quote">Ask for a Quote</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
