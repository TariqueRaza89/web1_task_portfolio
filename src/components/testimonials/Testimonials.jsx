import "./testimonials.css";
import Me from "../../assets/me.png";
import C1 from "../../assets/c1.png";
import C2 from "../../assets/c2.png";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: Me,
      link: "",
      name: "Danish Raza",
      role: "Web Developer. JavaScript | PHP | React | Redux. Improving open-source projects, one commit at a time.",
      test: "As a developer and a problem solver, I think Tarique is a great collaborative partner to have. I met Tarique in some basic javascript & react projects and since then he has drastically progressed in his understanding of the development process. He always has a professional environment and has good audio and video quality which makes it easier to communicate with him.",
    },
    {
      id: 2,
      image: C1,
      link: "",
      name: "Ashutosh Maurya",
      role: "Data Analytics developer",
      test: "It was a pleasure collaborating with Tarique on different projects. One of the things that I think is special about him is that he never settles, even after completing the projects he finds other resources and strengthens his knowledge. Collaborating with him is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
    {
      id: 3,
      image: C2,
      link: "",
      name: "akbar (Aku) Khan",
      role: "Full Stack Developer| Ruby on Rails | PostgreSQL | JavaScript | React | Redux | Html&Css | Python.",
      test: "I worked with Tarique in the same team and his communication skills are very strong. His programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he's a good team worker, but also because he has very good skills and I know he has much more potential to be shown.",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map(({ id, name, test, image }) => {
          return (
            <SwiperSlide className="testimonial" key={id}>
              <div className="client__avatar">
                <img src={image} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{test}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
