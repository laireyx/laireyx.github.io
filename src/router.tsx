import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Main from '@pages/Main';

import App from './App';

export const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route index element={<Main />} />
    </Route>,
  ),
);
