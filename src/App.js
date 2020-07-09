import React from 'react';

import { Route, HashRouter } from 'react-router-dom';

import Home from './containers/Home';

const App = () => {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
    </HashRouter>
  );
};

export default App;
