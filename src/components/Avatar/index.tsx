import { avatarImgStyle, avatarStyle } from './index.css';

interface AvatarProps {
  src: string;
  name: string;
}

export default function Avatar({ src, name }: AvatarProps) {
  return (
    <div className={avatarStyle}>
      <img className={avatarImgStyle} src={src} alt={name} />
      {/* <span>{name}</span> */}
    </div>
  );
}
