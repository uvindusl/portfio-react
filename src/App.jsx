import "../src/css/App.css";
import Education from "./components/Education";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProgramingL from "./components/ProgramingL";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar
        navbar={{
          home: "#home",
          education: "#education",
          works: "#works",
          contact: "#footer",
        }}
      />
      <main className="hero-section text-center" id="home">
        <Hero />
      </main>

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
            <ProgramingL
              image={{
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                lan: "React",
              }}
            />
            <ProgramingL
              image={{
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                lan: "Python",
              }}
            />
            <ProgramingL
              image={{
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                lan: "nodejs",
              }}
            />
            <ProgramingL
              image={{
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                lan: "typescript",
              }}
            />
          </div>
        </div>
      </section>
      <section className="timeline" id="education">
        <div className="title-wrapper">
          <div className="icon-box">
            <icon-icon name="book-outline"></icon-icon>
          </div>
          <h3 className="h3">Eduction</h3>
        </div>
        <Education
          edu={{
            title:
              " BSc (Hons) Software Engineering, Computer Software Engineering - NIBM",
            date: "2023 - Present",
            para: "",
          }}
        />
        <Education
          edu={{
            title: "Certificate Course In Software Engineering - NIBM",
            date: "2023",
            para: "",
          }}
        />
        <Education
          edu={{
            title: "English Diploma - Aquinas College",
            date: "2023 - 2025",
            para: "",
          }}
        />
        <Education
          edu={{
            title: "GCE Ordinary Level in Sri Lanka",
            date: "2023",
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
                img: "https://github.com/uvindusl/myportfolio/blob/main/src/Ead2.jpeg?raw=true",
                name: "Microservice-based food ordering system with Java and React TS",
                desc: "",
                link: "https://drive.google.com/file/d/1SmPPMkrGZX4wec0aIydHvMSSid_nWI8N/view?usp=sharing",
              }}
            />
            <Work
              work={{
                img: "https://github.com/uvindusl/myportfolio/blob/main/src/Urbanfoods.jpeg?raw=true",
                name: "Urban Foods (React Vite, Java Spring-boot, Oracle PL/SQL, MongoDB)",
                desc: "",
                link: "https://drive.google.com/file/d/1rOXtyceJYTk4DVmk9FkHPxDZQmc5eV06/view?usp=sharing",
              }}
            />
            <Work
              work={{
                img: "https://github.com/uvindusl/myportfolio/blob/main/src/cat-care.png?raw=true",
                name: "Automated Cat Care Robot",
                desc: "",
                link: "https://github.com/mkdinindu/Robotics_HNDSE_Repo",
              }}
            />
            <Work
              work={{
                img: "https://github.com/uvindusl/myportfolio/blob/main/src/lms.png?raw=true",
                name: "Student Course Tracker",
                desc: "",
                link: "https://github.com/uvindusl/dmwcw",
              }}
            />
            <Work
              work={{
                img: "https://github.com/uvindusl/myportfolio/blob/main/src/train.png?raw=true",
                name: "Train Ticket Reservation System",
                desc: "Simple Train Ticket Reservation System created using Java",
                link: "https://github.com/uvindusl/Train_Ticket_Reservation_System",
              }}
            />
            <Work
              work={{
                img: "https://github.com/uvindusl/myportfolio/blob/main/src/todoapp.png?raw=true",
                name: "To Do Application",
                desc: "To Do Application created using C# using VIsual Studio 2022",
                link: "https://github.com/uvindusl/To-do-Application",
              }}
            />
            <Work
              work={{
                img: "https://github.com/uvindusl/myportfolio/blob/main/src/ECA.png?raw=true",
                name: "Intelligent Energy Optimization System",
                desc: "",
                link: "https://github.com/uvindusl/To-do-Application",
              }}
            />
          </div>
        </div>
      </section>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
