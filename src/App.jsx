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
          <h3 className="section-title">Programing Languages</h3>
          <div className="row justify-content-center">
            <ProgramingL
              image={{
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
                lan: "Java",
              }}
            />
            <ProgramingL
              image={{
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
                lan: "C#",
              }}
            />
            <ProgramingL
              image={{
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
                lan: "C",
              }}
            />
            <ProgramingL
              image={{
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                lan: "JavaScript",
              }}
            />
            <ProgramingL
              image={{
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                lan: "Html",
              }}
            />
            <ProgramingL
              image={{
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                lan: "CSS",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
