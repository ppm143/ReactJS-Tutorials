> # Components
  ![Components](https://github.com/ppm143/AllProjectImages/blob/master/ReactJS%20Tutorial/Components/1.png)

- component describe a part of the user interface
- Reusable
- Component can contains other components
  ![Components](https://github.com/ppm143/AllProjectImages/blob/master/ReactJS%20Tutorial/Components/2.png)
- Component placed in js or jsx files.
- Facebook has 33k components

> ## Types of components
   **1. Functional Component**

- Javascript Functions

```js
function Welcome(props){
    return <h1>Hello,{props.name}</h1>;
}
```

**2. Class Component**

- Class extending component class
- Render method returning HTML

```js
class Welcome extends React.Component{
    render(){
     return <h1>Hello,{props.name}</h1>;
    }
}
```
