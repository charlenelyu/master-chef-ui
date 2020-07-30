import React from 'react';

export default class RecipeAdd extends React.Component {
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
