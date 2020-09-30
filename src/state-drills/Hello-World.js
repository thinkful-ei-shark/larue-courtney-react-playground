import React, {Component} from 'react'


class helloWorld extends Component {
    state = {
        who: 'world',
    }

    render() {
        return (
        <div>
            <p>Hello, {this.state.who} </p>
            <button onCLick={() => this.setState({ who: 'world' })}>World</button>
            <button onCLick={() => this.setState({ who: 'friend' })}>Friend</button>
            <button onCLick={() => this.setState({ who: 'react' })}>React</button>
            </div>
        )
    }
}




export default helloWorld;


// handleButtonClick()
// { console.log('clicked!') } render()
// {
//     return (
//         <div>
//         <p>The current count: {this.state.count}</p>
//         <button onClick={this.handleButtonClick}> Add 1 </button>
//     </div>)
// }