import React from 'react';
import { Route, Switch } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import Games from './games/Games';

const GamesRoutes: React.FC = () => {
  const { user } = useFirebase();
  if (!user) {
    return null;
  }
  return (
    <Switch>
      <Route path="/games">
        <Games />
      </Route>
    </Switch>
  );
};

export default GamesRoutes;
