import Img1 from "./logo.png";
import { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { LiaFileAudio } from "react-icons/lia";
import { FaSnapchat } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { PiVinylRecordFill } from "react-icons/pi";
import { SiMediamarkt } from "react-icons/si";
import { MdOutlineRecordVoiceOver } from "react-icons/md";

const AboutDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="Navbar">
        <span className="">
          <img src={Img1} alt="pix" className="logo" />
        </span>
        <div className={`nav-items ${isOpen && "open"} header`}>
          <a href="/">Home</a>
          <a href="/" a>
            About
          </a>
          <a href="/" a>
            Team
          </a>
          <a href="/">Services</a>
          <a href="/">Contact</a>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"} `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>

      <div>
        <div className="bodyp_h1_1">
          <h1>Who Are We ?</h1>
        </div>
        <div className="body_polo">
          <p className="body_polo_p">
            Timeline Entertainment is a leading provider of innovative and
            engaging entertainment experiences.
          </p>
          <p className="body_polo_p1">
            {" "}
            We are commited to pushing the boundaries of whats possible in
            entertainment and our work,{" "}
          </p>
          <p className="body_polo_p2">
            {" "}
            has been recognized with numerous awards and accolades.{" "}
          </p>
        </div>
      </div>

      <div className="Service_section">
        <div className="row">
          <h2 className="section-heading"> Our Services </h2>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <LiaFileAudio />
              </div>
              <h3>Audio/Visual Production</h3>
              <p>
                We deliver state of the arts audio-visual production from short
                films, music videos, skits and television shows, e.t.c. Our work
                has been featured in a variety of media, including television,
                and online platforms.We are passionate
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <PiVinylRecordFill />
              </div>
              <h3>Record Labels</h3>
              <p>
                Timeline Records is a leading independent record label,
                dedicated to promoting innovative and diverse music. The label
                is also committed to nurturing talent and supporting its artist,
                providing them with the resources and opportunities they need to
                succeed.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <MdOutlineRecordVoiceOver />
              </div>
              <h3>Off-Stage Commentry</h3>
              <p>
                We are sure of giving you the most granded voice over solutions
                for your business. We are able to provide commentary on wide
                range of topics. We provide a unique perspective on the events
                we cover. Our goal is to provide the most up-to-date and
                accurate information.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <SiMediamarkt />
              </div>
              <h3>Media IT solutions</h3>
              <p>
                We offer a full-service media solutions provider, specializing
                in the creation and delievery of engaging and immersive content
                for a variety of platforms. We work with businessess of all
                sizes We also design and develop high end websites for clients
                and comfort demands.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer_last">
        <a href="#" className="footer__logo_last">
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
          <a href="https://www.snapchat.com/add/svhick20">
            <FaSnapchat />
          </a>
          <a href="https://www.instagram.com/simplevhick_">
            <BsInstagram />
          </a>
          <a href="https://twitter.com/simplevhick">
            <FaTwitter />
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; TIMELINE. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
};

export default AboutDetails;
