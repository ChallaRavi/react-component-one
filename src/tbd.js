import React, { Component } from 'react';

class tbd extends Component {
  
  constructor() { 
    super();
    this.state = {
      text: "Hello"
    };
  }

  render() {
    
    return (
      <div>
        <p>{this.state.text}</p>
        <button onClick={() => this.setState({text:'Swamiye Saranam Ayyappa'})}>ClickMe!</button>
      </div>
    );
  }
}

export default tbd;