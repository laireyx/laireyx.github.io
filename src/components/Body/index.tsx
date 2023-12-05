import { bodyStyle } from './index.css';

export default function Body({ children }: React.PropsWithChildren) {
  return <div className={bodyStyle}>{children}</div>;
}
