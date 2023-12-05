import { scrollableVerticalStyle, verticalStyle } from './index.css';

type VerticalProps = React.PropsWithChildren & {
  scrollable?: boolean;
};

export default function Vertical({
  scrollable = true,
  children,
}: VerticalProps) {
  return (
    <div className={scrollable ? scrollableVerticalStyle : verticalStyle}>
      {children}
    </div>
  );
}
