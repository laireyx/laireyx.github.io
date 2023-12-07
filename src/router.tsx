import { lazy } from 'react';

import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Main from '@pages/Main';

import App from './App';

const Projects = lazy(() => import('@pages/Projects'));
const Music = lazy(() => import('@pages/Music'));

export const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route index element={<Main />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/music" element={<Music />} />
    </Route>,
  ),
);
