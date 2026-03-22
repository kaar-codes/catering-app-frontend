import { Link } from "react-router-dom";

function NavBar({ user }) {
  // General Links
  const generalLinks = [
    { link: "/", slug: "home" },
    { link: "/about", slug: "about" },
    { link: "/contact", slug: "contact" },
    { link: "/askquote", slug: "ask for quote" },
  ];

  // Navigation Links Based User State
  const navLinks = user
    ? [{ link: "/profile", slug: "profile" }]
    : [
        { link: "/login", slug: "login" },
        { link: "/register", slug: "register" },
      ];

  const currentLinks = [...generalLinks, ...navLinks].map((cur) => (
    <li key={cur.slug}>
      <Link to={cur.link}>{cur.slug}</Link>
    </li>
  ));

  return (
    <>
      <nav className="text-1xl ml-auto w-[60%] my-3 px-6">
        <ul className="flex justify-between">{currentLinks}</ul>
      </nav>
    </>
  );
}

export default NavBar;
