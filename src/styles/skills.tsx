import styled from "styled-components";

export const SkillsContainer = styled.div`
  justify-content: space-around;
  display: flex;
  gap: 1rem;
  margin-bottom: 10rem;

  @media (max-width: 480px) {
    display: block;
  }
`;

export const SkillsList = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-decoration: underline #0099ff;

  @media (max-width: 480px) {
    font-size: 1.5rem;
    display: block;
  }
`;

export const SkillsListTitle = styled.h3`
  /* width: -webkit-fill-available; */
  font-size: 1.5rem;
  color: #0099ff;

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 2rem;
    display: block;
  }
`;

export const ListSkills = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListUlSkills = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  list-style: none;
`;

export const ListLiSkills = styled.li`
  font-weight: 300;
`;

export const SkillsContainerWrap = styled.div`
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    justify-content: space-between;
    gap: 3rem;
    
  }
`;
