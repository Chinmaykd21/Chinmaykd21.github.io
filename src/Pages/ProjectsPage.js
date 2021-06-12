import React from "react";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import Tittle from "../Components/Title";
import projects from "../Components/AllProjects";
import { useState } from "react";
import portfolios from "../Components/AllProjects";

const allCategories = [
  "All",
  ...new Set(portfolios.map((item) => item.category)),
];

function ProjectsPage() {
  const [categories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(projects);

  const filter = (category) => {
    if (category === "All") {
      setMenuItems(projects);
      return;
    }
    const filterData = portfolios.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filterData);
  };
  return (
    <div className="ProjectsPage">
      <div className="title">
        <Tittle tittle={"Projects"} span={"Projects"} />
      </div>
      <div className="projects-data">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
}

export default ProjectsPage;
