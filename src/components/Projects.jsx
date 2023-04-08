import classes from './Projects.module.css';
import laptop from '../assets/laptop.png';

const Projects = () => {
  return (
    <section className={classes.projects}>
      <h2 className={classes.title}>Projects</h2>

      <img src="https://raw.githubusercontent.com/VlahOff/BulgarianDrivers/main/screenshots/Screenshot%202023-04-08%20175341.png" alt="BulgarianDrivers home page" />
      <img src="https://raw.githubusercontent.com/VlahOff/Aniline/main/screenshots/Screenshot_20230211_120901.png" alt="Aniline home page" />


      {/* <div className={classes['project-card']}>
        <div className={classes['img-wrapper']}>
          <img src={laptop} alt="laptop placeholder" />
          <img src="https://raw.githubusercontent.com/VlahOff/BulgarianDrivers/main/screenshots/Screenshot%202023-04-08%20175341.png" alt="BulgarianDrivers home page" />
        </div>
        <h3>Bulgarian Drivers</h3>
        <p>This web app is designed to allow users to write reviews for drivers based on their license plate number. The app provides a simple interface where users can enter the license plate number of the driver they want to review and then submit their review. Users can write a review, describing their experience with the driver, and provide a title for their review.</p>
        <p>The app is intended to help people share information about good and bad drivers in their area. The app allows users to browse through existing reviews and search for drivers by their license plate number.</p>
        <p>Overall, the web app provides a simple and easy-to-use platform for sharing and accessing information about drivers based on their license plate number, allowing users to share their experiences and help others stay safe on the road.</p>
        <button>View repository</button>
        <button>Live</button>
      </div> */}
    </section>
  );
};

export default Projects;