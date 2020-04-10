import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseLayout from './layout/BaseLayout';
import AuthRoutes from './pages/AuthRoutes';
import GamesRoutes from './pages/GamesRoutes';

function App() {
  return (
    <Router>
      <BaseLayout>
        <>
          <AuthRoutes />
          <GamesRoutes />
        </>
      </BaseLayout>
    </Router>
  );
}

export default App;
