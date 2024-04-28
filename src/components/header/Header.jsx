import Auth from "../auth/Auth";

import Logo from "/logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="help-logo" className="help-logo" />
      <div className="menu">
        <Auth />
      </div>
    </header>
  );
};

export default Header;
