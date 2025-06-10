function Work({ work }) {
  return (
    <div className="col-md-5">
      <div className="card">
        <img src={work.img} alt={work.name} className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title">{work.name}</h4>
          <p className="card-text">
            {work.desc}
            <h5>
              <b>{work.team}</b>
            </h5>
            <a href={work.team1} class="team">
              {work.team1name}
            </a>
            <br></br>
            <a href={work.team2} class="team">
              {work.team2name}
            </a>
            <br></br>
            <a href={work.team3} class="team">
              {work.team3name}
            </a>
            <br></br>
            <a href={work.team4} class="team">
              {work.team4name}
            </a>
            <br></br>
          </p>
          <a href={work.link} className="btn btn-primary">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
