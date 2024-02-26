import "./nav.css";
import Img1 from "./logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section">
      <div className="parent_div">
        <div className="Navbar">
          <span className="">
            <img src={Img1} alt="pix" className="logo" />
          </span>
          <div className={`nav-items ${isOpen && "open"} header`}>
            <a href="/home">Home</a>
            <a href="/about" a>
              About
            </a>
            <a href="/team" a>
              Team
            </a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"} `}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>

        <div className="overall_image">
          <div className="body_image">
            <div>
              <div className="body_div">
                <div>
                  <h1 className="body_h1">We redefine entertainment.</h1>
                  <p className="body_p">
                    Timeline Entertainment Limited was established by a team of
                    professionals in music, audio-visuals, software managers,
                    and media strategists in 2007.
                  </p>
                  <Link to="/aboutDetails">
                    <input
                      type="button"
                      value="READ MORE"
                      className="body_button"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p>Hello world</p>
          <p>GOD is good and he is good to me oh my soul riseup and praise the lord</p>
          <p>Hello world</p>
        </div>
      </div>
    </section>
  );
};

export default Nav;
