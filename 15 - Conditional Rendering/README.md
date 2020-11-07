># Conditional Rendering
- Conditional rendering works same as condition work in Javascript

>## **1. if/else**
- if/else condition not valid inside JSX we can return JSX as a if/else.

```js

import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        if (this.state.isLoggedIn) {
            return <div> Welcome Parth!</div>
        }
        else {
            return <div> Welcome Guest</div>
        }
    }
}

export default UserGreeting

```
>## **2. Element variables**
- Store value based on conditions in variable.
```js
import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        let message;
        if (this.state.isLoggedIn) {
            message = <div> Welcome Parth!</div>
        }
        else {
            message = <div> Welcome Guest</div>
        }
        return message;
    }
}

export default UserGreeting

```
>## **3. Ternary Condition operator**
- Can use inside JSX.

```js
import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        return (
            this.state.isLoggedIn ? <div> Welcome Parth!</div> : <div> Welcome Guest</div>
        )
    }
}

export default UserGreeting

```
>## **4. Short Circuit Operator**

```js
import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        return this.state.isLoggedIn && <div> Welcome Parth!</div>
    }
}

export default UserGreeting

```

- Mostly use 3rd and 4th method for best practice.
