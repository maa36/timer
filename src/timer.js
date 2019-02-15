import React, { Component } from 'react';
import './timer.css'
import Result from './result'

class Timer extends Component {
  render() {
    return (
      <div className="App">  
        <div className="Number">
            <Result val='3661000'/>
        </div>
        <div className="nom">
            <h3>Hour</h3>
            <h3>Minute </h3>
            <h3>Second</h3>
        </div>
      </div>
    );
  }
}

export default Timer;