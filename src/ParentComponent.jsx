// ParentComponent.js
import React from "react";
import Carousel from "./carousel";

const ParentComponent = () => {
  const images = [
    "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-01-1024x1024.png",
    "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-02.jpg",
    "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-03-1024x1024.png",
    "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-04-1024x1024.png",
    "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-05.jpg",
    "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-06.jpg",
    "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-07-1024x1024.png",
    "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-08.jpg",
    "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-09-1024x1024.png",
    "https://www.un-page.org/static/10ad9657c909c9a1478a3bae0f3329e8/49949/E-WEB-Goal-10.png",
    "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Inverted-Icons_WEB-11-1024x1024.png",
    "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-12-1024x1024.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxXMSm3Xpt3hV-gDwVWxmGWYROtmoHepQcDBIDWfQNfw&s",
    "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-14.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7Ktwyh_aFih2o22MNkEeMJddcOh4bboPmyY8sOjtlg&s",
  ];

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
};

export default ParentComponent;

