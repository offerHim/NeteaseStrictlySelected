import React, { useEffect } from 'react';
import styles from './index.module.scss'
import { useObserver } from 'mobx-react-lite'
import useStore from '../../../util/useStore'


const My: React.FC = () => {
  let store = useStore()

  let power = ['我的收藏','地址管理','我的订单','周末拼单','优惠券','优选购','我的红包','会员plus','邀请返利','意见反馈','客服咨询','账户安全']
  
  return useObserver(()=>(
    <div className={styles.my_div}>
      <div className={styles.userMsgWrap}>
        <div className={styles.userLogo}></div>
      </div>
      <div className={styles.userPower}>
          {
            power.map((item,index)=>{
              return <div className={styles.item} key={index}>
                  <div>{item}</div>
              </div>
            })
          }
      </div>
      <div className={styles.loginOut}>退出登录</div>
    </div>
  ))
}

export default My;