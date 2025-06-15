import styled from "styled-components";


export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 10rem;
  margin-top: 2rem;
`;

export const ExperienceItem = styled.div`
  border-bottom: #0099ff 3px solid;
  border-left: #0099ff 3px solid;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ExperienceTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-decoration: underline #0099ff 1.5px;
`;

export const ExperienceCompany = styled.p`
  font-size: 1.2rem;
  color: #0099ff;
  margin-bottom: 0.5rem;
`;

export const ExperienceDate = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;  

export const ExperienceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

