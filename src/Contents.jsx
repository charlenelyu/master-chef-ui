import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import RecipeList from './RecipeList.jsx';
import Search from './Search.jsx';
import Profile from './Profile.jsx';

const NotFound = () => <h1>Page Not Found</h1>;

export default function Contents() {
  return (
    <Switch>
      <Redirect exact from="/" to="/recipes" />
      <Route path="/recipes" component={RecipeList} />
      <Route path="/search" component={Search} />
      <Route path="/profile" component={Profile} />
      <Route component={NotFound} />
    </Switch> 
  );
}