import React, {Component} from 'react'


class HelloWorld extends Component {
    state = {
        who: 'world',
    }

    render() {
        return (
        <div>
            <p>Hello, {this.state.who} ! </p>
            <button onClick={() => this.setState({ who: 'world' } )}>World</button>
            <button onClick={() => this.setState({ who: 'friend' })}>Friend</button>
            <button onClick={() => this.setState({ who: 'react' })}>React</button>
            </div>
        )
    }
}




export default HelloWorld;


// handleButtonClick()
// { console.log('clicked!') } render()
// {
//     return (
//         <div>
//         <p>The current count: {this.state.count}</p>
//         <button onClick={this.handleButtonClick}> Add 1 </button>
//     </div>)
// }