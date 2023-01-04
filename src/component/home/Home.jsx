import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import "./home.css";
import homeimg from "./home.png";
function Home() {
  const [loopNum, setloopnun] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const torotate = ["Front-End Developer", "MERN-STACK Developer"];
  const [text, setText] = useState("");
  const [delta, setdelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % torotate.length;
    let fulltext = torotate[i];
    let updateText = isDeleting
      ? fulltext.substring(0, text.length - 1)
      : fulltext.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setdelta((pervdelta) => pervdelta / 2);
    }

    if (!isDeleting && updateText === fulltext) {
      setIsDeleting(true);
      setdelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setloopnun(loopNum + 1);
      setdelta(1000);
    }
  };

  return (
    <section id="home">
      <div className="header">
        <Navbar />
      </div>
      <div className="home-container">
        <div className="intro">
          <span className="tagline">Welcome to My Portfolio</span>
          <span>
            Hello I'M <span className="color">Rishabh</span>
            <br />
            <span className="wrap color">{text}</span>
          </span>

          <p>
            I'm looking forward for an opportunity where I can apply, develop
            and strengthen my skill
            <br />
            <br />
          </p>
        </div>
        <div className="img">
          <img src={homeimg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Home;
