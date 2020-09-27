> ## Props

- props means **properties**.
- props is the optional input component can accept.
- It allows component to be **dynamic**.
- Props are **Immutable**.

> ### Pass name in Greet component

> ### App.js

- ![App.js](https://github.com/ppm143/AllProjectImages/blob/master/ReactJS%20Tutorial/props/appjs.png)

```js
import React, { Component } from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

class App extends Component() {
  render() {
    return (
      <div className="App">
        <Greet name="PPM1" heroName="superman">
          <p>This is a children Prop!</p>
        </Greet>
        <Greet name="PPM2" heroName="batman">
          <button>Action</button>
        </Greet>
        <Welcome name="PPM1" heroName="superman"></Welcome>
        <Welcome name="PPM2" heroName="batman"></Welcome>
      </div>
    );
  }
}

export default App;
```

> ### Greet.js

- ![Greet.js](https://github.com/ppm143/AllProjectImages/blob/master/ReactJS%20Tutorial/props/greetjs.png)

```js
import React from "react";

const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name}! known as {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
```

> ### Welcome.js

- ![Welcome.js](https://github.com/ppm143/AllProjectImages/blob/master/ReactJS%20Tutorial/props/welcomejs.png)

```js
import React, { Component } from "react";

class Welcome extends Component() {
  render() {
    return (
      <h1>
        Welcome {this.props.name}! known as {this.props.heroName}
      </h1>
    );
  }
}

export default Welcome;
```
