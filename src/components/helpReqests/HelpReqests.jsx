import React from 'react';
import "./helpReqests.css";
import { GiCheckMark } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";



function HelpReqests({ expanded }) {
    return (
        <div className="help-reqests">
            <div className="help-reqest-text-box">
                <p className="help-reqest-text">
                    i need help!!
                </p>
            </div>

           <div className="help-reqest-buttons">
                <button className="help-reqest-accept">
                <GiCheckMark />
                </button>

                <button className="help-reqest-refuse">
                <RxCross2 />
                </button>
           </div>

        </div>
    );
}

export default HelpReqests;
