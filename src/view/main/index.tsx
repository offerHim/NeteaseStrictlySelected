import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import RouterView from '../../router/RouterView'
import styles from './index.module.scss'

const Main: React.FC = (props:any) => {
    
    let navList=[
        {
            path: '/main/home',
            title:"首页"
        },{
            path: '/main/special',
            title:"专题"
        },{
            path: '/main/classify',
            title:"分类"
        },{
            path: '/main/cart',
            title:"购物车"
        },{
            path: '/main/my',
            title:"我的"
        }
    ]
    
    return <div className={styles.main_div}>
        <div className={styles.router}>
            <RouterView routes={props.routes}></RouterView>
        </div>
        <div className={styles.nav}>
            {
                navList.map((item,index)=>{
                return <NavLink key={index} to={item.path}>{item.title}</NavLink>
                })
            }
        </div>
    </div>
}

export default Main;