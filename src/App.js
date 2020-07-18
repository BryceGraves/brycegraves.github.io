import React from 'react';

import { Route, Switch } from 'react-router-dom';

import ArtProject from './containers/ArtProject';
import GlobalHeader from './components/GlobalHeader';
import Home from './containers/Home';
import PersonalProjects from './containers/PersonalProjects';

const App = () => {
  return (
    <>
      <GlobalHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/art-project" component={ArtProject} />
        <Route exact path="/personal-projects" component={PersonalProjects} />
      </Switch>
    </>
  );
};

export default App;
