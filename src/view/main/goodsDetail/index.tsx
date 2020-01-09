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
        home.GoodsDetail()
    },[])
    
    return useObserver(()=>(
        <div className={styles.brand_box}>{console.log(home.info)}
            <div className={styles.header}>
                <div onClick={()=>history.push('/main')}>{"<"}</div>
                <div className={styles.title}>{home.info&&home.info.name}</div>
                <div>{" "}</div>
            </div>
            
        </div>
    )) 
}

export default Cart;