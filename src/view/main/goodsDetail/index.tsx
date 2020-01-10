import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react-lite'
import useStore from '../../../util/useStore'
import styles from './index.module.scss'
import { useHistory } from 'react-router-dom'
import { Carousel, WingBlank } from 'antd-mobile';

const Cart: React.FC = () => {

    let store = useStore()
    let { home } = store
    let history = useHistory()
    useEffect(() => {
        home.GoodsDetail()
    }, [])

    let serviceList = ['30天无忧退货', '48小时快速退款', '满88元免邮费']

    return useObserver(() => (
        <div className={styles.brand_box}>
            <div className={styles.header}>
                <div onClick={() => history.push('/main')}>{"<"}</div>
                <div className={styles.title}>{home.info && home.info.name}</div>
                <div>{" "}</div>
            </div>
            <div className={styles.amcarousel}>
                <WingBlank style={{ height: '7rem'}}>
                    <Carousel
                        autoplay={true}
                        dots
                        autoplayInterval={1500}
                        infinite
                    >
                        {
                            home.goodsDate.gallery.map((item, index) => {
                                return <img key={index} src={item.img_url} alt="" style={{ width: '100%',  height: '7rem' }} />
                            })
                        }
                    </Carousel>
                </WingBlank>
            </div>
            <div className={styles.serviceList}>
                {
                    serviceList.map((item, index) => {
                        return <li key={index}>
                            <span>★</span>
                            {item}
                        </li>
                    })
                }
            </div>
            <div className={styles.goodsMsgWrap}>
                <div className={styles.goodsNameTitle}>{home.info && home.info.name}</div>
                <div className={styles.goodsNameSubTitle}>{home.info && home.info.goods_brief}</div>
                <div className={styles.goodsPriceTitle}>￥{home.info && home.info.retail_price}</div>
            </div>
            <div className={styles.goodsSize}>
                <div></div>
                <div>X0</div>
                <div>选择规格 ></div>
            </div>
            <div className={styles.goodsComment}>
                
            </div>
            <div className={styles.goodsAttribute} >
                <div className={styles.h3}>- 商品参数 -</div>
                <div>
                    {
                         home.goodsDate.attribute.map((item,index)=>{
                             return <div className={styles.goodsAttributeItem} key={index}>
                                <div>{item.name}</div>
                                <div>{item.value}</div>
                             </div>
                         })
                    }
                </div>
            </div>
        </div>
    ))
}

export default Cart;