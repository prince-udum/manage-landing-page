import React from "react";
import { aboutFeatures } from "../data";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-text">
          <h2>What’s different about Manage?</h2>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <div className="about-features">
          {aboutFeatures.map((feature) => {
            const { id, no, title, text } = feature;
            return (
              <article key={id}>
                <header className="title">
                  <span className="no">{no}</span> {title}
                </header>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
