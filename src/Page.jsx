import React from 'react';

import Contents from './Contents.jsx';

// separate navBar with contents
function NavBar() {
  return (
    <nav>
      <a href="/">Home</a>
      {'|'}
      <a href="/#recipes">Recipe List</a>
      {'|'}
      <a href="/#search">Search</a>
      {'|'}
      <a href="/#profile">Profile</a>
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