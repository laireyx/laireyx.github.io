import NavigationIcon from './NavigationIcon';

import { bottomNavigationStyle } from './index.css';
import githubIcon from '@assets/github-mark-white.svg';
import homeIcon from '@assets/home.svg';
import profileIcon from '@assets/profile.svg';
import spotifyIcon from '@assets/spotify.png';

export default function BottomNavigation() {
  return (
    <div className={bottomNavigationStyle}>
      <NavigationIcon href="/" src={homeIcon} alt="profile" />
      <NavigationIcon href="/resume" src={profileIcon} alt="profile" />
      <NavigationIcon href="/projects" src={githubIcon} alt="profile" />
      <NavigationIcon href="/music" src={spotifyIcon} alt="profile" />
    </div>
  );
}
