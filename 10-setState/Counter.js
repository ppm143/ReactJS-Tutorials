import React, { Component } from "react";

class Counter extends Component() {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    increment() {
        this.setState(
            prevState => ({ count: prevState.count + 1 }),
            () => console.log(this.state.count)
        );
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