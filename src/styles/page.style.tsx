import styled from "styled-components";

export const IntroductionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
  height: 80vh;

  @media (max-width: 480px) {
    height: 70vh;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 10rem;

  @media (max-width: 480px) {
    display: block;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #0099ff;
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.5;
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Subtitlepage = styled.h3`
  width: -webkit-fill-available;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #0099ff;
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Marked = styled.span`
  color: #0099ff;
  /* text-decoration: underline; */
  font-weight: 700;
`;

export const Paragrafo = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
