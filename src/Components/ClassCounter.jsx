import { Component } from "react";

class ClassCounter extends Component {
    constructor() {
        super();
        this.state = {
            value: 0
        };
    }

    handleIncrement = () => {
        this.setState({
            value: this.state.value + 1,
        });
    }

    handleDecrement = () => {
        this.setState({
            value: this.state.value - 1,
        });
    }

    handleReset = () => {
        this.setState({
            value: 0,
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.value}</h1>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default ClassCounter;
