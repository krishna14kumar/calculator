import React, { Component } from 'react';
import './Calculator.css'

class Keypad extends Component {

    renderButton(i) {
        return (
            <button className="square"
                name={i}
                onClick={() => this.props.onClick(i)}>
                {i}
            </button>
        );

    }

    render() {
        return (
            <div className="numpad">
                <div className="row">
                    <div className="clear">
                        {this.renderButton('clear')}
                    </div>
                    {this.renderButton('%')}
                    {this.renderButton('/')}
                </div>
                <div className="row">
                    {this.renderButton(7)}
                    {this.renderButton(8)}
                    {this.renderButton(9)}
                    {this.renderButton('*')}
                </div>
                <div className="row">
                    {this.renderButton(4)}
                    {this.renderButton(5)}
                    {this.renderButton(6)}
                    {this.renderButton('-')}
                </div>
                <div className="row">
                    {this.renderButton(1)}
                    {this.renderButton(2)}
                    {this.renderButton(3)}
                    {this.renderButton('+')}
                </div>
                <div className="row">
                    {this.renderButton('.')}
                    {this.renderButton(0)}
                    {this.renderButton('bck')}
                    {this.renderButton('=')}
                </div>
            </div>
        )
    }
}
export default Keypad;