import { Link } from 'react-router-dom';

import Icon from '@components/Icon';

import { bottomNavigationStyle } from './index.css';
import githubIcon from '@assets/github-mark-white.svg';
import homeIcon from '@assets/home.svg';
import profileIcon from '@assets/profile.svg';
import spotifyIcon from '@assets/spotify.png';

export default function BottomNavigation() {
  return (
    <div className={bottomNavigationStyle}>
      <Link to="/">
        <Icon src={homeIcon} alt="profile" size="small" />
      </Link>
      <Link to="/resume">
        <Icon src={profileIcon} alt="music" size="small" />
      </Link>
      <Link to="/projects">
        <Icon src={githubIcon} alt="projects" size="small" />
      </Link>
      <Link to="/music">
        <Icon src={spotifyIcon} alt="music" size="small" />
      </Link>
    </div>
  );
}
