import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="  navbarheader ml-auto  my-3 bg-gradient-to-r from-[#b38b8b] via-[#946e6e] to-[#633a3a] px-6 py-8 flex items-center justify-between shadow-md w-full fixed top-0 left-0 z-[100] transition-all duration-300 rounded-b-xl">
        <div className="flex-shrink-0 ">
          <h1 className="text-[#63003c] text-2xl font-bold tracking-tight">
            SPR-catering
          </h1>
        </div>
        <ul className="flex justify-between gap-10">
          <li>
            <Link to="/landingpage">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/quote">Ask for a Quote</Link>
          </li>
          <button className=" bg-[#fcd34d] hover:bg-[#fbbf24] text-black px-5 py-1.5 rounded-full text-[13px] font-bold shadow-sm transition-all active:scale-95 navbarbtn">
            <Link to="/quote">Login</Link>
          </button>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
