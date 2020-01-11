import { observable, action } from 'mobx'

import { home , BrandDetail , GoodsDetail ,goodsRelated} from "../api/home"
import { HomeType , GooodsType } from '../util/type'

class HomeStore {
    //首页数据
    @observable
    data: HomeType = {
        banner: [],
        channel: [],
        newGoodsList: [],
        hotGoodsList: [],
        brandList: [],
        topicList: [],
        categoryList: []
    }

    //制造商详情数据
    @observable
    brandDetails:any
    //制造商详情id接口
    @observable
    brandId:any

    //商品详情id
    @observable
    goodsId:any
    //商品详情数据
    @observable
    goodsDate:GooodsType={
        attribute:[],
        gallery:[],
        issue:[],
        productList:[]
    }
    @observable
    info:any

    //首页数据
    @action
    async home(){
        let res = await home()
        this.data = res.data
    }

    //制造商详情
    @action
    async BrandDetail(){
        this.brandId = sessionStorage.getItem('brandId')
        let res = await BrandDetail(this.brandId)
        console.log(res)
        this.brandDetails = res.data.brand
    }

    //商品接口详情
    @action
    async GoodsDetail(){
        this.goodsId = sessionStorage.getItem('goodsId')
        let res = await GoodsDetail(this.goodsId)
        console.log(res.data)
        this.goodsDate = res.data
        this.info = res.data.info
    }
    //制造商详情商品
    @action
    async goodsRelated(){
        this.brandId = sessionStorage.getItem('brandId')
        let res = await goodsRelated(this.brandId)
        console.log(res)
    }
}

export default HomeStore