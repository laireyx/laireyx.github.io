import { avatarImgStyle, avatarStyle } from './index.css';

interface AvatarProps {
  imgUrl: string;
}

export default function Avatar({ imgUrl }: AvatarProps) {
  return (
    <div className={avatarStyle}>
      <img className={avatarImgStyle} src={imgUrl} />
    </div>
  );
}
