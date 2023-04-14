import classes from './ProjectDetails.module.css';

const ProjectDetails = ({ description, repoLink, liveLink }) => {
  return (
    <div className={classes['info-card']}>
      {description && <p>{description}</p>}
      <div className={classes['link-wrapper']}>
        {repoLink && <a href={repoLink} target="_blank" className={classes.link}>View repository</a>}
        {liveLink && <a href={liveLink} target="_blank" className={classes.link}>Live</a>}
      </div>
    </div>
  );
};

export default ProjectDetails;