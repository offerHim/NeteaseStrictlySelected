import React, { useEffect } from 'react';
import styles from './index.module.scss'
import useStore from '../../../util/useStore'
import {useObserver} from 'mobx-react-lite'


const Home: React.FC = () => {

  let store = useStore()
  let { home } = store
  
  useEffect(()=>{
        home.home()
  },[])
  
  return useObserver(()=>(  <div className={styles.home_div}>
                <div className={styles.banner}>
                    <img src="http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg" alt=""/>
                </div>
                <div className={styles.nav_title}>
                    {
                        home.channel.map((item,index)=>{
                            return <div className={styles.block} key={index}>
                                <img src={item.icon_url} alt=""/>
                                <span>{item.name}</span>
                            </div>
                        })
                    }
                </div>
                <div className={styles.brand_div}>
                    <div className={styles.h3}>品牌制造商直供</div>
                    <div className={styles.brand_box}>
                        {
                            home.brandList.map((item,index)=>{
                                return  <div className={styles.brand_block} key={index}>
                                    <p className={styles.barndName}>{item.name}</p>
                                    <p className={styles.barndPrice}>{item.floor_price}元起</p>
                                    <img src={item.new_pic_url} alt=""/>
                                </div>
                            })
                        }
                        
                    </div>
                </div>
                <div className={styles.newGoodsBox}>
                    <div className={styles.h3}>新品首发</div>
                    <div className={styles.brand_box}>
                        {
                            home.brandList.map((item,index)=>{
                                return  <div className={styles.brand_block} key={index}>
                                    <p className={styles.barndName}>{item.name}</p>
                                    <p className={styles.barndPrice}>{item.floor_price}元起</p>
                                    <img src={item.new_pic_url} alt=""/>
                                </div>
                            })
                        }
                        
                    </div>
                </div>
            </div>
  ))
}

export default Home;