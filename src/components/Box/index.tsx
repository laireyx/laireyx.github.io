import { boxStyle } from './index.css';

export default function Box({ children }: React.PropsWithChildren) {
  return <div className={boxStyle}>{children}</div>;
}
