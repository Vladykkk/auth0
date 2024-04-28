import { useState } from "react";
import Auth from "../auth/Auth";
import ExpandedPanel from "../expandedPanel/ExpandedPanel";

import Logo from "/logo.jpg";
import HelpImage from "/help-image.svg";
import HelpRequests from "../helpRequests/HelpRequests";

import "/src/reset.css";
import "./home.css";

function Home() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="App">
      <header className="header">
        <img src={Logo} alt="help-logo" className="help-logo" />
        <div className="menu">
          <button className="add-button"> add an ad </button>
          <Auth />
        </div>
      </header>
      <div className="main-content">
        <h1 className="main-heading">
          Need help? Find and offer services here!
        </h1>
        <p className="main-paragraph">
          Welcome to our platform where people come together together to give or
          receive help. Regardless of whether are you looking for professional
          services or help with everyday needs, here you will find everything
          you need!
        </p>

        <img src={HelpImage} alt="help-main-image" className="help-image" />
        <button className="left-menu-button" onClick={toggleExpanded}></button>
        <ExpandedPanel expanded={expanded} />
        <HelpRequests />
      </div>
    </div>
  );
}

export default Home;
