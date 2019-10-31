import React from 'react';
import logo from '../logo.svg';
import '../style.css';
import '../App.css';
function Greeter() {
  return (
    <div className="App">
		<h1> Hello, Firefox Debugger </h1>
    <img src={'http://placekitten.com/640/480'} className="kitten" alt="logo" />
		<p style={{fontSize:'20px'}}> You clicked the kitten 0 times.</p>
		<div className="big"> Get Name from Server </div>
		<div className="big"> Clear name on Server </div>
		<input style={{fontSize: '25px' + ''} } type="text" placeholder="New Name... ?" />
		<div className="big"> Set name on Server</div>
    </div>
  );
}

export default Greeter;
