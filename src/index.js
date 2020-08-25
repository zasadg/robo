import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {Robots} from './Robot';
import App from './Containers/App';

ReactDOM.render(
  <App /> ,document.getElementById('root')
  )

serviceWorker.register();
