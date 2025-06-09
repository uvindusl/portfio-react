import "../src/css/App.css";
import Education from "./components/Education";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProgramingL from "./components/ProgramingL";
import "bootstrap/dist/css/bootstrap.min.css";
import Work from "./components/Work";
import Footer from "./components/Footer";

import train from "../src/assets/train.png";

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
              className="languageicon"
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
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <icon-icon name="book-outline"></icon-icon>
          </div>
          <h3 className="h3">Eduction</h3>
        </div>
        <Education
          edu={{
            title: "Higher National Diploma in Software Engineering - NIBM",
            date: "2024",
            para: "",
          }}
        />
      </section>
      <section id="works" className="works-section text-center">
        <div className="container">
          <h3 className="section-title">My Projects</h3>
          <div className="row justify-content-center">
            <Work
              work={{
                img: "../src/assets/train.png",
                name: "hi",
                desc: "da",
                link: "deda",
              }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
