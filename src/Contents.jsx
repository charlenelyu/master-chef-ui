import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RecipeList from './RecipeList.jsx';
import Profile from './Profile.jsx';

const NotFound = () => <h1>Page Not Found</h1>;

export default function Contents() {
  return (
    <Switch>
      <Route exact path="/" component={RecipeList} />
      <Route path="/profile" component={Profile} />
      <Route component={NotFound} />
    </Switch> 
  );
}