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
`

export const AboutContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 480px) {
    display: block;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 1rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #0099ff;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

export const Subtitle = styled.h2`
  font-size: 2rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`

export const Subtitlepage = styled.h3`
  font-size: 2rem;
  color: #0099ff;
  width: -webkit-fill-available;

   @media (max-width: 480px) {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    
  }
`

export const Marked = styled.span`
  color: #0099ff;
  text-decoration: underline;
`

export const Paragrafo = styled.p`
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 1.2rem;
    
  }
`




