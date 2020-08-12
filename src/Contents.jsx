import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RecipeList from './RecipeList.jsx';
import Profile from './Profile.jsx';
import RecipeView from './RecipeView.jsx';
import RecipeEdit from './RecipeEdit.jsx';
import Home from './Home.jsx';

const NotFound = () => <h1>Page Not Found</h1>;

export default function Contents() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/recipe" component={RecipeList} />
      <Route path="/profile/:name/:email" component={Profile} />
      <Route path="/view/:id" component={RecipeView} />
      <Route path="/edit/:id" component={RecipeEdit} />
      <Route component={NotFound} />
    </Switch>
  );
}
