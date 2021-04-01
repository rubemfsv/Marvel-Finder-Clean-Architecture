import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { makeLogin } from '@/main/factories/pages/';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={makeLogin} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
