import Header from "../header/Header";

import HelpImage from "/help-image.svg";

import ExpandedPanel from "../expandedPanel/ExpandedPanel";
import RequestDetails from "../requestDetails/RequestDetails";

import "/src/reset.css";
import "./home.css";

function Home() {
  return (
    <div className="App">
      <Header />
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
        <ExpandedPanel />
        <RequestDetails />
      </div>
    </div>
  );
}

export default Home;
