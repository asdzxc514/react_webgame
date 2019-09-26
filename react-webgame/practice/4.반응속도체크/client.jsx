import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';  // { hot } 은 구조분해 문법이다.

import ResponsCheck from './ResponsCheck_hooks';

const Hot = hot(ResponsCheck);

ReactDom.render(<Hot />, document.querySelector('#root')); 