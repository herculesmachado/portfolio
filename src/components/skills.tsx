
import {
  ListSkills,
  SkillsContainer,
  SkillsList,
  ListUlSkills,
  SkillsListTitle,
  ListLiSkills,
  SkillsContainerWrap,
} from "@/styles/skills";

export default function Skills() {
  return (
    <SkillsContainer>
      <SkillsListTitle>Skills</SkillsListTitle>
      <SkillsContainerWrap>
      <ListSkills>
        <SkillsList>Linguagens</SkillsList>
        <ListUlSkills>
          <ListLiSkills>JavaScript (ES6)</ListLiSkills>
          <ListLiSkills>TypeScript</ListLiSkills>
          <ListLiSkills>HTML / CSS</ListLiSkills>
          <ListLiSkills>Java</ListLiSkills>
          <ListLiSkills>SQL</ListLiSkills>
        </ListUlSkills>
      </ListSkills>
      <ListSkills>
        <SkillsList>Framework</SkillsList>
        <ListUlSkills>
          <ListLiSkills>React</ListLiSkills>
          <ListLiSkills>Spring Boot</ListLiSkills>
          <ListLiSkills>Style-Components</ListLiSkills>
        </ListUlSkills>
      </ListSkills>
      <ListSkills>
        <SkillsList>Ferramentas</SkillsList>
        <ListUlSkills>
          <ListLiSkills>Git & GitHub</ListLiSkills>
          <ListLiSkills>VS-Code</ListLiSkills>
          <ListLiSkills>intellij</ListLiSkills>
          <ListLiSkills>PostgreSQL</ListLiSkills>
        </ListUlSkills>
      </ListSkills>
    </SkillsContainerWrap>
    </SkillsContainer>
  );
}
