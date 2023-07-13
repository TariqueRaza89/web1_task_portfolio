import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import "./footer.css";
import Typewriter from "typewriter-effect";

const Footer = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
    <footer>
      <a href="#home" className="footer__logo">
        <Typewriter
          options={{
            strings: ["Mohammad Tarique Raza"],
            autoStart: true,
            loop: true,
          }}
        />
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skill">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/mohammad-tarique-raza-13827b207"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <FaAngellist />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Portfolio {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
