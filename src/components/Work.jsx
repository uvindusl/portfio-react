import "../css/Work.css";

function Work({ work }) {
  return (
    <div className="col-md-5">
      <div className="card">
        <img src={work.img} alt={work.name} className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title">{work.name}</h4>
          <p className="card-text">{work.desc}</p>
          <a href={work.link} className="btn btn-primary">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
