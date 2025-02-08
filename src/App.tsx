import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import Body from '@components/Body';
import Navigation from '@components/Navigation';
import SuspenseFallback from '@components/SuspenseFallback';

import { appInnerStyle, appStyle } from './App.css';

export default function App() {
  return (
    <div className={appStyle}>
      <div className={appInnerStyle}>
        <Navigation />
        <Body>
          <Suspense fallback={<SuspenseFallback />}>
            <Outlet />
          </Suspense>
        </Body>
      </div>
    </div>
  );
}
