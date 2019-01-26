/*
 * @Author: cellerchan
 * @Date: 2018-07-10 14:44:23
 * @Last Modified by: cellerchan
 * @Last Modified time: 2019-01-26 15:07:24
 */

import React, { Component } from 'react'
import styles from './mimDealItem.less'

/**
 * 蜜管家 交易数据 item组件
 * @data item 数据
 * @itemName 标题名称
 * @fields 数据字典
 * @incomeFlg 交易flag 'income'收入&'expenses'支出
 */
export default class MimDealItem extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){

  }

  render() {

    let { data, itemName, fields, incomeFlg  } = this.props
    return (
      <div className={styles['item']}
          onClick={this.props.onClick}
        >
          {/* {JSON.stringify(data)} */}
          <div className={styles['item-header']}>
            <div className={styles["left-icon-box"]}>
              {
                incomeFlg == 'income' ?
                <div className={`${styles["left-icon"]} ${styles['mim-income']}`}>
                  收
                </div>
                :
                incomeFlg == 'expenses' ?
                <div className={`${styles["left-icon"]} ${styles['outcome']}`}>
                  支
                </div>
                :null
              }
            </div>
            <div className={styles["center-main"]}>
              <div className={`${styles["main-header"]}`}>
                {itemName}
              </div>
              <div className={styles["main-content"]}>
                {
                  // 判断交易类型显示交易类型名称
                  data[fields.tradeType]
                  // data[fields.shareType] == 'AGENT' ? '跨界收益' : data[fields.shareType] == 'FEE' ? '手续费收益' :  data[fields.shareType] == '服务费' ? '服务费' : null
                }

              </div>
            </div>
            {
              incomeFlg == 'expenses' ?
              <div className={`${styles["right-number"]} ${styles["outcome"]}`}>
                -{data[fields.shareAmount]}
              </div>
              :null
            }
            {
              incomeFlg == 'income' ?
              <div>
                <div className={`${styles["right-number"]} ${styles["income"]}`}>
                  +{data[fields.shareAmount]}
                </div>
                <div className={`${styles['share-state']}`}>
                  {
                    data[fields.shareStatus] && data[fields.shareStatus] == "settlement"? `已结算`: `未结算`
                  }
                </div>
              </div>
              :null
            }
          </div>
          <div className={styles['item-bottom']}>
            <div className={styles["main-bottom"]}>
              { data[fields.tmCreate]}
            </div>
          </div>
        </div>
    )
  }
}
