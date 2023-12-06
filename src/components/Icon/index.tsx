import { iconStyle } from './index.css';

interface IconProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
}

export default function Icon({ src, alt, size = 'medium' }: IconProps) {
  return <img className={iconStyle[size]} src={src} alt={alt} />;
}
