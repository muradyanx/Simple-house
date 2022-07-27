import simplehouse from "../../assets/simplehouse.jpg";
import "./style.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [underlineHome, setUnderlineHome] = useState(true);
  const [underlineAbout, setUnderlineAbout] = useState(false);
  const [underlineContact, setUnderlineContact] = useState(false);

  return (
    <header>
      <div  className="headerImage"
             style={{ backgroundImage: `url('${simplehouse}')` }} >
        

        <div className='g-container'>

          <div className="P-header-block">
           

            <div className="P-logo-block">
              <div className="header-icon"></div>
              <div>
                <h1 className="P-title-block">Simple House</h1>
                <p className="P-text-block">new restaurant template</p>
              </div>
            </div>
           

            <div className="P-nav-block">
              <Link to="/">
                <p
                  className={`P-nav-btn  ${
                    underlineHome ? "underline-on" : "underline-off"
                  }`}
                  onClick={() => {
                    setUnderlineHome(true);
                    setUnderlineAbout(false);
                    setUnderlineContact(false);
                  }}
                >
                  Home
                </p>
              </Link>

              <Link to="/about">
                <p
                  className={`P-nav-btn  ${
                    underlineAbout ? "underline-on" : "underline-off"
                  }`}
                  onClick={() => {
                    setUnderlineAbout(true);
                    setUnderlineHome(false);
                    setUnderlineContact(false);
                  }}
                >
                  {" "}
                  About
                </p>
              </Link>

              <Link to="/contact">
                <p
                  className={`P-nav-btn  ${
                    underlineContact ? "underline-on" : "underline-off"
                  }`}
                  onClick={() => {
                    setUnderlineContact(true);
                    setUnderlineAbout(false);
                    setUnderlineHome(false);
                  }}
                >
                  Contact
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
