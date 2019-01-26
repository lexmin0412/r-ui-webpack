/*
 * @Author: cellerchan
 * @Date: 2018-07-10 14:44:23
 * @Last Modified by: cellerchan
 * @Last Modified time: 2019-01-23 11:17:50
 */

import React, { Component } from 'react'
import styles from './dealitem.less'

// 交易列表item组件
/**
 * @data item数据
 * @itemName 标题名称
 */
export default class DealItem extends Component {

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
          onClick={this.props.onClick}
        >
          <div className={styles['item-header']}>
            <div className={styles["left-icon-box"]}>
              {
                data.incomeFlg == 'income' ?
                <div className={`${styles["left-icon"]} ${styles['outcome']}`}>
                  收
                </div>
                :
                data.incomeFlg == 'expenses' ?
                <div className={`${styles["left-icon"]} ${styles['income']}`}>
                  支
                </div>
                :null
              }
            </div>
            <div className={styles["center-main"]}>
              <div className={styles["main-header"]}>
                {itemName}
              </div>
              <div className={styles["main-content"]}>
                {
                  data.advertisingShareBusType==2?'广告激励':
                  data.advertisingShareBusType==1?'广告收益':
                  data.orderSource
                }
                {data.refundFlg=='0'&&type=="dealing"?'-发生退款':null}
              </div>
            </div>
            {
              data.incomeFlg == 'expenses' ?
              <div className={`${styles["right-number"]} ${styles["outcome"]}`}>
                -{data.amount}
              </div>
              :null
            }
            {
              data.incomeFlg == 'income' ?
              <div className={`${styles["right-number"]} ${styles["income"]}`}>
                +{data.amount}
              </div>
              :null
            }
          </div>
          <div className={styles['item-bottom']}>
            <div className={styles["main-bottom"]}>
              {data.createTm}
            </div>
          </div>
        </div>
    )
  }
}
