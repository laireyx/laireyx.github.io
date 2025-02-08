import NavigationIcon from './NavigationIcon';

import githubIcon from '@assets/github-mark-white.svg';
import homeIcon from '@assets/home.svg';
import profileIcon from '@assets/profile.svg';
import spotifyIcon from '@assets/spotify.png';
import { navigationStyle } from './index.css';

export default function Navigation() {
  return (
    <div className={navigationStyle}>
      <NavigationIcon href="/" src={homeIcon} alt="profile" />
      <NavigationIcon href="/resume" src={profileIcon} alt="profile" />
      <NavigationIcon href="/projects" src={githubIcon} alt="profile" />
      <NavigationIcon href="/music" src={spotifyIcon} alt="profile" />
    </div>
  );
}
