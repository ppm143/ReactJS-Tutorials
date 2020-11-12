># Refs with Class Components

>## inputRef.js

```js
import React, { Component } from 'react'

class Input extends Component {

  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  focusInput() {
    this.inputRef.current.focus()
  }


  render() {
    return (
      <input type="text" ref={this.inputRef}></input>
    )
  }
}

export default Input

```

>## FocusInput.js
- This is parent component of InputRef.js
```js
import React, { Component } from 'react'
import Input from './Input';

class FocusInput extends Component {
  constructor(props) {
    super(props)
    this.componentRef = React.createRef()
  }

  clickHandler = () => {
    console.log(this.componentRef.current)
    this.componentRef.current.focusInput()
  }

  render() {
    return (
      <div>
        <Input ref={this.componentRef}></Input>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput

```
>## Remember 3 Steps
1. Create Ref using `React.CreateRef()` method
2. `Attach` ref to the component
3. Add `click Handler` to button and call clickHandler using button

- Ref only attach with class based component not in functional component