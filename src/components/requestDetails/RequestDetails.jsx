import { GiCheckMark } from "react-icons/gi";
import { RiCloseCircleLine } from "react-icons/ri";

import "./requestDetails.css";

function RequestDetails({
  title,
  location,
  email,
  phone,
  time,
  onButtonClick,
}) {
  const handleButton = () => {
    onButtonClick();
  };

  return (
    <div className="help-requests">
      <div className="help-request-text-box">
        <p className="help-request-text">{title}</p>
      </div>
      <p className="help-request-text">Location: {location}</p>
      <p className="help-request-text">Email: {email}</p>
      <p className="help-request-text">Phone: {phone}</p>
      <p className="help-request-text">Created time: {time}</p>
      <div className="help-request-buttons">
        <button className="help-request-accept" onClick={handleButton}>
          <GiCheckMark />
        </button>
        <button className="help-request-refuse" onClick={handleButton}>
          <RiCloseCircleLine />
        </button>
      </div>
    </div>
  );
}

export default RequestDetails;
