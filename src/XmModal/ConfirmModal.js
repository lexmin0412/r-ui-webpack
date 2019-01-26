/*
 * @Author: cellerchan
 * @Date: 2018-07-09 19:52:39
 * @Last Modified by: cellerchan
 * @Last Modified time: 2019-01-26 15:00:50
 */

import React, { Component } from 'react'
import './confirmModal.less'

/* confirm组件
 * @visible 是否可见 Boolean
 * @title 展示信息标题 String
 * @content 展示信息内容 String
 * @buttons 按钮 Object Array
 * * @text 按钮文字 String
 * * @handleClick 点击事件 Function
 * * @style 样式对象 Function
 */
export default class ConfirmModal extends Component {
  render() {
    let { title, content, buttons, visible } = this.props
    return (
      visible ?
      <div className={'xm-confirm-container'}>
        <div className={`xm-confirm-main ${visible?'open-animate':null}`}>
          <div className={'messages'}>
            <div className={'message-title'}>
              {title}
            </div>
            <div className={'message-content'}>
              {content}
            </div>
          </div>
          <div className={'xm-confirm-buttons'}>
            {
              buttons.map((item,index)=>{
                return (
                  <div className={'xm-confirm-button'}
                    onClick={item.handleClick}
                    key={index}
                    style={item.style||{}}
                  >
                    {item.text}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      :null
    )
  }
}
