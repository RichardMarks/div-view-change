import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      width: '',
      color: ''
    };

    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHeightChange(event) {
    this.setState({
      height: event.target.value,
    });
  }
   handleWidthChange(event) {
    this.setState({
      width: event.target.value,
    });
  }
   handleColorChange(event) {
    this.setState({
      color: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log('A height was submitted: ' + this.state.height);
    console.log('A width was submitted: ' + this.state.width);
    console.log('A color was submitted: ' + this.state.color);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Height:
          <input type="text" height={this.state.height} onChange={this.handleHeightChange} />
        </label>
        <label>
          Width:
          <input type="text" width={this.state.width} onChange={this.handleWidthChange} />
        </label>
        <label>
          Color:
          <input type="text" color={this.state.color} onChange={this.handleColorChange} />
        </label>
        <input type="submit" value="Update" />
      </form>
    );
  }
}




// ReactDOM.render(
//   <NameForm />,
//   document.getElementById('root')
// );
export default NameForm;
