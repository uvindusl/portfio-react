import "bootstrap/dist/css/bootstrap.min.css";
import "../css/NavBar.css";
import logo from "../assets/favicon.ico";

function NavBar() {
  return (
    <header className="rounded-header d-flex justify-content-between align-items-center">
      <nav className="navbar navbar-expand-lg navbar-light w-100">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="logo" href="">
            <img
              src={logo}
              alt="Logo"
              className="logo-icon"
              style={{ width: "20px", height: "20px" }}
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
