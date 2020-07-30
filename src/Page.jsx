import React from 'react';
import { NavLink } from 'react-router-dom';

import Contents from './Contents.jsx';

// separate navBar with contents
function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      {'|'}
      <NavLink to="/recipes">Recipes</NavLink>
      {'|'}
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  );
}

export default function Page() {
  return (
    <div>
      <NavBar/>
      <Contents/>
    </div>
  )
}