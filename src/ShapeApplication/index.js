import React, {Component} from 'react'

import ShapeEditor from './ShapeEditor'


import './index.css'

export default class ShapeApplication extends Component {
  constructor (props) {
    super(props)

    this.updateShape = this.updateShape.bind(this)

    this.state = {
      shape: {
        width: 128,
        height: 128,
        color: '#0000FF'
      }
    }
  }

  updateShape (shape) {
    this.setState({ shape })
  }
  render () {
    return (
      <div className='shape-application__main-container'>
        <div className='shape-application__editor-container'>
          <ShapeEditor
            shape={this.state.shape}
            onChange={this.updateShape} />
        </div>
      </div>
    )
  }
}
