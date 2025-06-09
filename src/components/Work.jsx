function Work({ work }) {
  return (
    <div>
      <div class="col-md-5">
        <div class="card">
          <img src={work.img} class="card-img-top" alt={work.name} />
          <div class="card-body">
            <h5 class="card-title">{work.name}</h5>
            <p class="card-text">{work.desc}</p>
            <a href={work.link} class="btn btn-primary">
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
