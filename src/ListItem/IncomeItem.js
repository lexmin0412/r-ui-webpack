/* 收入item组件（暂仅应用于今日收款）
 * @Author: cellerchan 
 * @Date: 2019-01-16 10:03:10 
 * @Last Modified by: cellerchan
 * @Last Modified time: 2019-01-17 19:54:30
 */

import React, { Component } from 'react'
import styles from './incomeItem.less'

export default class IncomeItem extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){

  }

  render() {

    let { data, itemName, type } = this.props
    return (
      <div className={styles['item']}
        onClick={this.props.handleClick}
      >
        <div className={styles['item-header']}>
          <div className={styles["left-icon-box"]}>
            {
              data.orderType == 'ONLINE' ?
              <div className={`${styles["left-icon"]}`}>
                <img src="./../../images/common/icon_order_mego.png" />
              </div>
              :
              data.payType == 'WXPAY' ?
              <div className={`${styles["left-icon"]}`}>
                <img src="./../../images/common/icon_order_wechat.png" />
              </div>
              :
              data.payType == 'ALIPAY' ?
              <div className={`${styles["left-icon"]}`}>
                <img src="./../../images/common/icon_order_alipay.png" />
              </div>
              :null
            }
          </div>
          <div className={styles["center-main"]}>
            <div className={styles["main-header"]}>
              {itemName}
            </div>
            <div className={styles["main-content"]}>
              {data.orderType=='ONLINE'?data.userPhoneId:'扫码收款'}
            </div>
          </div>
          <div className={styles['right']}>
            <div className={`${styles["right-number"]} ${styles["income"]}`}>
              +{data.orderAmount}
            </div>
            <img src="./../../images/common/goto.png" 
              className={styles['goto-icon']}
            />
          </div>
        </div>
        <div className={styles['item-bottom']}>
          <div className={styles["main-bottom"]}>
            {data.payTimeStr}
          </div>
        </div>
      </div>
    )
  }
}
