import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import "./navbar.scss";

const Navbar = () => {
  return (
    <header className="header">
      <a href="/#" className="logo">
        <i>StockX</i>
      </a>

      <nav className="navbar">
        <a href="">Home</a>
        <a href="">Men</a>
        <a href="">Women</a>
        <a href="">Jewelery</a>
        <a href="">Electronic</a>
      </nav>

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
