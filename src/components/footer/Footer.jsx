import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./footer.scss";

//Footer
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>N'Store</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          est numquam doloremque perspiciatis laborum enim sint fugit illum
          porro nostrum quidem, pariatur minima ea corporis tempora facilis
          molestias labore reiciendis?
        </p>
        <ul className="socials">
          <li>
            <a href="/#">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nikoloz-abashia-536681222/">
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          designed by<span>Nick</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
