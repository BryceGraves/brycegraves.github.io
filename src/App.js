import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import GlobalHeader from './components/GlobalHeader';

const App = () => {
  return (
    <>
      <GlobalHeader />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default App;
