import React from 'react';

function NavBar() {
  return (
    <nav>
      <a href="/">Home</a>
      {'|'}
      <a href="/">Recipe List</a>
      {'|'}
      <a href="/">Search</a>
      {'|'}
      <a href="/">Profile</a>
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