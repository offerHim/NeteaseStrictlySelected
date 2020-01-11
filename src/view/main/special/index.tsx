import React, { useEffect } from 'react';
import styles from './index.module.scss'
import { useObserver } from 'mobx-react-lite'
import useStore from '../../../util/useStore'

const Special: React.FC = () => {

  let store = useStore()
  let { special } = store

  useEffect(() => {
    special.special()
  },[])

  return useObserver(() => (
    <div className={styles.special_div}>
        {
          special.specialList.map((item,index)=>{
            return <div className={styles.item} key={index}>
                <img src={item.scene_pic_url} alt=""/>
                <div className={styles.topicItemTitle}>{item.title}</div>
                <div className={styles.topicItemSubtitle}>{item.subtitle}</div>
                <div className={styles.topicItemPrice}>{item.price_info}元起</div>
            </div>
          })
        }
    </div>
  ))
}

export default Special;