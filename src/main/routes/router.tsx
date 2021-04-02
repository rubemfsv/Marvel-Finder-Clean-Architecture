import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { makeDashboard, makeHeroDetails } from '@/main/factories/pages/';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={makeDashboard} />
        <Route exact path="/details/:id" component={makeDashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
