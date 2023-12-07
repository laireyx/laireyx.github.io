import { lazy } from 'react';

import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Main from '@pages/Main';

import App from './App';

/* eslint-disable react-refresh/only-export-components */
const Resume = lazy(() => import('@pages/Resume'));
const Projects = lazy(() => import('@pages/Projects'));
const Music = lazy(() => import('@pages/Music'));
/* eslint-enable react-refresh/only-export-components */

export const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route index element={<Main />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/music" element={<Music />} />
    </Route>,
  ),
);
