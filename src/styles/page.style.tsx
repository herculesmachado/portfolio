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
  justify-content: space-between;
  margin-bottom: 10rem;

  @media (max-width: 480px) {
    display: block;
  }

  @media (min-width: 767px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
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
  color: #0099ff;
  
  @media (max-width: 480px) {
    margin-bottom: 2rem;
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

export const Button = styled.button`
    background-color: #0099ff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    margin: 1rem 1rem 0 0;

    &:hover {
        background-color: #007acc;
    }
`
