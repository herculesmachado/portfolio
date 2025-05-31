import {
  AboutContainer,
  Marked,
  Paragrafo,
  Subtitlepage,
  TextContainer,
} from "@/styles/page.style";

export default function About() {
  return (
    <AboutContainer>
      <Subtitlepage>Sobre mim</Subtitlepage>
      <TextContainer>
        <Paragrafo>
          Me chamo Hércules, sou estudante de <Marked>Ciências da Computação</Marked>no<Marked> Instituto Federal de Sergipe - IFS</Marked>. Sou natural de <Marked>Sergipe</Marked> e tenho 21
          anos. Estou me especializando na área do <Marked>desenvolvimento web</Marked> com o
          foco mais voltado para a área de design e <Marked>experiência do usuário</Marked>.
        </Paragrafo>
        <Paragrafo>
          Atualmente trabalho na empresa <Marked>“Zeus Sistemas de Gestão”</Marked>, na qual
          exerso a função de <Marked>Analista de Suporte</Marked> e também auxiliando para a
          melhoria do sistema principalmente na sua interface.
        </Paragrafo>
        <Paragrafo>
          Um sergipano apaixonado por natureza, animais e tecnologia. Quando não
          estou olhando para as telas, estou apreciando a natureza!!
        </Paragrafo>
      </TextContainer>
    </AboutContainer>
  );
}
