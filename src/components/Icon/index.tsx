import { iconStyle } from './index.css';

interface IconProps {
  src: string;
  size?: 'small' | 'medium' | 'large';
}

export default function Icon({ src, size = 'medium' }: IconProps) {
  return <img className={iconStyle[size]} src={src} />;
}
