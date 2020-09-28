> # setState

- Always make use of setState and never modify the state directly.
- **Code has to be executed after the state has been updated?** Place that code in the call back function which is the second argument to the setState method.
- When you have to update state based on the previous state value, pass in the function as an argument instead of the regular object

  > ## Counter.js

- class component

```js
import React, { Component } from "react";

class Counter extends Component() {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

- setState method use when state change otherwise react not render component.

> ### Not Right Way

- **setState is Asyn method.**

```js
  increment() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count)
  }
```

> ### Right Way

- **use callback as a 2nd parameter.**

```js
  increment() {
    this.setState(
        { count: this.state.count + 1 },
    ()=>{console.log(this.state.count)}
    );
  }
```

> ## Note

- **Increment 5 times using one increment.**

```js
import React, { Component } from "react";

class Counter extends Component() {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={() => this.incrementFive()}>Increment Five</button>
      </div>
    );
  }
}

export default Counter;
```

- **This will increment only one time**
- **Because React make group of multiple setState call into one call for better performance**

> ### Solution

- **Always use previous state**

```js
increment() {
    this.setState(
        prevState=> ({count: prevState.count+1})
    );
  }

```

- **If value is depend of props**
- use props as a 2nd parameter

```js
increment() {
    this.setState(
        (prevState,props)=> ({count: prevState.count+props.value})
    );
  }

```

![setstate](https://github.com/ppm143/AllProjectImages/blob/master/ReactJS%20Tutorial/setstate/setstatejs.png)
