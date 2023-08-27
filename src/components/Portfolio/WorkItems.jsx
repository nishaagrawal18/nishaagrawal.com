import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <p className="description">{item.content1}</p>
      <p className="description">{item.content2}</p>
      <div className="techStacks">

      </div>
      <div className="links_div">
      <a href={item.deploy_link} className="work__button" target="_blank">
        Demo
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>

      <a href={item.github_link} className="work__button" target="_blank">
        Github
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
      </div>
    </div>
  );
};

export default WorkItems;
