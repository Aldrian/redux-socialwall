require('normalize.css/normalize.css')
require('styles/App.scss')
require('styles/Image.scss')

import React from 'react'

class Image extends React.Component {
  render() {
    return (
      <div className="wrap-img-squares">
        <img src={this.props.src} alt="image"/>
        <div className="square medium red"></div>
        <div className="square small blue"></div>
        <div className="square large green"></div>
      </div>
    )
  }
}

Image.defaultProps = {
}

export default Image
