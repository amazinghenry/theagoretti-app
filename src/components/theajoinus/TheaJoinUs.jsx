import "./TheaJoinUs.css";
import theaJoinHands from "../../assets/thea-joinhands-image.webp";

const TheaJoinUs = () => {
  return (
    <div className="joinus-container container-fluid">
      <div className="joinus-group container">
        <div className="joinus-item">
          <h2>Join Your Hands with Us for a Better Life and Future</h2>
          <p>
            We help companies develop powerful corporate social responsibility,
            grant making and employee engagement strategies.
          </p>
        </div>
        <img
          src={theaJoinHands}
          alt="Volunteer taking stocks"
          className="img-fluid joinus-image"
        />
      </div>
    </div>
  );
};

export default TheaJoinUs;
