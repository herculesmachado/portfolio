import { AboutContainer, Paragrafo, Subtitlepage, TextContainer } from "@/styles/page.style";

interface IAbout {
    subtitlepage: string;
    paragrafo1: string;
    paragrafo2: string;
    paragrafo3: string;

}

export default function About(props: IAbout) {
    return (
        <AboutContainer>
            <Subtitlepage>{props.subtitlepage}</Subtitlepage>
            <TextContainer>
                <Paragrafo>{props.paragrafo1}</Paragrafo>
                <Paragrafo>{props.paragrafo2}</Paragrafo>
                <Paragrafo>{props.paragrafo3}</Paragrafo>

            </TextContainer>
        </AboutContainer>
    )
}