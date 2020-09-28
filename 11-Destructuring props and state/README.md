> # Destructuring props and state

- Improve code readability

> ## In Functional Component

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

> ### Two ways
**1. In the function parameters**

```js
import React from "react";

const Greet = ({ name, heroName }) => {
  return (
    <div>
      <h1>
        Hello {name}! known as {heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
```

**2. In the function body**

```js
import React from "react";

const Greet = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello {name}! known as {heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
```

> ## In Class Component

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

>### In the render method

```js
import React, { Component } from "react";

class Welcome extends Component() {
  render() {
    const { name, heroName } = this.props;
    //Const {state1,state2} = this.state
    return (
      <h1>
        Welcome {name}! known as {heroName}
      </h1>
    );
  }
}

export default Welcome;
```
