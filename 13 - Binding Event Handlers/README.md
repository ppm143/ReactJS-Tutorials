use of event binding is because of this keyword work in js not how react
> # Binding Event Handlers

> ## Methods for binding
**1. Binding In render**
```js
import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
    }

    clickHandler() {
        this.setState({
            message: 'Good Bye'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Click</button> 
            </div>
        )
    }
}

export default EventBind
```
- Every update causes render and performance is not good in big application
  
**2. Binding In Arrow Function**

    - Call method using arrow function

```js
import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
    }

    clickHandler() {
        this.setState({
            message: 'Good Bye'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={()=> this.clickHandler()}>Click</button> 
            </div>
        )
    }
}
```
**3. Binding In Class Constructor**

```js
import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({
            message: 'Good Bye'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click</button> 
            </div>
        )
    }
}
```
**4. Class property as a Arrow Function**
  
```js
import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
    }

    clickHandler = () => {
        this.setState({
            message: 'Good Bye'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click</button> 
            </div>
        )
    }
}
```

>## Notes
- 1st approch might not want to use because of performance. 
- 2nd is easy when we have to pass argument.
- 3rd is the best and react document suggest to use.
- 4th also acceptable. 
