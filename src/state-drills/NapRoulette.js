import React, {Component} from 'react';


class NapRoulette extends Component {
    static defaultProps = {
        pillowsInBed: 8,
    };

    state = {
        chamber: null,
        spinningTheWheel: false,
    };


    //event listener
    handleClick = () => {
        this.setState({
            spinningTheWheel: true,
        })
    
        this.timeout = setTimeout(() => {
            const randomBed = Math.ceil(Math.random() * 8)

        this.setState({
            chamber: randomBed,
            spinningTheWheel: false,
         })
    }, 2000)
}

    renderDisplay() {
        const { chamber, spinningTheWheel } = this.state
        const {pillowsInBed} = this.props
        if (spinningTheWheel) {
            return "Spinning the wheel and grabbing the pillow ..."
        }  else if (chamber === pillowsInBed) {
            return "ZZZZZZZZZ's"
        }  else {
            return 'Hittin the Hay - Goodnight!'
        }
    } 
   
    
    render() {
        return (
            <div className='Nap Roulette'>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleClick}>
                    GO TO BED FRIEND
        </button >
            </div>
        )
    }
           
}

export default NapRoulette;

    