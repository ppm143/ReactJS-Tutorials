> # Event Handling

- **Event name camel case**
- **Pass function in curely braces({}) not function call this keyword in class component**

> ## **FunctionClick.js**

```js
import React from "react";

const FunctionClick = () => {
  function clickHandler() {
    console.log("Button Clicked!");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
};

export default FunctionClick;
```

> ## **App.js**

```js
import React, { Component } from "react";
import FunctionClick from "./components/FunctionClick";

class App extends Component() {
  render() {
    return (
      <div className="App">
        <FunctionClick />
      </div>
    );
  }
}

export default App;
```

> ## **ClassClick.js**

```js
import React, { Component } from "react";


class ClassClick extends Component() {
  function clickHandler() {
    console.log("Button Clicked!");
  }
  render() {
    return (
      <div >
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default ClassClick;
```
