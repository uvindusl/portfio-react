import "../css/Education.css";

function Education({ edu }) {
  return (
    <div className="timeline-list">
      <div className="timeline-item">
        <div class="timeline-icon"></div>
        <div className="timeline-content">
          <h4 className="timeline-item-title">{edu.title}</h4>
          <span className="timeline-date">{edu.date}</span>
          <p className="timeline-text">{edu.para}</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
