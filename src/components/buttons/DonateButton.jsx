import "./Buttons.css";

const DonateButton = (props) => {
  return (
    <a href="#" className="button-style">
      {props.buttonTitle}
    </a>
  );
};

export default DonateButton;
