import "./Navbar.css";
import theaLogo from "../../assets/thealogo.webp";
import DonateButton from "../buttons/DonateButton";

const Navbar = () => {
  return (
    <nav className="container-fluid">
      <div className="nav-container container">
        <img
          src={theaLogo}
          alt="Thea non profit organisation Logo"
          className="img-fluid main-logo"
        />

        <ul className="link-group">
          <li className="link-item">
            <a href="#">Home</a>
          </li>
          <li className="link-item">
            <a href="#">About Us</a>
          </li>
          <li className="link-item">
            <a href="#">Programme</a>
          </li>
          <li className="link-item">
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <DonateButton buttonTitle="Donate Now" />
      </div>
    </nav>
  );
};

export default Navbar;
