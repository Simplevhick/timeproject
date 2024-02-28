import "./nav.css";
import Img1 from "./logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="">
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

        <section id="about" className="about_section">
            <div>
              <div className="general_about">
                <div className="about_divtwo">
                  <h1 className="about_sectionH1">ABOUT US</h1>
                </div>

                <div className="about_section_div_three">
                  <p className="about_section_p1">
                    Hello, and welcome to TIMELINE ENTERTAINMENT! We,re a small,
                    passionate team of creatives who dedicated to bringing joy
                    and excitement to people's lives through our work. Our
                    Company was founded in 2007. We started out small, but our
                    passion and hard work has helped us grow into the company we
                    are today. We're proud to say that we've been able to bring
                    smiles to the faces of people all over the world with our
                    unique brand of entertainment.
                  </p>
                  <p className="about_section_p2">
                    Timeline Entertainment is a leading provider of innovative
                    and engaging entertainment experiences. We are commited to
                    pushing the boundaries of whats possible in entertainment
                    and our work has been recognized with numerous awards and
                    accolades.
                  </p>
                </div>
              </div>
            </div>
          </section>


          <p>Hello World</p>
          <p>My God is good to me, i love him the most on God</p>
      </div>
    </section>
  );
};

export default Nav;
