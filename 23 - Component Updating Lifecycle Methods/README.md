># Updating lifecycle Methods

 >## static getDerivedStateFromProps(props, state)
  - Method is called every time a component re-rendered
  - Use
    - Set the State
  - Don't
    -  Cause side effects. Ex- HTTP requests

>## shouldComponentUpdate(nextProps, nextState)
  - Dictates if the component should re-render or not
  -  Use
    - Performance optimization
  -  Don't
     -  Cause side effects. Ex- HTTP requests
     -  Calling the setState method

>## render()
  - only required method
  - Read props & state and return JSX
  -  Don't
     -  change state or interact with DOM or make AJAX calls

>## getSnapshotBeforeUpdate(prevProps, prevState)
  - Called right before the changes from the virtual DOM are to be reflected in the DOM
  - Use
    - Capture some information from the DOM
  - Method return either null or return a value.
  - Returned value will passed as the third parameter to the next method

>## componentDidUpdate(prevProps,prevState,snapshot)
  - called after the render is finished in the re-render cycles
  - cause side effects 

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

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }

    changeState = () =>{
        this.setState({
            name:'PPM'
        })
    }
    render() {
        console.log('LifeCycleA Render')
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Click</button>
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

    shouldComponentUpdate() {
        console.log('LifeCycleB shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleB componentDidUpdate')
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
>## OrderOfExecution
- LifeCycleA getDerivedStateFromProps
- LifeCycleA shouldComponentUpdate
- LifeCycleA Render
- LifeCycleB getDerivedStateFromProps
- LifeCycleB shouldComponentUpdate
- LifeCycleB Render
- LifeCycleB getSnapshotBeforeUpdate
- LifeCycleA getSnapshotBeforeUpdate
- LifeCycleB componentDidUpdate
- LifeCycleA componentDidUpdate

># Unmounting Phase Methods

>## componentWillUnmount()
- Method is invoked immediately before a component is unmounted and destroyed
- Use
  - Cancelling any network requests, removing event handlers, canceling any subscriptions and also invalidating timers
- Don't
  - Call the setState Method


># Error Handling Phase Methods

- ### static getDerivedStateFromError(error)

- ### componentDidCatch(error,info)
- When there is an error either during rendering, in a lifecycle method, or in the constructor of any child component.