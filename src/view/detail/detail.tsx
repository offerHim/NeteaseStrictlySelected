import React, { useEffect } from 'react';
import styles from './index.module.scss'
import { useObserver } from 'mobx-react-lite'
import useStore from '../../util/useStore';
import { useHistory } from 'react-router-dom'


const Cart: React.FC = () => {

  let store = useStore()

  let history = useHistory()

  useEffect(() => {
    store.detail.getDetailInfo(history.location.state,0)
    store.detail.getGoodList(history.location.state)
  }, [])


  let changeGood = (id:string,index:number) => {
    store.detail.getDetailInfo(id,index)
    store.detail.getGoodList(id)
  }



  return useObserver(() => (<div className={styles.detailPage}>
    <div className={styles.header}>
      <div className={styles.title}>
        <b onClick={()=>history.go(-1)}>&lt;</b>
        <span>奇趣分类</span>
        <span></span>
      </div>
      <div className={styles.tabWrap}>
        {
          store.detail.detailInfo.map((item, index) => {
            return <span className={store.detail.curIndex===index?styles.active:""} key={index} onClick={()=>changeGood(item.id,index)}>
              {item.name}
            </span>
          })
        }
      </div>
    </div>
    <div className={styles.con}>
      <div className={styles.detailInfo}>
        <div className={styles.name}>{store.detail.detailBox.name}</div>
        <div className={styles.front} >{store.detail.detailBox.front_name}</div>
      </div>
      <div className={styles.gooodList}>
        {
          store.detail.goodList.map((item, index) => {
            return <li key={index}>
              <img src={item.list_pic_url} alt="" />
              <div>
                {item.name}
              </div>
              <div className={styles.price}>
                ￥{item.retail_price}元
                  </div>
            </li>
          })
        }
      </div>
    </div>
  </div>))
}

export default Cart;