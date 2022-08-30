import { useState } from "react";

import { Link } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";

import "./navbar.scss";

//Navbar
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <header className={isScrolled ? "header scrolled" : "header"}>
      <a href="/#" className="logo">
        <i>N'store</i>
      </a>
      <Link to="/">
        <nav className="navbar">
          <div>
            <HomeIcon />
          </div>
        </nav>
      </Link>
      <div className="icons">
        <div>
          <ShoppingCartIcon />
        </div>
        <div>
          <PersonIcon />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
