import { avatarImgStyle, avatarStyle } from './index.css';

interface AvatarProps {
  src: string;
}

export default function Avatar({ src }: AvatarProps) {
  return (
    <div className={avatarStyle}>
      <img className={avatarImgStyle} src={src} />
    </div>
  );
}
