import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RecipeList from './RecipeList.jsx';
import Profile from './Profile.jsx';
import RecipeDetail from './RecipeDetail.jsx';

const NotFound = () => <h1>Page Not Found</h1>;

export default function Contents() {
  return (
    <Switch>
      <Route exact path="/" component={RecipeList} />
      <Route path="/recipe" component={RecipeList} />
      <Route path="/profile" component={Profile} />
      <Route path="/recipe/:id" component={RecipeDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}
