import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Lotto from './lotto_class';

const Hot = hot(Lotto);

ReactDom.render(<Hot />, document.querySelector('#root'));