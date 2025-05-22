"use client";
import About from "@/components/about";
import Introduction from "@/components/introduction";
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
        <About
          subtitlepage="Sobre mim"
          paragrafo1="Me chamo Hércules, sou estudante de Ciências da Computação no Instituto Federal de Sergipe - IFS. Sou natural de Sergipe e tenho 21 anos. Estou me especializando na área do desenvolvimento web com o foco mais voltado para a área de design e experiência do usuário."
          paragrafo2="
          Atualmente trabalho na empresa “Zeus Sistemas de Gestão”, na qual exerso a função de Analista de Suporte e também auxiliando para a melhoria do sistema principalmente na sua interface."
          paragrafo3="
          Um sergipano apaixonado por natureza, animais e tecnologia. Quando não estou olhando para as telas, estou apreciando a natureza!!"
        />
      </section>
    </div>
  );
}
