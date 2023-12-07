import Paragraph from '@components/Paragraph';
import Section from '@components/Section';
import Title from '@components/Title';
import Vertical from '@components/Vertical';

export default function Resume() {
  return (
    <Vertical>
      <Title>Resume</Title>
      <Section>
        <Title size="h3">Summary</Title>
        <Paragraph>
          2018.03 - 2024.02: Hanyang Univ. Dept. of CSE
          <br />
          2022.06 - 2022.08: KIST Intern
          <br />
          2023.12 - : NAVER
        </Paragraph>
      </Section>
      <Section>
        <Title size="h3">Skills</Title>
        <Paragraph>
          Web FrontEnd: React.js
          <br />
          Web BackEnd: Nest.js Fastify
          <br />
          Application: Electron RN Kotlin(Android)
        </Paragraph>
      </Section>
    </Vertical>
  );
}
