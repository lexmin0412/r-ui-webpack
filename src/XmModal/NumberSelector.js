/* 数量选择器
 * @Author: cellerchan
 * @Date: 2018-08-21 21:12:02
 * @Last Modified by: cellerchan
 * @Last Modified time: 2018-08-22 20:44:42
 */

import React, { Component } from 'react'
import styles from './numberSelector.less'

/* 数量选择弹窗
 * @selectedNum 输入框值 String
 * @onOk 确认按钮点击事件 Function
 * @onCancel 取消按钮点击事件 Function
 * @visible 弹窗是否开启 Boolean
 * @onPlus 加按钮点击事件 Function
 * @onSubtract 减按钮点击事件 Function
 * @onChange 输入框值改变事件 Function
 */
export default class NumberSelector extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){

  }

  render() {

    let { selectedNum, onOk, onCancel, visible, onPlus, onSubtract, onChange } = this.props
    return (
      visible ?
      <div className={styles['com-num-selector']}>
        <div className={styles['inner-container']}>
          <div className={`${styles['inner-box']} ${visible?styles['show-animate']:styles['hide-animate']}`}>
            <div className={styles['num-selector-header']}>
              修改购买数量
            </div>
            <div className={styles['num-selector-main']}>
              <div className={styles['subtract']}
                onClick={onSubtract}
              >
                -
              </div>
              <input type="tel"
                value={selectedNum}
                onChange={(e)=>onChange(e)}
              />
              <div className={styles['plus']}
                onClick={onPlus}
              >
                +
              </div>
            </div>
            <div className={styles['num-selector-btns']}>
              <div className={styles['cancel-btn']}
                onClick={onCancel}
              >
                取消
              </div>
              <div className={styles['confirm-btn']}
                onClick={onOk}
              >
                确定
              </div>
            </div>
          </div>
        </div>
      </div>
      :null
    )
  }
}
