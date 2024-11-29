import "./TheaServices.css";
import { GiFruitBowl } from "react-icons/gi";
import { FaBookOpenReader } from "react-icons/fa6";
import { IoIosWater } from "react-icons/io";
import { FaBriefcaseMedical } from "react-icons/fa6";

const TheaServices = () => {
  return (
    <div className="container-fluid service-container">
      <div className="container">
        <h2>We are here to help them</h2>
        <div className="service-group">
          <div className="service-item">
            <GiFruitBowl size={40} color="#949A86" />
            <h3>Healthy Food</h3>
            <p>
              We help companies develop powerful corporate social
              responsibility, grant making and employee engagement strategies.
            </p>
          </div>

          <div className="service-item">
            <FaBookOpenReader size={40} color="#949A86" />
            <h3>Kids Education</h3>
            <p>
              We help companies develop powerful corporate social
              responsibility, grant making and employee engagement strategies.
            </p>
          </div>
          <div className="service-item">
            <IoIosWater size={40} color="#949A86" />
            <h3>Pure Water</h3>
            <p>
              We help companies develop powerful corporate social
              responsibility, grant making and employee engagement strategies.
            </p>
          </div>
          <div className="service-item">
            <FaBriefcaseMedical size={40} color="#949A86" />
            <h3>Medical Care</h3>
            <p>
              We help companies develop powerful corporate social
              responsibility, grant making and employee engagement strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheaServices;
