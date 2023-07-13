import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/mohammad-tarique-raza-13827b207"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="#" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocial;
