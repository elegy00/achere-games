import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BaseLayout from './layout/BaseLayout';
import Login from './pages/auth/Login';
import Games from './pages/games/Games';

function App() {
  return (
    <Router>
      <BaseLayout>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/games">
            <Games />
          </Route>
        </Switch>
      </BaseLayout>
    </Router>
  );
}

export default App;