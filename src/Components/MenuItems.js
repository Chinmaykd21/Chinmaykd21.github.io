import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuItems({ menuItem }) {
  return (
    <div className="projects">
      {menuItem.map((item) => {
        return (
          <div className="project" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt="" />
              <ul className="hover-icons">
                <li>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="icon gh" />
                  </a>
                </li>
              </ul>
            </div>
            <h5 className="hover-items">
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            </h5>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
