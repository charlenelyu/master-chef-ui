import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';

import RecipeList from './RecipeList.jsx';

const element = <RecipeList />;

ReactDOM.render(element, document.getElementById("contents"));