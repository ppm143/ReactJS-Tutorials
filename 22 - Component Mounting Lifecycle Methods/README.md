># Mounting Lifecycle Methods

- >## constructor(props)
    - A special function that will get called whenever a new component is created
    - Used For
      - initializing state
      - Binding the event handlers
    - Don't
      - cause side effects. Ex: HTTP requests
    - Keep in mind when define constructor
      - super(props)
      - directly overwrite this.state

- >## static getDerivedStateFromProps(props,state)
    - rarely use lifecycle
    - when the state of component depends on changes in props over time
    - Used For
      - Set the state without this keyword because static method
    -  Don't
       - cause side effects. Ex: HTTP  

- >## render()
  - only required method
  - Read props & state and return JSX
  -  Don't
     -  change state or interact with DOM or make AJAX calls
  - Children components lifecycle methods are also executed

- >## componentDidMount
    - called only once in the whole life cycle of given component
    - invoked immediately after a component and all its children components have been rendered to the DOM.
    - Perfect place to cause side effects. Ex: Interact with the DOM or perform any ajax calla to load data. 

>## **LifeCycleA.js** 

```js
import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Parth'
        }
        console.log('LifeCycleA Constructor')
    }

    static getDerivedStateFromProps(){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null;
    }
    
    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }
    render() {
        console.log('LifeCycleA Render')
        return (
            <div>
                <div>LifeCycleA</div>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA

```


>## **LifeCycleB.js** 

```js
import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Parth'
        }
        console.log('LifeCycleB Constructor')
    }

    static getDerivedStateFromProps() {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('LifeCycleB componentDidMount')
    }
    render() {
        console.log('LifeCycleB Render')
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB

```
>## OrderOfExecutions
- LifeCycleA Constructor
- LifeCycleA getDerivedStateFromProps
- LifeCycleA Render
- LifeCycleB Constructor
- LifeCycleB getDerivedStateFromProps
- LifeCycleB Render
- LifeCycleB componentDidMount
- LifeCycleA componentDidMount