import React, {Component, PropTypes} from 'react'

import ShapeView from './ShapeView'

import './index.css'

export default class ShapeEditor extends Component {
  constructor (props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount () {
    this.width.focus()
  }

  onSubmit (event) {
    event.preventDefault()

    const shape = {...this.props.shape}

    shape.width = parseInt(this.width.value, 10)
    shape.height = parseInt(this.height.value, 10)
    shape.color = this.color.value

    this.props.onChange(shape)
  }

  render () {
    const {shape} = this.props
    const {width, height, color} = shape

    return (
      <div className='shape-editor__main-container'>
        <h3 className='shape-editor__header'>Change the Shape with the fields below and click the Update button</h3>
        <div className='shape-editor__form-container'>
          <form
            className='shape-editor__form'
            onSubmit={this.onSubmit}>
            <label className='shape-editor__label'>Width:</label>
            <input
              className='shape-editor__input'
              ref={(input) => { this.width = input }}
              type='number'
              defaultValue={width} />
            <label className='shape-editor__label'>Height:</label>
            <input
              className='shape-editor__input'
              ref={(input) => { this.height = input }}
              type='number'
              defaultValue={height} />
            <label className='shape-editor__label'>Color:</label>
            <input
              className='shape-editor__input shape-editor__input-color'
              ref={(input) => { this.color = input }}
              type='color'
              defaultValue={color} />
            <input
              className='shape-editor__input shape-editor__input-submit'
              type='submit' value='Update' />
          </form>
        </div>
        <div className='shape-editor__view-container'>
          <ShapeView shape={shape} />
        </div>
      </div>
    )
  }
}

ShapeEditor.propTypes = {
  shape: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}
