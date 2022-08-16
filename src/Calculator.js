import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        operator: '' ,
        current: '',
        prev: '', 
        error: ''
    }

    handleAC = () => {
        this.setState({
            operator: '' ,
            current: '',
            prev: '', 
            error: '' 
        
    })
}
    handleInputNum = (event) => {
        event.persist ()

        // handle double decimal first
		if (event.target.innerText === '.' && this.state.current.includes('.')) {
			// have to return to break out of `handleInputNum`
			return this.setState({ error: 'ERROR: Double decimal not allowed. Select another' })
		}
        //reset error if double decimal not pressed
		this.setState(prevState => {
			return {
				current: prevState.current + event.target.innerText,
				error: ''
			}
		})

    }
    // if (this.state.num1 === '0') {
    //     this.setState({
    //         display: e.target.innerText,
    //         num1: ''
    //     })
    // } else if (this.state.operator === null){
    //     this.setState({
    //         num1: (this.state.num1) + (e.target.innerText)
    //     })
    // } else if (this.state.operator !== null) {
    //         this.setState({
    //             num2: (this.state.num2) + (e.target.innerText)
    //         })
    //     }
    
    // }
    //  setOperator = (e) => {
        //     this.stateSet({
            //         operator: e.target.innerText
    //     })
    // }
    

    handleOperator = (event) => {
        event.persist()

        //user hasn't input a number yet
        if (this.state.current === '') {
            return this.setState({
                error: 'No numbers to do operations of select a number'
            })
        }
        //if there is a prev calculate
        if (this.state.prev !== ''){
            this.calculate()
        }
        this.setState(prevState => {
            return {
                operator: event.target.innerText,
				prev: prevState.current,
				current: '',
				error: ''
            }
        })
    }
    


    // handleEqual = (e) => {
    //    if (this.state.total) {
    //     let result = this.operator()
    //     this.setState ({
    //     display: '0',
    //     total: null,
    //     num1: '',
    //     num2: ''

    //     })
    //    } 
    // }

    
    // calculate = (num1, num2) =>{
    //     '+': num1 + num2,
    //     '-': num1 - num2,
    //     '*': (num1,num2) => num1 * num2,
    //     '/': (num1,num2) => num1 / num2,
    // }

calculate = () => {
		let runningTotal
		const prev = parseFloat(this.state.prev)
		const current = parseFloat(this.state.current)

		// handle error with NaN
		if (isNaN(prev) || isNaN(current)) {
			return this.setState({ error: 'Nothing to calculate' })
		}

		switch (this.state.operator) {
			case '+':
				runningTotal = prev + current
				break
			case '-':
				runningTotal = prev - current
				break
			case 'x':
				runningTotal = prev * current
				break
			case '/':
				runningTotal = prev / current
				break
			default:
				return
		}

        this.setState({
			current: `${runningTotal}`,
			operator: '',
			prev: '',
			error: ''
		})
	}


render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.error ? this.state.error : this.state.current}</div>
                <div className="calc-row">
                    <button onClick={this.handleAC} className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button onClick={this.handleOperator} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.handleInputNum} className="calc-button">7</button>
                    <button onClick={this.handleInputNum} className="calc-button">8</button>
                    <button onClick={this.handleInputNum} className="calc-button">9</button>
                    <button onClick={this.handleOperator} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.handleInputNum} className="calc-button">4</button>
                    <button onClick={this.handleInputNum} className="calc-button">5</button>
                    <button onClick={this.handleInputNum} className="calc-button">6</button>
                    <button onClick={this.handleOperator} className="calc-button calc-button-op">-</button>
                </div> 
                <div className="calc-row">
                    <button onClick={this.handleInputNum} className="calc-button">1</button>
                    <button onClick={this.handleInputNum} className="calc-button">2</button>
                    <button onClick={this.handleInputNum} className="calc-button">3</button>
                    <button onClick={this.handleOperator} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.handleInputNum} className="calc-button width-2">0</button>
                    <button onClick={this.handleInputNum} className="calc-button">.</button>
                    <button onClick={this.calculate} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
 }
}

export default Calculator