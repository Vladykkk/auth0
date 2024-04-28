import "./helpRequests.css";
import { GiCheckMark } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function HelpRequests({ expanded }) {
  return (
    <div className="help-requests">
      <div className="help-request-text-box">
        <p className="help-request-text">i need help!!</p>
      </div>

      <div className="help-request-buttons">
        <button className="help-request-accept">
          <GiCheckMark />
        </button>

        <button className="help-request-refuse">
          <RxCross2 />
        </button>
      </div>
    </div>
  );
}

export default HelpRequests;
