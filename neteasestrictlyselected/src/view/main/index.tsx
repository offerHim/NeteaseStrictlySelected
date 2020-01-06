import React from 'react';
import { NavLink } from 'react-router-dom';
import RouterView from '../../router/RouterView'
import './index.css'


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
    
    return <div className="main_div">
        <div className="router">
            <RouterView routes={props.routes}></RouterView>
        </div>
        <div className="nav">
            {
                navList.map((item,index)=>{
                return <NavLink key={index} to={item.path}>{item.title}</NavLink>
                })
            }
        </div>
    </div>
}

export default Main;