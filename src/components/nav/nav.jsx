import "./nav.css";
import Img1 from "./logo.png";
import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Img4 from "./pass 3.jpeg";
import Img5 from "./pass 7.jpeg";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [message, setMessage] = useState();

  const [isOpen, setIsOpen] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setMail("");
    setMessage("");

    emailjs
      .sendForm(
        "service_2z79h6r",
        "template_4gbwg0a",
        form.current,
        "kWG-FqtA7uTl12qe2"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message.text");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="">
      <div className="parent_div">
        <div className="Navbar">
          <span className="">
            <img src={Img1} alt="pix" className="logo" />
          </span>
          <div className={`nav-items ${isOpen && "open"} header`}>
            <a href="/home">Home</a>
            <a href="#about" a>
              About
            </a>
            <a href="#team" a>
              Team
            </a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
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
                  passionate team of creatives who dedicated to bringing joy and
                  excitement to people's lives through our work. Our Company was
                  founded in 2007. We started out small, but our passion and
                  hard work has helped us grow into the company we are today.
                  We're proud to say that we've been able to bring smiles to the
                  faces of people all over the world with our unique brand of
                  entertainment.
                </p>
                <p className="about_section_p2">
                  Timeline Entertainment is a leading provider of innovative and
                  engaging entertainment experiences. We are commited to pushing
                  the boundaries of whats possible in entertainment and our work
                  has been recognized with numerous awards and accolades.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="team">
          <div className="team_overalldiv">
            <div className="team_overallh1">Our Amazing Team</div>

            <div className="team_bodydiv">
              <div className="team_body1">
                <div>
                  <img src={Img4} alt="pix" className="team_body1_img" />
                </div>
                <div className="team_body1_names">
                  <p className="team_body1_firstname">MR MICHEAL</p>
                  <p className="team_body1_work">Worldwide Partner</p>
                </div>
                <div className="team_body1_icons">
                  <p className="team_body1_facebook">
                    <FaFacebookF />
                  </p>
                  <p className="team_body1_twitter">
                    <FaTwitter />
                  </p>
                  <p className="team_body1_instagram">
                    <BsInstagram />
                  </p>
                </div>
              </div>
              <div className="team_body2">
                <div>
                  <img src={Img5} alt="pix" className="team_body2_img" />
                </div>
                <div className="team_body2_names">
                  <p className="team_body2_firstname">CHINONSO</p>
                  <p className="team_body2_work">Worldwide Partner</p>
                </div>
                <div className="team_body2_icons">
                  <p className="team_body2_facebook">
                    <Link>
                      <FaFacebookF />
                    </Link>
                  </p>
                  <p className="team_body2_twitter">
                    <FaTwitter />
                  </p>
                  <p className="team_body2_instagram">
                    <BsInstagram />
                  </p>
                </div>
              </div>
              <div className="team_body3">
                <div>
                  <img src={Img4} alt="pix" className="team_body3_img" />
                </div>
                <div className="team_body3_names">
                  <p className="team_body3_firstname">YHEMOLEE</p>
                  <p className="team_body3_work">Worldwide Partner</p>
                </div>
                <div className="team_body3_icons">
                  <p className="team_body3_facebook">
                    <FaFacebookF />
                  </p>
                  <p className="team_body3_twitter">
                    <FaTwitter />
                  </p>
                  <p className="team_body3_instagram">
                    <BsInstagram />
                  </p>
                </div>
              </div>
              <div className="team_body4">
                <div>
                  <img src={Img5} alt="pix" className="team_body4_img" />
                </div>
                <div className="team_body4_names">
                  <p className="team_body4_firstname">MR CAPTAIN</p>
                  <p className="team_body4_work">Worldwide Partner</p>
                </div>
                <div className="team_body4_icons">
                  <p className="team_body4_facebook">
                    <FaFacebookF />
                  </p>
                  <p className="team_body3_twitter">
                    <FaTwitter />
                  </p>
                  <p className="team_body3_instagram">
                    <BsInstagram />
                  </p>
                </div>
              </div>
              <div className="team_body5">
                <div>
                  <img src={Img4} alt="pix" className="team_body5_img" />
                </div>
                <div className="team_body5_names">
                  <p className="team_body5_firstname">MR DAVIDO</p>
                  <p className="team_body5_work">Worldwide Partner</p>
                </div>
                <div className="team_body5_icons">
                  <p className="team_body5_facebook">
                    <FaFacebookF />
                  </p>
                  <p className="team_body5_twitter">
                    <FaTwitter />
                  </p>
                  <p className="team_body5_instagram">
                    <BsInstagram />
                  </p>
                </div>
              </div>
              <div className="team_body6">
                <div>
                  <img src={Img5} alt="pix" className="team_body6_img" />
                </div>
                <div className="team_body6_names">
                  <p className="team_body6_firstname">MR AJAYI</p>
                  <p className="team_body6_work">Worldwide Partner</p>
                </div>
                <div className="team_body6_icons">
                  <p className="team_body6_facebook">
                    <FaFacebookF />
                  </p>
                  <p className="team_body6_twitter">
                    <FaTwitter />
                  </p>
                  <p className="team_body6_instagram">
                    <BsInstagram />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="servives_h2">
            <h2>Our Services</h2>
          </div>

          <div className="timeline">
            <div className="container left-container">
              <div className="text-box">
                <h2>Audio/Visual Production</h2>
                <p className="text_box_p">
                  {" "}
                  We deliver state of the arts audio-visual production from
                  short films, music videos, skits and television shows, e.t.c.
                  <p>
                    {" "}
                    Our work has been featured in a variety of media, including
                    television, and online platforms.We are passionate
                  </p>
                </p>
                <span className="left_container_arrow"></span>
              </div>
            </div>
            <div className="container right-container">
              <div className="text-box">
                <h2>Record Labels</h2>
                <p className="text_box_p">
                  Timeline Records is a leading independent record label,
                  dedicated to promoting innovative and diverse music. The label
                  is also committed to nurturing talent and supporting its
                  artist, providing them with the resources and opportunities
                  they need to succeed.
                </p>
                <span className="right_container_arrow"></span>
              </div>
            </div>
            <div className="container left-container">
              <div className="text-box">
                <h2>Off-Stage Commentry</h2>
                <p className="text_box_p">
                  We are sure of giving you the most granded voice over
                  solutions for your business. We are able to provide commentary
                  on wide range of topics. We provide a unique perspective on
                  the events we cover. Our goal is to provide the most
                  up-to-date and accurate information.
                </p>
                <span className="left_container_arrow"></span>
              </div>
            </div>
            <div className="container right-container">
              <div className="text-box">
                <h2>Media IT Solutions</h2>
                <p className="text_box_p">
                  We offer a full-service media solutions provider, specializing
                  in the creation and delievery of engaging and immersive
                  content for a variety of platforms. We work with businessess
                  of all sizes We also design and develop high end websites for
                  clients and comfort demands.
                </p>
                <span className="right_container_arrow"></span>
              </div>
            </div>
          </div>
        </section>

        <div id="contact">
          <div className="contact_img">
            <div className="contact_div2">
              <div className="first_part">
                <div className="contact_logo1_div1">
                  <div className="contact_logo1_div">
                    <IoCallOutline className="contact_logo1" />
                    <p className="contact_logo1_p">CALL US</p>
                  </div>
                  <p className="logo1_p">1 (234) 567-891, 1 (234) 987-654</p>
                </div>
                <div className="contact_logo2_div2">
                  <div className="contact_logo2_div">
                    <MdLocationOn className="contact_logo2" />
                    <p className="contact_logo2_p">LOCATION</p>
                  </div>
                  <p className="logo2_p">
                    3, Ogunshina Street, Anthony, Lagos state.
                  </p>
                  <p className="logo2_p">090 23-20-32-54</p>
                </div>
                <div className="contact_logo3_div3">
                  <div className="contact_logo2_div">
                    <LuClock3 className="contact_logo3" />
                    <p className="contact_logo3_p">BUSINESS HOURS</p>
                  </div>
                  <p className="logo3_p">
                    Mon-Fri …… 9 am-5 pm, Sat, Sun ....…
                  </p>
                  <p className="logo3_p">Closed</p>
                </div>
              </div>

              <div className="second_part">
                <div className="">
                  <div className="contact_h2">
                    <p className="contact_h5">CONTACT US</p>
                  </div>
                  <div className="general_input_div">
                    <form ref={form} onSubmit={sendEmail}>
                      <input
                        type="text"
                        className="contact_name"
                        name="to_name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <br />
                      <input
                        type="email"
                        className="contact_email"
                        name="from_name"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                      />
                      <br />
                      <textarea
                        className="contact_textarea"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />

                      <br />
                      <input
                        type="submit"
                        className="contact_button"
                        value="SUBMIT"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <a href="#" className="footer__logo">
            TIMELINE
          </a>

          <ul className="permalinks">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Team</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div className="footer__socials">
            <a href="https://www.snapchat.com/add/svhick20" target="_blank">
              <FaSnapchat />
            </a>
            <a href="https://www.instagram.com/simplevhick_" target="_blank">
              <BsInstagram />
            </a>
            <a href="https://twitter.com/simplevhick" target="_blank">
              <FaTwitter />
            </a>
          </div>

          <div className="footer__copyright">
            <small>&copy; TIMELINE. All rights reserved.</small>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Nav;
