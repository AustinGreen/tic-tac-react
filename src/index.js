import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
