import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const frontend = [
  {
    id: 1,
    skill: "HTML",
  },
  {
    id: 2,
    skill: "CSS",
  },
  {
    id: 3,
    skill: "JavaScript",
  },
  {
    id: 4,
    skill: "Bootstrap",
  },
  {
    id: 5,
    skill: "Tailwind CSS",
  },
  {
    id: 6,
    skill: "React",
  },
  {
    id: 7,
    skill: "Redux",
  },
];

const backend = [
  {
    id: 1,
    skill: "PHP",
  },
  {
    id: 2,
    skill: "Mysql",
  },
  {
    id: 3,
    skill: "Git",
  },
  {
    id: 4,
    skill: "Github",
  },
];
const Skills = () => {
  return (
    <section id="skill">
      <h5>The Skills I have</h5>
      <h2>Skills</h2>
      <div className="container skill__container">
        <div className="skill__frontend">
          <h3>Frontend Development</h3>
          <div className="skill__content">
            {frontend.map(({ id, skill }) => {
              return (
                <article className="skill__details" key={id}>
                  <BsPatchCheckFill className="skill__icon" />
                  <h4>{skill}</h4>
                </article>
              );
            })}
          </div>
        </div>
        <div className="skill__backend">
          <div className="skill__frontend">
            <h3>Backend Development</h3>
            <div className="skill__content">
              {backend.map(({ id, skill }) => {
                return (
                  <article className="skill__details" key={id}>
                    <BsPatchCheckFill className="skill__icon" />
                    <h4>{skill}</h4>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
