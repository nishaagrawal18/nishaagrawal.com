import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 Years Working</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">12 + Projects</span>
      </div>

      <div className="about__box">
        <i class="bx bx-code-alt about__icon"></i>

        <h3 className="about__title">Dsa Problems</h3>
        <span className="about__subtitle">800+ Questions</span>
      </div>
    </div>
  );
};

export default Info;
