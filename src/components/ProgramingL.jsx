import "../css/ProgramingL.css";

function ProgramingL({ image }) {
  return (
    <div className="col-md-3">
      <div className="language-box">
        <img
          src={image.url}
          alt={image.lan}
          className="labguageicon"
          style={{
            width: "80px",
            height: "80px",
            transition: "transform 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}

export default ProgramingL;
