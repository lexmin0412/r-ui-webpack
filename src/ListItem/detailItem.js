/*
 * @Author: cellerchan
 * @Date: 2018-05-18 12:23:53
 * @Last Modified by: cellerchan
 * @Last Modified time: 2018-08-18 11:40:53
 */

import React, { Component } from 'react'

import styles from './detailitem.less'

/* 详情Item组件
 * @type item类型
 */
export default class DetailItem extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){

  }

  render() {

    let { name, handleClick, goto, value, type } = this.props
    return (
      <div className={styles['item']}>
        <div className={styles['item-left']}>
          {name}
        </div>
        {
          handleClick ?
          <div className={styles['item-right']} onClick={handleClick}>
            {value}
            {
              goto ?
              <img src="./../../images/common/goto.png"/>
              :null
            }
          </div>
          :
          type == 'orderNo' ?
          <div className={styles['item-right-orderNo']}>
            {value}
          </div>
          :
          <div className={styles['item-right']}>
            <div className={styles['item-value']}>
              {value}
            </div>
            {
              goto ?
              <img src="./../../images/common/goto.png"/>
              :null
            }
          </div>
        }
      </div>
    )
  }
}
