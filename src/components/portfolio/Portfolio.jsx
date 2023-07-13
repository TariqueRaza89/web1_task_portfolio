import "./portfolio.css";
import P1 from "../../assets/p-1.png";
import P2 from "../../assets/p-2.png";
import P3 from "../../assets/p-3.png";
import P4 from "../../assets/p-4.png";
import P5 from "../../assets/p-5.png";
const data = [
  {
    id: 1,
    image: P1,
    title: "Bankist",
    github: "https://github.com/",
    demo: "",
  },
  {
    id: 2,
    image: P2,
    title: "Bankist Advanced",
    github: "https://github.com/",
    demo: "https://bankist-web-clone.netlify.app/",
  },
  {
    id: 3,
    image: P3,
    title: "Mi Notes",
    github: "https://github.com/",
    demo: "https://zayan657.github.io/noteApp/",
  },
  {
    id: 4,
    image: P4,
    title: "Youtube Clone",
    github: "https://github.com/",
    demo: "",
  },
  {
    id: 5,
    image: P5,
    title: "The Ultimate React Portfolio",
    github: "https://github.com/",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
