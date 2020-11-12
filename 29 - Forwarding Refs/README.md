># Forwarding Refs


>## FRInput.js

```js
import React from 'react'

const FRInput = React.forwardRef((props, ref) => {
	return (
		<div>
      <input type="text" ref={ref} />
		</div>
	)
})

export default FRInput

```

>## FRParentInput.js

```js

import React, { Component } from 'react'
import FRInput from './FRInput'

export class FRParentInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  clickHandler = () => {
    this.inputRef.current.focus()
  }

	render() {
		return (
			<div>
        <FRInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
			</div>
		)
	}
}

export default FRParentInput

```

>## Remember 4 Steps
1. Create `Ref in Parent` Component
2. Attach `Ref to the Child` Component using Ref attribute
3. `Forward this Ref` to input component in child using `React.forwardRef()`
4. Receive `Ref parameter as 2nd Parameter` in child component along with props.
   
 