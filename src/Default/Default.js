/*
 * @Author: cellerchan
 * @Date: 2018-07-07 11:19:10
 * @Last Modified by: cellerchan
 * @Last Modified time: 2019-01-26 16:58:44
 */

import React, { Component } from 'react'
import styles from './default.less'

var defaultSrc = require('./../images/nodata-search.png');

/* 缺省数据组件
* @height 缺省数据高度 必选
* @text 缺省说明文字 String 可选
 * @imgSrc 图片地址 String 可选
 */
export default class DefaultData extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){

  }

  render() {

    let { imgSrc, text, height, shopcart } = this.props
    imgSrc = imgSrc ? imgSrc : './../images/nodata-search.png'
    return (
      <div className={'default-data-container'}
        id="container"
        style={{height: height}}
      >
        {this.props.children}
        <div className={'default-inner-container'}>
          <img className={'img'} src={defaultSrc} />
          <div className={'text'}>
            {text}
          </div>
          {/* 购物车跳转首页按钮 */}
          {/* {
            shopcart ?
            <div className={styles['goto-index']}
              onClick={()=>jump(this,'/index',null)}
            >
              去首页逛逛吧
            </div>
            :null
          } */}
        </div>
      </div>
    )
  }
}

export class DefaultRelative extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){

  }

  render(){

    let { text, className, sign } = this.props
    return (
      <div className={`default-relative-container ${className}`}>
        <img src="./../images/nodata-search.png" />
        <div className={'default-text'}>
          {text}
        </div>
      </div>
    )
  }
}

