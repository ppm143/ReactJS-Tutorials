># Methods as Props
- When child component use to communicate with parents then we have to use method as props.

> ## **ParentComponent.js**
```js

import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(name) {
        alert(`Hello ${this.state.parentName} from ${name}`)
    }
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent

```
>## **ChildComponent.js**

```js
import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=> props.greetHandler('Child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent

```