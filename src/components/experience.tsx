import { ExperienceCompany, ExperienceContainer, ExperienceDate, ExperienceDescription, ExperienceItem, ExperienceTitle } from "@/styles/experience";
import { Marked, Subtitlepage } from "@/styles/page.style";

export default function Experience() {


    return (
        <>
            <Subtitlepage>Experiência</Subtitlepage>

            <ExperienceContainer>
                <ExperienceItem>
                    <ExperienceTitle>Análista de Suporte Interno 1</ExperienceTitle>
                    <ExperienceCompany>Zeus Sistemas de Gestão</ExperienceCompany>
                    <ExperienceDate>Mai 2024 - Atualmente</ExperienceDate>
                    <ExperienceDescription>
                        Atuo como analista de suporte interno, auxiliando na melhoria do sistema e na experiência do usuário. Trabalho com consultas <Marked>PostgreSQL</Marked>
                    </ExperienceDescription>
                </ExperienceItem>

                <ExperienceItem>
                    <ExperienceTitle>Desenvolvedor Front-end Voluntário</ExperienceTitle>
                    <ExperienceCompany>Sou Junior</ExperienceCompany>
                    <ExperienceDate>Jun 2023 - Ago 2023</ExperienceDate>
                    <ExperienceDescription>
                        Participei como desenvolvedor front-end voluntário, contribuindo para projetos de código aberto e aprimorando minhas habilidades em desenvolvimento web com as tecnologias <Marked>JavaScript, TypeScript, Tailwind CSS, Styled-Components, ReactJS, Yup</Marked>, entre outras techs.
                    </ExperienceDescription>
                </ExperienceItem>
            </ExperienceContainer>
        </>
    )
}