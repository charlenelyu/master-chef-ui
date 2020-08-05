import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import Page from './Page.jsx';

const element = (
  <HashRouter>
    <Page/>
  </HashRouter>
);

ReactDOM.render(element, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}