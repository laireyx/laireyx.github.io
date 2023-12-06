import { titleStyle } from './index.css';

type TitleProps = React.PropsWithChildren & {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export default function Title({ size = 'h1', children }: TitleProps) {
  return <h1 className={titleStyle[size]}>{children}</h1>;
}
