import { useEffect } from 'react';
import { scrollablePageStyle, pageStyle } from './index.css';

type PageProps = React.PropsWithChildren & {
  scrollable?: boolean;
  title: string;
};

export default function Page({
  scrollable = true,
  title,
  children,
}: PageProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className={scrollable ? scrollablePageStyle : pageStyle}>
      {children}
    </div>
  );
}
