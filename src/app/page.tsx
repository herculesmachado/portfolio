"use client";
import About from "@/components/about";
import Experience from "@/components/experience";
import Introduction from "@/components/introduction";
import Skills from "@/components/skills";
import { useEffect, useState } from "react";
// import { PageContainer } from "@/styles/page.style";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  function handleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  return (
    <div>
      <nav>
        <div className="nav-container">
          <button
            className={`dark-mode${darkMode ? " active" : ""}`}
            onClick={handleDarkMode}
            aria-label="Alternar modo escuro"
          >
            <span className="icon sun">☀️</span>
            <span className="icon moon">🌙</span>
            <span className="toggle-thumb"></span>
          </button>
        </div>
      </nav>

      <Introduction
        title="Olá!!"
        subtitleFront="Sou "
        subtitleBack=", um Desenvolvedor de Software Web com o foco em Front-End voltado para o design, focado na construção de belas interfaces e experiências..."
      />

      <section>
        <About/>

        <Skills/>

        <Experience />
      </section>
    </div>
  );
}
