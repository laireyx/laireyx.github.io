import {
  resumeHistoryContentStyle,
  resumeHistoryPeriodStyle,
  resumeHistoryTitleStyle,
} from './index.css';

interface ResumeHistoryProps {
  title: string;
  period: string;
}

export default function ResumeHistory({
  title,
  period,
  children,
}: React.PropsWithChildren<ResumeHistoryProps>) {
  return (
    <div>
      <span className={resumeHistoryPeriodStyle}>{period}</span>
      <br />
      <span className={resumeHistoryTitleStyle}>{title}</span>
      <br />
      <p className={resumeHistoryContentStyle}>{children}</p>
    </div>
  );
}
