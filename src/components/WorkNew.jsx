function WorkNew({ worknew }) {
  return (
    <div className="col-md-5">
      <div className="card">
        <img src={worknew.img} alt={worknew.name} className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title">{worknew.name}</h4>
          <p className="card-text">{worknew.desc}</p>
          <a href={worknew.link} className="btn btn-primary">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default WorkNew;
