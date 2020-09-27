> ## Functional Components
>
> ![Functional Components](https://github.com/ppm143/AllProjectImages/blob/master/ReactJS%20Tutorial/Components/func.png)
>
> ### **Greet.js** component

- Component name is **Pascal** Convention.

**1. Create a Component**

```js
import React from 'react';

function Greet(){
    return <h1>Hello PPM!</h1>;
}

const Greet = () => return <h1>Hello PPM!</h1>;

export default Greet;
```

**2. Import component for use**

- `import Greet from './components/Greet'`

> ### Two way for export import

**1.Default export**

- We can use any name when we import component

```js
//Export
export default Greet;
//Import
import GreetPPM from "./components/Greet";
```

**2.Name export**

- We have to use exact name when we import component

```js
//Export
export const Greet = () => return <h1>Hello PPM!</h1>;
//Import
import Greet from './components/Greet'
```
