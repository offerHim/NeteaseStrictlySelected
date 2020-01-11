import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react-lite'
import useStore from '../../../util/useStore'
import styles from './index.module.scss'
import {useHistory} from 'react-router-dom'


const Cart: React.FC = () => {

    let store = useStore()
    let {home} = store
    let history = useHistory()
    useEffect(()=>{ 
        home.BrandDetail()
        home.goodsRelated()
    },[])
    
    return useObserver(()=>(
        <div className={styles.brand_box}>
            <div className={styles.header}>
                <div onClick={()=>history.push('/main')}>{"<"}</div>
                <div className={styles.title}>{ home.brandDetails&&home.brandDetails.name}</div>
                <div>{" "}</div>
            </div>
            <div className={styles.img}>
                <img src={home.brandDetails&&home.brandDetails.app_list_pic_url} alt=""/>
                <div className={styles.breadDesc}>{ home.brandDetails&&home.brandDetails.simple_desc}</div>
            </div>
            <div className={styles.brandGoodsList}>

            </div>
        </div>
    )) 
}

export default Cart;