import React, { Component } from 'react'
import  './App.css'

class ChangeDivForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: '',
      width: '',
      color: ''
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    console.log(event.target.height.value)
    console.log(event.target.width.value)
    console.log(event.target.color.value)
    this.setState({
      height: parseInt(event.target.height.value,10),
      width: parseInt(event.target.width.value, 10),
      color: event.target.color.value.toString(),
    })

    event.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Height:
            <input name='height' type='text' height={this.state.height}/>
          </label>
          <label>
            Width:
            <input name='width' type='text' width={this.state.width}/>
          </label>
          <label>
            Color:
            <input name='color' type='text' color={this.state.color}/>
          </label>
          <input type='submit' value='Update' />
        </form>
        <div className='appContainer'>
          <div className='default' style={
            {backgroundColor: this.state.color || 'blue',
            height: parseInt(this.state.height,10) || '128px',
            width: parseInt(this.state.width,10) || '128px'}
          }>
          </div>
        </div>
      </div>
      
    )
  }
}

export default ChangeDivForm
