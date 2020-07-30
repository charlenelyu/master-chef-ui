import React from 'react';

import { Card } from 'antd';
import './styles/cardStyle.less';

const { Meta } = Card;

function RecipeCard ({recipe}) {
  return (
    <div className="card-list" key={recipe.id}>
      <Card
        hoverable
        style={{ width: 260, marginLeft: 16 }}
        size="small"
        cover={<img alt={recipe.title} src={recipe.img} />}
      >
        <Meta title={recipe.title} description={<span>by: {recipe.author}</span>}/>
      </Card>
    </div>
  );
}

export default function RecipeTable({recipes}) {
  const recipeCard = recipes.map(recipe => (
    <RecipeCard recipe={recipe}/>
  ));

  return (
    <div>
      {recipeCard}
    </div>
  );
}
