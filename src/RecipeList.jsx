import React from 'react';

import RecipeFilter from './RecipeFilter.jsx'; 
import RecipeTable from './RecipeTable.jsx'; 
// import graphQLFetch from './graphQLFetch.js';
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
    
    const response = await fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ query })
    });

    const result = await response.json();
    this.setState({ recipes: result.data.recipeList });
  }

  // 和后端api相接，先检查user再create?
  async createRecipe(recipe) {
    const query = `mutation createRecipe($recipe: RecipeInputs!){
      createRecipe(recipe: $recipe) {
        id
      }
    }`;

    const response = await fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ query, variables: { recipe } })
    });

    this.loadData();
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
