import React, { Component } from 'react';
import './Calculator.css'


class Keypad extends Component {
    renderSquare(i) {
        return <Square value={i} />
        
    }

    render() {
        
        return (
            <div className="numpad">
             <input type="text" name="display" className="display" disabled></input>
                <div className="row">
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                    {this.renderSquare("/")}
                </div>
                <div className="row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare("*")}
                </div>
                <div className="row">
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare("-")}
                </div>
                <div className="row">
                    {this.renderSquare("C")}
                    {this.renderSquare(0)}
                    {this.renderSquare("=")}
                    {this.renderSquare("+")}
                </div>
            </div>
        )
    }
}

class Calculator extends Component {
    constructor() {
        super()
        this.state = {
            result: ""
        }
      }
    render() {
        return (
            <div className="calculator">
                <div className="keypad">
                <h1>
                    Calculator
                </h1>
                    <Keypad />
                </div>
            </div>
        )
    }
}
export default Calculator;