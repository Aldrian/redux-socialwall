require('normalize.css/normalize.css')
require('styles/App.scss')
require('styles/Image.scss')
require('styles/animate.scss')

import React from 'react'

class Image extends React.Component {
  render() {
    return (
      <div className={`wrap-img-squares ${this.props.className}`}>
        <img src={this.props.src} alt="image"/>
        {this.props.lbotcorner ? <div className={`square ${this.props.lbotcorner.size} lbot ${this.props.lbotcorner.color}`}></div> : null}
        {this.props.ltopcorner ? <div className={`square ${this.props.ltopcorner.size} ltop ${this.props.ltopcorner.color}`}></div> : null}
        {this.props.rtopcorner ? <div className={`square ${this.props.rtopcorner.size} rtop ${this.props.rtopcorner.color}`}></div> : null}
        {this.props.rbotcorner ? <div className={`square ${this.props.rbotcorner.size} rbot ${this.props.rbotcorner.color}`}></div> : null}
        {this.props.topcorner ? <div className={`square ${this.props.topcorner.size} top ${this.props.topcorner.color}`}></div> : null}
      </div>
    )
  }
}

Image.defaultProps = {
}

export default Image
