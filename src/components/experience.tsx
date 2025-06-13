import { ExperienceCompany, ExperienceContainer, ExperienceDate, ExperienceDescription, ExperienceItem, ExperienceTitle } from "@/styles/experience";
import { Button, Subtitlepage } from "@/styles/page.style";

export default function Experience() {
    const url = `https://api.github.com/users/herculesmachado/repos`

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.name);
        })


    return (
        <>
            <Subtitlepage>Experiência</Subtitlepage>

            <ExperienceContainer>
                <ExperienceItem>
                    <ExperienceTitle>Desenvolvedor Front-End</ExperienceTitle>
                    <ExperienceCompany>Empresa XYZ</ExperienceCompany>
                    <ExperienceDate>Jan 2020 - Presente</ExperienceDate>
                    <ExperienceDescription>
                        Desenvolvimento de aplicações web utilizando React, Next.js e TypeScript.
                    </ExperienceDescription>
                    <Button>GitHub</Button>
                    <Button>Site</Button>
                </ExperienceItem>

                <ExperienceItem>
                    <ExperienceTitle>Desenvolvedor Full-Stack</ExperienceTitle>
                    <ExperienceCompany>Empresa ABC</ExperienceCompany>
                    <ExperienceDate>Jan 2018 - Dez 2019</ExperienceDate>
                    <ExperienceDescription>
                        Desenvolvimento de aplicações web com foco em performance e usabilidade.
                    </ExperienceDescription>

                    <Button>GitHub</Button>
                    <Button>Site</Button>
                </ExperienceItem>
            </ExperienceContainer>
        </>
    )
}