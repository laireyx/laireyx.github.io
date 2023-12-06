import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import Body from '@components/Body';
import BottomNavigation from '@components/BottomNavigation';
import SuspenseFallback from '@components/SuspenseFallback';

import { appStyle } from './App.css';

export default function App() {
  return (
    <div className={appStyle}>
      <Body>
        <Suspense fallback={<SuspenseFallback />}>
          <Outlet />
        </Suspense>
      </Body>
      <BottomNavigation />
    </div>
  );
}
