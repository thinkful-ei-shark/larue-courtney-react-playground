import React, {Component} from 'react'


class SetInterval extends Component {
    state = {
        count: 0,
    }
     
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
               
    
    // if/else statements?      
    renderSwitch() {
        switch (this.state.count) {
            case this.state.count % 2 === 0:
                return 'tick';
            case this.state.count % 2 !== 0:
                return 'tock';
            default: this.state.count >= 8 || clearInterval(this.interval);
                return 'BOOM!!!! (aka "nap time")'
        }
    }
      
    render() {
        console.log('render')
        return (
            <div className='Bomb Countdown'>
                {this.renderSwitch()}
            </div>
        )
    }
}
    
export default SetInterval;
