># Pure Components

>### PureComp.js
```js
import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('Pure Comp render')
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp
```
>### RegComp.js

```js
import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log('Regular Comp render')
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default RegComp
```
>### ParentComp.js
```js
import React, { Component, Pure } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
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
				<RegComp name={this.state.name} />
				<PureComp name={this.state.name} /> 
			</div>
		)
	}
}

export default ParentComp
```
>### Output
- Parent Comp render
- Reg Comp render
- Pure Comp render
- but after every 2s only parent and reg render
- Parent Comp render
- Reg Comp render

>### If we change Parent component to Pure Component then Output

- Parent Comp render
- Reg Comp render
- Pure Comp render
- No render after every 2s because if parent not re-render then children also not render


>## Regular Component
- A regular component does not implement the shouldComponentUpdate method. it always returns true.


>## Pure Component
- We can create a component by extending PureComponent Class.
- A pure component implements the shouldComponentUpdate method with shallow props and state comparison.
- When Component re-render ?
    - When Difference in any of below two
      - Sc of prevState with curState 
      - Sc of prevProps with curProps 

- On dealing with pure component always create new object and modify do not mutate current object.
- if you make pure component then ensure all children also pure component 
>## Shallow Comparison (SC)

>### Primitives Type
- a SC b returns true if a and b have same value and are of the same type.
```js
String a = "Parth";
String b = "Parth";

a SC b // true
```

>### Complex Type
- a SC b returns true if a and b reference the exact same object.
```js
let a = [1,2,3];
let b = [1,2,3];
let c = a;
a SC b // false
a SC c // true
```