import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import { Card } from 'antd';
import './styles/cardStyle.less';

import Page from './Page.jsx';

// import测试图片
import img1 from '../public/assets/sp1.jpg';
import img2 from '../public/assets/sp2.jpg';
import defaultImg from '../public/assets/default.jpg';


const { Meta } = Card;

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

// const sampleRecipe = {
//   title: "Test3",
//   author: "aa",
//   img: img2,
//   ingredients: "a",
//   steps: "111111",
//   tag: "aaaaaa",
// }

class RecipeFilter extends React.Component {
  render() {
    return (
      <div>This is a place holder for recipe filter</div>
    )
  }
}

// material UI的部分
// 单独写recipeCard, 不知道为什么无法正确插入grid list, 只能写在一起
// function RecipeTable({ recipes }) {
//   // const recipeCard = recipes.map(recipe => (
//   //   <RecipeCard recipe={recipe}/>
//   // ));

//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <GridList cellHeight={180} className={classes.gridList}>
//         <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
//         </GridListTile>
//         {recipes.map((recipe) => (
//           <GridListTile key={recipe.id}>
//             <img src={recipe.img} alt={recipe.title} />
//             <GridListTileBar
//               title={recipe.title}
//               subtitle={<span>by: {recipe.author}</span>}
//             />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
// }

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

function RecipeTable({recipes}) {
  const recipeCard = recipes.map(recipe => (
    <RecipeCard recipe={recipe}/>
  ));

  return (
    <div>
      {recipeCard}
    </div>
  );
}

class RecipeAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.recipeAdd;
    const recipe = {
      author: form.title.value,
      title: form.title.value,
      img: defaultImg,
      // img: img2,
      // ingredients: "a",
      // steps: "111111",
      // tag: "aaaaaa",
    }
    this.props.createRecipe(recipe);
    // keep the form ready for the next set of input;
    form.author.val = "";
    form.title.val = "";
  }

  render() {
    return (
      <div>
        <form name="recipeAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="title" placeholder="Title"/>
          <input type="text" name="author" placeholder="Author"/>
          <button>Add</button>
        </form>
      </div>
    )
  }
}

class RecipeList extends React.Component {
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

// const element = <RecipeList />;
const element = (
  <Router>
    <Page/>
  </Router>
);

ReactDOM.render(element, document.getElementById("contents"));