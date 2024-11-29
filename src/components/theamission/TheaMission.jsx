import missionImage from "../../assets/thea-mission-image.webp";
import LearnMoreButton from "../buttons/LearnMoreButton";
import "./TheaMission.css";

const TheaMission = () => {
  return (
    <div className="mission-container container-fluid">
      <div className="mission-group container">
        <div className="mission-item">
          <h2>Building Resilient Communities Through Support & Resources</h2>
          <p>
            Our mission is to empower individuals and communities through
            education, advocacy, and support, fostering self-reliance and
            resilience. By providing access to resources, skills training, and
            opportunities for growth, we strive to ignite hope and facilitate
            sustainable transformation, enabling individuals to lead empowered,
            fulfilling lives.
          </p>
          <LearnMoreButton buttonTitle="Learn More" />
        </div>
        <img
          src={missionImage}
          alt="Volunteer taking stocks"
          className="img-fluid mission-image"
        />
      </div>
    </div>
  );
};

export default TheaMission;
