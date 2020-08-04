import React from 'react';

import RecipeFilter from './RecipeFilter.jsx'; 
import RecipeTable from './RecipeTable.jsx'; 
import graphQLFetch from './graphQLFetch.js';
import RecipeAddModal from './RecipeAddModal.jsx';

export default class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
    this.createRecipe = this.createRecipe.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    // for home page, only need the author, img and title
    const query = `query {
      recipeList {
        author{name} img title
      }
    }`
    
    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ recipes: data.recipeList });
    }
  }

  async createRecipe(recipe) {
    const query = `mutation createRecipe($recipe: RecipeInputs!){
      createRecipe(recipe: $recipe) {
        id
      }
    }`;

    const data = await graphQLFetch(query, { recipe })
    if (data) {
      this.loadData();
    }
  }

  render() {
    return (
      <React.Fragment>
        <RecipeFilter />
        <hr />
        <RecipeTable recipes={this.state.recipes}/>
        <RecipeAddModal createRecipe={this.createRecipe}/>
      </React.Fragment>
    );
  }
}
