import { Link, useMatch } from 'react-router-dom';

import { activeNavigationIconStyle, navigationIconStyle } from './index.css';

interface NavigationIconProps {
  src: string;
  alt: string;
  href: string;
}

export default function NavigationIcon({
  src,
  alt,
  href,
}: NavigationIconProps) {
  const route = useMatch(href);

  return (
    <Link to={href}>
      <img
        className={route ? activeNavigationIconStyle : navigationIconStyle}
        src={src}
        alt={alt}
      />
    </Link>
  );
}
