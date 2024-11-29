import visionImage from "../../assets/thea-vision-image.webp";
import LearnMoreButton from "../buttons/LearnMoreButton";
import "./TheaVision.css";

const TheaVision = () => {
  return (
    <div className="vision-container container">
      <div className="vision-group">
        <img
          src={visionImage}
          alt="children in classroom"
          className="img-fluid vision-image"
        />
        <div className="vision-item">
          <h2>Igniting Hope, Empowering Lives</h2>
          <p>
            Our vision is to ignite hope and empower lives, fostering a world
            where every individual has the opportunity and resources to realize
            their full potential. Through community-driven initiatives and
            sustainable partnerships, we aim to create lasting change and
            inspire a future defined by equity, resilience, and limitless
            possibilities.
          </p>
          <LearnMoreButton buttonTitle="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default TheaVision;
