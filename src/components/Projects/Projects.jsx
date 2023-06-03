import { useState } from 'react';

import Aniline from '../../assets/Aniline.png';
import BulgarianDrivers from '../../assets/BulgarianDrivers.png';
import MovieDB from '../../assets/MovieDB.png';
import PersonalPortfolio from '../../assets/PersonalPortfolio.png';
import classes from './Projects.module.css';
import ProjectDetails from './ProjectDetails';

const Projects = () => {
  const [showDetails, setShowDetails] = useState('firstImage');

  const onHoverHandler = (event) => {
    setShowDetails(event.target.id);
  };

  return (
    <section className={classes.projects} id="projects">
      <h2 className={classes.title}>Projects</h2>
      <div className={classes.images}>
        <img
          src={Aniline}
          alt="Aniline home page"
          id="firstImage"
          onMouseEnter={onHoverHandler}
        />
        <img
          src={BulgarianDrivers}
          alt="BulgarianDrivers home page"
          id="secondImage"
          onMouseEnter={onHoverHandler}
        />
        <img
          src={PersonalPortfolio}
          alt="This website"
          id="thirdImage"
          onMouseEnter={onHoverHandler}
        />
        <img
          src={MovieDB}
          alt="MovieDB"
          id="fourthImage"
          onMouseEnter={onHoverHandler}
        />
      </div>
      <div className={classes['info-wrapper']}>
        {showDetails === 'firstImage' && <ProjectDetails
          description="This web app is designed to track crypto prices, you can get a detailed look in the chart. You can track your portfolio`s P&L, and there is also a crypto converter."
          repoLink="https://github.com/VlahOff/Aniline2"
          liveLink="https://aniline.vercel.app/"
        />}
        {showDetails === 'secondImage' && <ProjectDetails
          description="This is a web app to write reviews for drivers based on their license plate number. The app provides a simple interface where users can enter the license plate number of the driver they want to review and then submit their review. Users can write a review, describing their experience with the driver, and provide a title for their review."
          repoLink="https://github.com/VlahOff/BulgarianDrivers"
          liveLink="https://bulgarian-drivers.vercel.app/"
        />}
        {showDetails === 'thirdImage' && <ProjectDetails
          repoLink="https://github.com/VlahOff/PersonalPortfolio"
        />}
        {showDetails === 'fourthImage' && <ProjectDetails
          description="This is a simple website for searching information about movies. Users could enter the name of a movie they are interested in and the website would display relevant information such as the plot summary, cast and crew, release date, and ratings from various sources."
          repoLink="https://github.com/VlahOff/MovieDB"
          liveLink="https://movie-db-omega-red.vercel.app/"
        />}
      </div>
    </section>
  );
};

export default Projects;