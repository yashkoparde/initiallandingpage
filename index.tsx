import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css"; // <-- animations here

const App: React.FC = () => {

  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 120;

      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // run once on mount

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="container">
      <h1 className="title reveal">Pretty Pretty Baby ✨</h1>

      <p className="card reveal">
        This content fades and slides in as you scroll. Smooth, elegant,
        deliciously animated. Enjoy the reveal effect!
      </p>

      <div className="card reveal">
        Another block of content making its beautiful entrance.
      </div>

      <div style={{ height: "50vh" }}></div>

      <div className="card reveal">
        You reached the bottom. Thanks for scrolling 💖
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
