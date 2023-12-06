import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Main from '@pages/Main';
import Music from '@pages/Music';
import Projects from '@pages/Projects';

import App from './App';


export const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route index element={<Main />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/music" element={<Music />} />
    </Route>,
  ),
);
