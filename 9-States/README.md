> # State

- Object privately maintain inside a component
- state can influence what is render in browser
- state is change within a component

> ## Props vs State

> ### Props

- Props get passed to the component
- Function Parameter
- Props are immutable
- props in functional component and this.props in class component

> ### State

- state is managed within component
- Variable declared in the function body
- state can be changed
- useState hook in functional component and this.state in class component

> ## When button click message should be change

- In **App.js**
  ![App.js](https://github.com/ppm143/AllProjectImages/blob/master/ReactJS%20Tutorial/state/appjs.png)

```js
import React, { Component } from "react";
import Message from "./components/Message";

class App extends Component() {
  render() {
    return (
      <div className="App">
        <Message />
      </div>
    );
  }
}

export default App;
```

- In **Message.js**
  ![Message.js](https://github.com/ppm143/AllProjectImages/blob/master/ReactJS%20Tutorial/state/messagejs.png)

```js
import React, { Component } from "react";

class Message extends Component() {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitors",
    };
  }

  changeMessage() {
    this.setState({ message: "Thank you for subscribing!" });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => changeMessage()}>Subscribe </button>
      </div>
    );
  }
}

export default Message;
```
