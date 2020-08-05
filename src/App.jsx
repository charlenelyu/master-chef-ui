import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Page from './Page.jsx';

const element = (
  <BrowserRouter>
    <Page />
  </BrowserRouter>
);

ReactDOM.render(element, document.getElementById('root'));
