import React, { useEffect } from 'react';
import styles from './index.module.scss'
import useStore from '../../../util/useStore'
import {useObserver} from 'mobx-react-lite'
import {useHistory} from 'react-router-dom'

const Home: React.FC = () => {

  let store = useStore()
  let { home } = store
  
  useEffect(()=>{
        home.home()
  },[])

  let history = useHistory()

  let toBrandDetail = async (id:string)=>{
      sessionStorage.setItem('brandId',id)
      history.push('/BrandDetail')
      
  }
  
  return useObserver(()=>(<div className={styles.home_div}>
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
                        return  <div className={styles.brand_block} key={index} onClick={()=>toBrandDetail(item.id)}>
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
                    home.newGoodsList.map((item,index)=>{
                        return  <div className={styles.brand_block} key={index}>
                            <img src={item.list_pic_url} alt=""/>
                            <p className={styles.name}>{item.name}</p>
                            <p className={styles.price}>￥{item.retail_price}</p>
                        </div>
                    })
                }
                
            </div>
        </div>
        <div className={styles.hotGoodsList}>
            <div className={styles.h3}>人气推荐</div>
            <div className={styles.brand_box}>
                {
                    home.hotGoodsList.map((item,index)=>{
                        return  <div className={styles.brand_block} key={index}>
                            <img src={item.list_pic_url} alt=""/>
                            <div className={styles.text}>
                                <p className={styles.name}>{item.name}</p>
                                <p className={styles.info}>{item.goods_brief}</p>
                                <p className={styles.price}>￥{item.retail_price}</p>
                            </div>
                        </div>
                    })
                }   
            </div>
        </div>
        <div className={styles.topicList}>
            <div className={styles.h3}>专题精选</div>
            <div className={styles.brand_box}>
                <ul>
                    {
                        home.topicList.map((item,index)=>{
                            return <li key={index}>
                                <img src={item.scene_pic_url} alt=""/>
                                <p className={styles.price}>{item.title} <span>￥{item.price_info}元起</span></p>
                                <p className={styles.subtitle}>{item.subtitle}</p>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
        <div className={styles.categoryList}>
            {
                home.categoryList.map((item,index)=>{
                    return <div key={index}> 
                        <div className={styles.h3}>{item.name}</div>
                        <div className={styles.cateGoryGoodsWrap}>
                            {
                                item.goodsList.map((val:any,key:number)=>{
                                    return   <div key={key} className={styles.block}>
                                        <img src={val.list_pic_url} alt=""/>
                                        <p className={styles.name}>{val.name}</p>
                                        <p className={styles.price}>￥{val.retail_price}</p>
                                    </div>
                                })
                            }
                            <div className={styles.boton}>
                                <p>更多{item.name}好物</p>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt=""/>
                            </div>
                        </div>
                        
                    </div>
                })
            }
        </div>
    </div>
  ))
}

export default Home;