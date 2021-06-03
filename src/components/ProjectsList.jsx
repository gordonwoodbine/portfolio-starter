import { projects } from '../helpers/projectDetails';

const ProjectsList = () => {
  
  return (
    <div className="projects-list">
      {projects.map((project, i) => (
        <div className="project-container" key={project.title}>
          <h2 className="test">{project.title}</h2>
          <div className="project">
            <div className="project-tile">
              <img src={project.imgSrc} alt="" />
            </div>
            <div className="project-text">
              {project.qanda && project.qanda.map((each, i) => (
              <div className="q-and-a-block" key={i}>
                <p className="q">{each.q}</p>
                <p className="a">{each.a}</p>
              </div>
              ))}
              <div className="btn-group">
                <a 
                  className="btn" 
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >View Code</a>
                <a 
                  className="btn btn--outline"
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                >Visit Site</a>
              </div>
            </div>
          </div>
          {i < projects.length - 1 && <div className="divider"><i class="fas fa-square divider__icon"></i></div>}
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;