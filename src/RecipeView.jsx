import React from 'react';

export default function RecipeView({ match }) {
  const { id } = match.params;
  return (
    <h2>{`This is a placeholder for editing issue ${id}`}</h2>
  );
}