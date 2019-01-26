import React, { Component } from 'react'
// import './rModal.css'
import './test.less'

export default class componentName extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){

  }
  
  render() {
    return (
      <div className="confirm-modal-container">
        <div className="title">
          {this.props.title}
        </div>
        <div className="content">
          {this.props.content}
        </div>
        <div className="buttons">
          按钮
        </div>
      </div>
    )
  }
}
