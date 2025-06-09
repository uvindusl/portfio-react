import { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect/dist/core";
import "../css/Hero.css";

function Hero() {
  const typewriterRef1 = useRef(null);
  const typewriterRef2 = useRef(null);
  const [showSankalpa, setShowSankalpa] = useState(false);

  useEffect(() => {
    if (typewriterRef1.current) {
      new Typewriter(typewriterRef1.current, {
        strings: "Hey, I'm Uvindu",
        autoStart: true,
        loop: false,
        delay: 40,
      })
        .callFunction(() => {
          setShowSankalpa(true); // Show "Sankalpa" after first typing completes
        })
        .callFunction(() => {
          if (typewriterRef2.current) {
            new Typewriter(typewriterRef2.current, {
              strings:
                "I am a 2nd-year Software Engineering student at NiBM with a strong background in Java, C#, C, and web development. I enjoy creating innovative and user-friendly applications. I have completed several projects and I am excited to apply my skills in a dynamic and challenging environment.",
              autoStart: true,
              loop: false,
              delay: 40,
            });
          }
        });
    }
  }, []);

  return (
    <div className="container">
      <h1>
        <span ref={typewriterRef1} className="highlight"></span>
      </h1>

      {showSankalpa && <h2 className="mt-3 mainsubtext secname">Sankalpa</h2>}

      <div className="paradiv">
        <p className="mt-4 para">
          <span ref={typewriterRef2}></span>
        </p>
      </div>
    </div>
  );
}

export default Hero;
