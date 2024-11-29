import "./Header.css";
import headerImage from "../../assets/thea-header-image.webp";
import DonateButton from "../buttons/DonateButton";

const Header = () => {
  return (
    <header className="container">
      <div className="header-group">
        <div className="header-item">
          <h1>Empowering Communities Through Education & Advocacy</h1>
          <p>
            Welcome to Thea Goretti Care Foundation - A beacon of empowerment
            and positive change. Our journey begins today as we embark on a
            mission to make a difference in the lives of many. Stay tuned for
            stories of resilience, empowerment, and the impact we're creating
            together!
          </p>
          <DonateButton buttonTitle="Donate Today" />
        </div>
        <img
          src={headerImage}
          alt="header image showing a volunteer folding arms"
          className="header-image img-fluid"
        />
      </div>
    </header>
  );
};

export default Header;
