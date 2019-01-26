import styToast from './xmtoast.less';

const defaultStyles = {
  position: 'fixed',
  zIndex: 99999,
  background: 'rgba(0,0,0,0.5)',
  width: '60%',
  height: '88px',
  color: '#fff',
  left: '50%',
  top: '50%',
  textAlign: 'center',
  transform: 'translate(-50%, -50%)',
  lineHeight: '88px',
  fontSize: '32px',
  borderRadius: '16px'
}

export let XmToast = {
  info: function (text, timeout, options) {

    
    var appliStyles = {}
    // 合并默认样式和传入的样式对象
    for (let prop in options) {
      appliStyles = {...defaultStyles, [prop]: options[prop]}
    }

    // 删除之前的toast框
    try {
      document.body.removeChild(document.querySelector('div.toast-it'));
    } catch (e) {
      console.log(e)
    }
    // 持续时间，默认3s
    timeout = timeout || 3000;
    let toast = document.createElement('DIV');
    toast.classList.add(styToast['toast-it']);
    let content = document.createTextNode(text);
    toast.appendChild(content);
    toast.style.animationDuration = timeout / 1000 + 's';
    // 如果传了样式参数 渲染
    for (let prop in appliStyles) {
        toast.style[prop] = appliStyles[prop];
    }
    // 确保toast框处于最高层级
    toast.style['z-index'] = 9999999;
    document.body.appendChild(toast);
    // 移除toast
    setTimeout(function () {
      document.body.removeChild(toast);
      // try {
      //   document.body.removeChild(toast);
      // } catch (e) {
      //   console.log(e)
      // }
    }, 2000);
  }
}

