import React from "react";

export class Counter extends React.Component {
    constructor() {
        super();
        this.state = { count: 0 }
    };

    alert = () => {
        alert("Hello!! Counter Updated");
    }

    welcome = () => {
        alert("welcome");
    }

    OnPress = () => {
        alert("I was clicked");
    }

    incrementCounter = () => {
        this.setState((prevState, props) => {
            return {count: prevState.count+1};
        })
    }

    decrementCounter = () => {
        this.setState((prevState, props) => {
            return {count: prevState.count-1};
        })
    }

    render() {
        return (
            <div>
                {this.state.count}<br/><br/>
                <button onClick={() => {this.incrementCounter();this.alert();}}>Increment</button>
                <br/>
                <button onClick={() => {this.decrementCounter();this.alert();}}>Decrement</button>
                <br/>
                <button onClick={() => {this.welcome()}}>Say Welcome</button>
                <br/>
                <button onClick={() => {this.OnPress()}}>Click on me</button>
            </div>
        );
    }
}