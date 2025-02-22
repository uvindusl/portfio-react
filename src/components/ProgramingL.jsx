import "bootstrap/dist/css/bootstrap.min.css";

function ProgramingL({ image }) {
  return (
    <div className="col-md-3">
      <div className="language-box">
        <img src={image.url} alt={image.lan} className="labguage-icon" />
      </div>
    </div>
  );
}

export default ProgramingL;
