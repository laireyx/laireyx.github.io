import { titleStyle } from './index.css';

type TitleProps = React.PropsWithChildren & {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export default function Title({ size = 'h1', children }: TitleProps) {
  switch (size) {
    case 'h1':
      return <h1 className={titleStyle[size]}>{children}</h1>;
    case 'h2':
      return <h2 className={titleStyle[size]}>{children}</h2>;
    case 'h3':
      return <h3 className={titleStyle[size]}>{children}</h3>;
    case 'h4':
      return <h4 className={titleStyle[size]}>{children}</h4>;
    case 'h5':
      return <h5 className={titleStyle[size]}>{children}</h5>;
    default:
      return <h6 className={titleStyle[size]}>{children}</h6>;
  }
}
