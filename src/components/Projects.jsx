import { useState } from 'react';

import Aniline from '../assets/Aniline.png';
import BulgarianDrivers from '../assets/BulgarianDrivers.png';
import MovieDB from '../assets/MovieDB.png';
import PersonalPortfolio from '../assets/PersonalPortfolio.png';
import classes from './Projects.module.css';

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
          src={BulgarianDrivers}
          alt="BulgarianDrivers home page"
          id="firstImage"
          onMouseEnter={onHoverHandler}
        />
        <img
          src={Aniline}
          alt="Aniline home page"
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
        {showDetails === 'firstImage' &&
          <div className={classes['info-card']}>
            <p>This web app is designed to allow users to write reviews for drivers based on their license plate number. The app provides a simple interface where users can enter the license plate number of the driver they want to review and then submit their review. Users can write a review, describing their experience with the driver, and provide a title for their review.</p>
            <p>The app is intended to help people share information about good and bad drivers in their area. The app allows users to browse through existing reviews and search for drivers by their license plate number.</p>
            <p>Overall, the web app provides a simple and easy-to-use platform for sharing and accessing information about drivers based on their license plate number, allowing users to share their experiences and help others stay safe on the road.</p>
            <div className={classes['link-wrapper']}>
              <a href="https://github.com/VlahOff/BulgarianDrivers" target="_blank" className={classes.link}>View repository</a>
              <a href="https://bulgarian-drivers.vercel.app/" target="_blank" className={classes.link}>Live</a>
            </div>
          </div>
        }
        {showDetails === 'secondImage' &&
          <div className={classes['info-card']}>
            <p>Welcome to Aniline, the ultimate platform for crypto enthusiasts and investors. Our website is designed to provide you with real-time information and updates on the latest cryptocurrency prices. With our comprehensive tracking system, you can easily monitor the prices of your favorite cryptocurrencies and stay ahead of the market trends.</p>
            <p>In addition to tracking prices, our platform also allows you to manage your portfolio and keep a close eye on its performance. You can add all your crypto holdings and track the value of your portfolio in real-time. Our user-friendly interface makes it easy to view your gains and losses, and analyze your investment strategies.</p>
            <p>Whether you're a seasoned investor or just getting started in the world of cryptocurrencies, our website has everything you need to make informed decisions. Stay ahead of the game and join our community today!</p>
            <div className={classes['link-wrapper']}>
              <a href="https://github.com/VlahOff/Aniline" target="_blank" className={classes.link}>View repository</a>
              <a href="https://aniline.vercel.app/home" target="_blank" className={classes.link}>Live</a>
            </div>
          </div>
        }
        {showDetails === 'thirdImage' &&
          <div className={classes['info-card']}>
            <div className={classes['link-wrapper']}>
              <a href="https://github.com/VlahOff/PersonalPortfolio" target="_blank" className={classes.link}>View repository</a>
            </div>
          </div>
        }
        {showDetails === 'fourthImage' &&
          <div className={classes['info-card']}>
            <p>This is a small and simple website for searching information about movies it has a clean and easy-to-use interface, with a search bar prominently displayed on top. Users could enter the name of a movie they are interested in and the website would display relevant information such as the plot summary, cast and crew, release date, and ratings from various sources.</p>
            <div className={classes['link-wrapper']}>
              <a href="https://github.com/VlahOff/MovieDB" target="_blank" className={classes.link}>View repository</a>
              <a href="https://movie-db-omega-red.vercel.app/" target="_blank" className={classes.link}>Live</a>
            </div>
          </div>
        }
      </div>
    </section>
  );
};

export default Projects;