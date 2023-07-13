import CTA from "./CTA";
import "./header.css";
import HeaderSocial from "./HeaderSocial";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Mohammad Tarique Raza</h1>

        <Typewriter
          options={{
            strings: ["Web Developer", "Web Designer"],
            autoStart: true,
            loop: true,
          }}
        />
        {/* <h5 className="text-light">Full-stack Developer</h5> */}
        <CTA />
        <HeaderSocial />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
