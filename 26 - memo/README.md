># Memo

- Pure component is for class based component and memo is for functional component

>## MemoComp.js

```js
import React from 'react'

function MemoComp({ name }) {
  console.log('Rendering MemoComponent')
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)
```
>### ParentComp.js
```js
import React, { Component, Pure } from 'react'
import MemoComp from './MemoComp'

class ParentComp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: 'Parth'
		}
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'Parth'
			})
		}, 2000)
	}

	render() {
		console.log('*********Parent Comp render************')
		return (
			<div>
				<MemoComp name={this.state.name} />
			</div>
		)
	}
}

export default ParentComp
```

- React.memo introduce in `version 16.6`

>## Output

- Parent Component render
- Memo Component render
- after 2s only parent component re-render