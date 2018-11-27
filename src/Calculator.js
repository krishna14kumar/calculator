import React, { Component } from 'react';
import './Calculator.css'
import Keypad from './Keypad'
import Result from './Display'

class Calculator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            result: ""
        }
    }

    handleClick(button) {
        if (button === "=") {
            this.calculate()
        }

        else if (button === "clear") {
            this.reset()
        }

        else if (button === "bck") {
            this.backspace()
        }

        else {
            this.displayScreen(button)
        }
    }

    displayScreen(val) {
        let res = this.state.result
        this.setState({
            result: res + val
        })
    }
    calculate = () => {
        let val;
        try {
            val = eval(this.state.result)
        }
        catch (e) {

            val = "error"

        }
        this.setState({
            result: val
        });
    }

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div className="calculator">
                <div className="keypad">
                    <h1>
                        Calculator
                    </h1>
                    <Result result={this.state.result} />
                    <Keypad onClick={i => this.handleClick(i)} />
                </div>
            </div>
        )
    }
}
export default Calculator;