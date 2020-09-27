> ## JSX

- Javascript XML(JSX) - Extension to the Javascript language syntax.
- Write XML like code for element and components.
- JSX tags have a tag name, attribute, and children.

> ### Why we need JSX?

- JSX is not **necessity** to write React Application.
- JSX make your React code **simple and elegant**.

- JSX ultimately transpiles to pure Javascript which is understood by the browsers.

> ### Code with and without JSX

- **With JSX**

```js
import React from "react";

const Hello = () => {
  return (
    <div id="hello" className="dummy">
      <h1>Hello PPM!</h1>;
    </div>
  );
};
export default Hello;
```

- **Without JSX**

```js
import React from "react";

const Hello = () => {
  return React.createElement(
    "div",
    { id: "hello", className: "dummy" },
    React.createElement("h1", null, "Hello PPM!")
  );
};
export default Hello;
```

- **Parameters**

  - 1st tag
  - 2nd attributes object
  - 3rd children node

- Each JSX element calling React create Element.
- When we use JSX then we have to use `import React from 'react'`.

> ### JSX Differences

- class -> className
- for -> htmlFor
- camelCase property naming convention
  - onclick -> onClick
  - tabindex -> tabIndex
