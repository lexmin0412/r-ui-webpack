/*
 * @Author: cellerchan
 * @Date: 2018-05-08 14:14:43
 * @Last Modified by: cellerchan
 * @Last Modified time: 2019-01-26 15:10:40
 */

import React, { Component } from 'react'
import './listitem.less'

/* 信息展示条组件
 * @bordered 是否展示下边框 Boolean
 * @size 字体大小 String ( 'large' | 'normal' )
 * @itemName 信息标题 String
 * @itemValue 信息内容 String
 * @goto 是否展示next图标 Boolean
 * @gotoDesc next图标说明文字 String
 * @handleClick 点击事件处理函数 Function
 */
export default class ListItem extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  render() {

    let { itemName, itemValue, goto, gotoDesc, size, bordered, handleClick, descColor } = this.props
    return (
      <div
        className={`com-list-item size`}
        onClick={handleClick}
        style={{borderBottom: bordered ? '1px solid #ebebeb' : 0 }}
      >
        <div className={'item-left'}>
          {/* 条目名称 */}
          <span className={"item-left-name"}>
            {itemName}
          </span>
          {/* 条目值 */}
          {
            itemValue ?
            <span className={"item-left-value"}>
              {itemValue}
            </span>
            :null
          }
        </div>
        {/* next按钮 */}
        {
          goto ?
          <div className={"item-right"}>
            {/* next按钮说明文字 */}
            {
              gotoDesc ?
              <span className={'next-text'}
                style={{
                  color: descColor || '#999'
                }}
              >
                {gotoDesc}
              </span>
              :null
            }
            <img src="./../images/goods/goto.png"
              className={'next-icon'}
            />
          </div>
          :null
        }
      </div>
    )
  }
}
