import React, {PropTypes} from 'react'

import './index.css'

const ShapeView = (props) => {
  const {shape} = props
  const style = {
    backgroundColor: shape.color,
    width: `${shape.width}px`,
    height: `${shape.height}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid white'
  }

  return (
    <div className='shape-view__main-container'>
      <div
        className='shape-view__view'
        style={style}>
        <div>SHAPE</div>
      </div>
    </div>
  )
}

ShapeView.propTypes = {
  shape: PropTypes.object.isRequired
}

export default ShapeView
