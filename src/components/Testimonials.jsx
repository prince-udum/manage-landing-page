import React, { useEffect, useState } from "react";
import { testimonials } from "../data";

const Testimonials = () => {
  const [currentPerson, setCurrentPerson] = useState(0);
  const [people, setPeople] = useState(testimonials);

  function nextSlide() {
    setCurrentPerson((oldPerson) => {
      return (oldPerson + 1) % people.length;
    });
  }

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  return (
    <section className="testimonials">
      <h2>What they’ve said</h2>
      <div className="testimonials-slider">
        {people.map((person, personIndex) => {
          const { id, author, image, text } = person;
          return (
            <article
              key={id}
              className="testimonial"
              style={{
                transform: `translateX(${
                  100 * (personIndex - currentPerson)
                }%)`,
                opacity: currentPerson == personIndex ? 1 : 0,
                visibility: currentPerson == personIndex ? "visible" : "hidden",
              }}
            >
              <img src={image} alt={author} />
              <h4>{author}</h4>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
      <div className="testimonials-btns">
        {testimonials.map((btn, btnIndex) => {
          return (
            <button
              key={btnIndex}
              className={
                currentPerson == btnIndex
                  ? "testimonials-btn active"
                  : "testimonials-btn"
              }
            ></button>
          );
        })}
      </div>
      <button className="btn">Get started</button>
    </section>
  );
};

export default Testimonials;
