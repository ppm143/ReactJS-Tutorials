> ## Class Components
>
> ![Functional Components](https://github.com/ppm143/AllProjectImages/blob/master/ReactJS%20Tutorial/Components/class.png)
>
> ### **Welcome.js** component

- Component name is **Pascal** Convention.

**1. Create a Component**

```js
import React, { Component } from "react";

class Welcome extends Component() {
  render() {
    return <h1>Hello PPM!</h1>;
  }
}

export default Welcome;
```

**2. Import component for use**

- `import Welcome from './components/Welcome'`

> ## Functional vs Class Components

> ### Functional Components

- If possible to create component from both the approch then go with functional components.
- Absence of **'this'** keyword

> ### Class Components

- Maintains their own private data state.
- Complex UI logic
- Provide lifecycle hooks
