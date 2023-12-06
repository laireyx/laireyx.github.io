import { avatarImgStyle, avatarStyle } from './index.css';

interface AvatarProps {
  src: string;
  alt: string;
}

export default function Avatar({ src, alt }: AvatarProps) {
  return (
    <div className={avatarStyle}>
      <img className={avatarImgStyle} src={src} alt={alt} />
    </div>
  );
}
