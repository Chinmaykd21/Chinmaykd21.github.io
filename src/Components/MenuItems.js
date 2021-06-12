import React from "react";

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
                  <a href={item.link}>{item.icon}</a>
                </li>
              </ul>
            </div>
            <h5 className="hover-items">
              <a href={item.link}>{item.title}</a>
            </h5>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
