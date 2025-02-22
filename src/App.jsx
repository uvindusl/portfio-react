import "../src/css/App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProgramingL from "./components/ProgramingL";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <section className="languages-section text-center">
        <div className="container">
          <h3 className="section-title">Programin Lanugaes</h3>
          <div className="row justify-content-center">
            <ProgramingL
              image={{
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
                lan: "Java",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
