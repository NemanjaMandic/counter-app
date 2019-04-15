import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,
        imageUrl: 'https://picsum.photos/200'
     };

     formatCount = () => {
         const { count } = this.state;
         return count === 0 ? 'Zero' : count;
     }
    render() { 
        return ( 
        <div>
            <img src={this.state.imageUrl} alt="Slidza"/>
            <span>{this.formatCount()}</span> <button>Increment</button>
        </div>
        
        );
    }
}
 
export default Counter;