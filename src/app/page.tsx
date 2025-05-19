'use client'
import About from "@/components/about";
import Introduction from "@/components/introduction";
import { PageContainer } from "@/styles/page.style";


export default function Home() {
  return (
    <PageContainer>
      <Introduction
        title="Olá!!"
        subtitleFront="Sou "
        subtitleBack=", um Desenvolvedor de Software Web com o foco em Front-End voltado para o design, focado na construção de belas interfaces e experiências..."
      />

      <section>
        <About 

        />
      </section>
    </PageContainer>
    
    
  );
}
