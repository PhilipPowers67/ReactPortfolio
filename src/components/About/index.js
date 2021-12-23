import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">
        About Me
        </h1>
        <p className="text-center">
          My name is Philip Powers. I am a Full Stack Web Developer with a certificate
          <br/>
          from UCONN School of Engineering. In my free time I enjoy working with
          <br/>
          vinyl and design work.
        </p>
        <img src={coverImage} style={{}} />
    </section>
  );
}

export default About;
