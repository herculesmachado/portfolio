import { IntroductionContainer, Marked, Subtitle, Title } from "../styles/page.style";
import * as React from "react";

interface IntroductionProps {
    title: string;
    subtitleFront?: string;
    subtitleBack?: string;
}

export default function Introduction(props: IntroductionProps) {
    return (
        <IntroductionContainer>
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitleFront}<Marked>Hercules Machado</Marked>{props.subtitleBack}</Subtitle>
        </IntroductionContainer>
    )
}

