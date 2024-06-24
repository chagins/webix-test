import { MainPage } from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from 'pages/layouts/AppLayout';
import { useEffect } from 'react';
import { useSheetStore } from 'entities/sheet';

import './styles/index.scss';

export const App = () => {
  const updateTemplatePath = useSheetStore.use.updateTemplatePath();

  useEffect(() => {
    updateTemplatePath('/templatesList.json');
  }, [updateTemplatePath]);

  return (
    <Routes>
      <Route path="/" element={<AppLayout className="app" />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
};
