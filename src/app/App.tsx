import { MainPage } from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from 'pages/layouts/AppLayout';

import './styles/index.scss';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout className="app" />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
};
