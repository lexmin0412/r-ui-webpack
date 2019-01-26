/* 上拉加载组件  已废弃
 * @Author: cellerchan
 * @Date: 2018-07-14 11:26:18
 * @Last Modified by: cellerchan
 * @Last Modified time: 2019-01-26 16:16:25
 */

import React, { Component } from 'react'
import styles from './scroller.less'

// 加载中
export class ScrollerLoader extends Component {
  render() {
    return (
      <div className={'loader'}>
        <img src="./../../images/common/loading_infinite.gif"/>
        <p className={'text'}>
          加载中...
        </p>
      </div>
    )
  }
}

// 加载完成
export class ScrollerEndMessage extends Component {
  render() {
    return (
      <div className={'end-message'}>
        我是有底线的
      </div>
    )
  }
}

