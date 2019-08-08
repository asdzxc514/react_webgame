## createRef

```js
// 기존에 쓰던 방식
import React, { Component } from 'react';

inputRef;
onInputRef = (c) => { this.inputRef = c; };

<input type="text" ref={this.onInputRef} />


// createRef
import React, { Component, createRef } from 'react';

inputRef = createRef();

<input type="text" ref={this.inputRef} />
```
