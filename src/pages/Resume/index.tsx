import Divider from '@components/Divider';
import Page from '@components/Page';
import Paragraph from '@components/Paragraph';
import ResumeHistory from '@components/ResumeHistory';
import Section from '@components/Section';
import Title from '@components/Title';

export default function Resume() {
  return (
    <Page title="@laireyx/resume">
      <Title>Resume</Title>

      <Section>
        <Title size="h3">Summary</Title>
        <Section>
          <ResumeHistory
            title="Hanyang Univ. Dept. of CSE"
            period="2018.03 - 2024.02"
          >
            BA/Dept. of CSE(3.6 / 4.5)
          </ResumeHistory>
          <Divider />
          <ResumeHistory title="KIST Intern" period="2022.06 - 2022.08">
            MOF Database regularization project(mofdb)
            <br />
            Chemical raw data processing and building database with Nodejs,
            Postgresql
          </ResumeHistory>
          <Divider />
          <ResumeHistory title="NAVER" period="2023.12 - ">
            NAVER Clip
            <br />
            Shortform video player
          </ResumeHistory>
        </Section>
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
    </Page>
  );
}
