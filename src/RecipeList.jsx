import React from 'react';

import RecipeFilter from './RecipeFilter.jsx'; 
import RecipeTable from './RecipeTable.jsx'; 
// import graphQLFetch from './graphQLFetch.js';
import RecipeAddModal from './RecipeAddModal.jsx';

// test images
// import img1 from '../public/assets/sp1.jpg';
// import img2 from '../public/assets/sp2.jpg';
// import defaultImg from '../public/assets/default.jpg';

// test recipes
// const testRecipe = [
//   {
//     id: 1,
//     title: "Test1",
//     author: "li",
//     img: img1,
//     created: new Date('2020/07/29'),
//     ingredients: "a",
//     steps: ["111111", "222222"],
//     tag: "aaaaaa",
//   },
//   {
//     id: 2,
//     title: "Test2",
//     author: "ti",
//     img: img2,
//     created: new Date('2020/07/30'),
//     ingredients: "a",
//     steps: ["111111", "222222"],
//     tag: "aaaaaa",
//   }
// ];

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

  createRecipe(recipe) {
    recipe.id = this.state.recipes.length + 1;
    recipe.created = new Date().toLocaleDateString();
    recipe.img = defaultImg;
    // const newRecipes = this.state.recipes.slice();
    // newRecipes.push(recipe);
    this.setState((state) => ({ recipes: [...state.recipes, recipe] }));
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
