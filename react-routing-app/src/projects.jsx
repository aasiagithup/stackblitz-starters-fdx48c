import { Link, Outlet } from 'react-router-dom';

const Projects = () => {
  return (
    <>
      <h1>My Projects</h1>

      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/project1">View Project</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Projects;
