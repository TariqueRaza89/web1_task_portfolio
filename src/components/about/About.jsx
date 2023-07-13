import "./about.css";
import Me from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>6+ Completed Projects</small>
            </article>
          </div>
          <p>
            Solution-driven web developer adept at contributing to highly
            collaborative work environment and finding solutions. Proven
            experience developing consumer-focused websites using HTML, CSS,
            JavaScript ,React ,Redux,Bootstrap ,Tailwind CSS PHP and Mysql etc.
            Good knowledge of the best practices for web design, user
            experience, and speed.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
