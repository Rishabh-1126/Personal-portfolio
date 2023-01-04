import React, { useEffect } from "react";

import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./project.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="project">
      <div data-aos="fade-up" className="tag">
        <h1>Projects</h1>
        <p>
          Here are my Projects <br /> <span>& upcoming projects</span>
        </p>
      </div>
      <div data-aos="fade-left" className="container">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          // spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;
