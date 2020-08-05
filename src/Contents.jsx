import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RecipeList from './RecipeList.jsx';
import Profile from './Profile.jsx';
<<<<<<< HEAD
import RecipeView from './RecipeView.jsx';
import Home from './Home.jsx';
=======
import RecipeDetail from './RecipeDetail.jsx';
>>>>>>> master

const NotFound = () => <h1>Page Not Found</h1>;

export default function Contents() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/recipe" component={RecipeList} />
      <Route path="/profile" component={Profile} />
<<<<<<< HEAD
      <Route path="/view/:id" component={RecipeView} />
=======
      <Route path="/recipe/:id" component={RecipeDetail} />
>>>>>>> master
      <Route component={NotFound} />
    </Switch>
  );
}
