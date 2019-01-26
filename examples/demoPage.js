/* 演示页面
 * @Author: cellerchan 
 * @Date: 2019-01-26 14:21:32 
 * @Last Modified by: cellerchan
 * @Last Modified time: 2019-01-26 17:01:09
 */

import React, { Component } from 'react'
import Components from './../src/index'
import dayJS from 'dayjs'
console.log('Components', Components)

export default class DemoPage extends Component {

  constructor(props){
    super(props)
    this.deHeight = document.documentElement.clientHeight
    this.deWidth = document.documentElement.clientWidth
    this.state = {
      alertModalVisible: false
    }
  }

  componentDidMount(){
    console.log(dayJS().format('YYYY-MM-DD'))
  }

  // 页面item点击
  itemClick = ( sign ) => {
    if ( ['alert'].includes(sign) ) {
      this.setState({
        [`${sign}ModalVisible`]: true
      })
    }
    else if ( sign == 'toast' ) {
      Components.Toast.XmToast.info('弹出信息', 2000, {
        color: '#fff'
      })
    }
  }

  // 弹窗关闭
  closeModal = sign => {
    this.setState({
      [`${sign}ModalVisible`]: false
    })
  }
  
  render() {
    return (
      <div>

        <Components.ListItem.ListItem 
          itemName="Alert"
          handleClick={()=>this.itemClick('alert')}
        />

        <Components.Default.Default
          text="暂无相关数据"
          height={this.deHeight}
        />

        <Components.ListItem.ListItem 
          itemName="toast"
          handleClick={()=>this.itemClick('toast')}
        />

        <Components.ScrollerConfig.ScrollerEndMessage />

        <Components.XmModal.ConfirmModal
          visible={this.state.alertModalVisible}
          title="标题"
          content="内容字符串"
          buttons={[
            {
              text: '按钮1',
              handleClick: ()=>this.closeModal('alert')
            },
          ]}
        />
      </div>
    )
  }
}
