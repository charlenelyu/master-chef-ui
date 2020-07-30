import React from 'react';

import RecipeFilter from './RecipeFilter.jsx'; 
import RecipeTable from './RecipeTable.jsx'; 
import RecipeAdd from './RecipeAdd.jsx';
// import graphQLFetch from './graphQLFetch.js';

// import测试图片
import img1 from '../public/assets/sp1.jpg';
import img2 from '../public/assets/sp2.jpg';
import defaultImg from '../public/assets/default.jpg';


// material ui 的css配置
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 600,
//     height: 450,
//   },
// }));

// 测试菜谱
const testRecipe = [
  {
    id: 1,
    title: "Test1",
    author: "li",
    img: img1,
    created: new Date('2020-07-29'),
    ingredients: "a",
    steps: "111111",
    tag: "aaaaaa",
  },
  {
    id: 2,
    title: "Test2",
    author: "ti",
    img: img2,
    created: new Date('2020-07-30'),
    ingredients: "a",
    steps: "111111",
    tag: "aaaaaa",
  }
];

export default class RecipeList extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
    this.createRecipe = this.createRecipe.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({recipes : testRecipe});
    }, 500)
  }

  createRecipe(recipe) {
    recipe.id = this.state.recipes.length + 1;
    recipe.created = new Date();
    recipe.img = defaultImg;
    const newRecipes = this.state.recipes.slice();
    newRecipes.push(recipe);
    this.setState({ recipes: newRecipes })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Master Chef</h1>
        <RecipeFilter />
        <hr />
        <RecipeTable recipes={this.state.recipes}/>
        <hr/>
        <RecipeAdd createRecipe={this.createRecipe}/>
      </React.Fragment>
    );
  }
}
