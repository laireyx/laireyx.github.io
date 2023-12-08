import { scrollablePageStyle, pageStyle } from './index.css';

type PageProps = React.PropsWithChildren & {
  scrollable?: boolean;
};

export default function Page({ scrollable = true, children }: PageProps) {
  return (
    <div className={scrollable ? scrollablePageStyle : pageStyle}>
      {children}
    </div>
  );
}
