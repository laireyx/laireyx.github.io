import { titleStyle } from './index.css';

export default function Title({ children }: React.PropsWithChildren) {
  return <h1 className={titleStyle}>{children}</h1>;
}
