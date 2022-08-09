import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        display: '0',
        operator: null,
        total: null,
        num1: '',
        num2: ''
    }

    handleAC = () => {
        this.setState({
        display: '',
        operator: null,
        total: null,
        num1: '',
        num2: ''
        
 
    })
}

     setOperator = (e) => {
        this.stateSet({
            operator: e.target.innerText
        })
    }

    inputNum = (e) => {
        if (this.state.num1 === '0') {
            this.setState({
                display: e.target.innerText,
                num1: ''
            })
        } else if (this.state.operator === null){
             this.setState({
                num1: (this.state.num1) + (e.target.innerText)
            })
        } else if (this.state.operator !== null) {
                this.setState({
                    num2: (this.state.num2) + (e.target.innerText)
                })
            }
        
        }
    }

    handleEqual = (e) => {
       if (this.state.total) {
        let result = this.operator()
        this.setState ({
        display: '0',
        total: null,
        num1: '',
        num2: ''

        })
       } 
    }

    
    // calculate = (num1, num2) =>{
    //     '+': num1 + num2,
    //     '-': num1 - num2,
    //     '*': (num1,num2) => num1 * num2,
    //     '/': (num1,num2) => num1 / num2,
    // }


      


render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button onClick={this.handleAC} className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button onClick={this.handleOperator} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.handleNums} className="calc-button">7</button>
                    <button onClick={this.handleNums} className="calc-button">8</button>
                    <button onClick={this.handleNums} className="calc-button">9</button>
                    <button onClick={this.handleOperator} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.handleNums} className="calc-button">4</button>
                    <button onClick={this.handleNums} className="calc-button">5</button>
                    <button onClick={this.handleNums} className="calc-button">6</button>
                    <button onClick={this.handleOperator} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.handleNums} className="calc-button">1</button>
                    <button onClick={this.handleNums} className="calc-button">2</button>
                    <button onClick={this.handleNums} className="calc-button">3</button>
                    <button onClick={this.handleOperator} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.handleNums} className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button onClick={this.handleEqual} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
 }
}

export default Calculator