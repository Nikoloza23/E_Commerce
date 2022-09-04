import { useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";

import "./navbar.scss";

//Navbar
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const state = useSelector((state) => state.handleCart);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <header className={isScrolled ? "header scrolled" : "header"}>
      <div className="logo">
        <i>N'store</i>
      </div>
      <Link to="/">
        <nav className="navbar">
          <div>
            <HomeIcon />
          </div>
        </nav>
      </Link>
      <div className="icons">
        <div>
          <div className="length">{state.length ? state.length : ""}</div>
          <Link to="/cart" style={{ color: "black" }}>
            <ShoppingCartIcon />
          </Link>
        </div>
        <div>
          <PersonIcon />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
