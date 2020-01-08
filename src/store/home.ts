import { observable, action } from 'mobx'

import { home , BrandDetail , goodsRelated} from "../api/home"

interface ItemType {
    name:string,
}
class HomeStore {
    //首页数据
    @observable
    channel: any[]=[]

    @observable
    brandList: any[]=[]

    @observable
    newGoodsList: any[]=[]

    @observable
    hotGoodsList: any[]=[]

    @observable
    topicList: any[]=[]

    @observable
    categoryList: any[]=[]

    //制造商详情数据
    @observable
    brandDetails:any

    @observable
    brandId:any
    @observable
    id:any

    //首页数据
    @action
    async home(){
        let res = await home()
        this.channel = res.data.channel
        this.brandList = res.data.brandList
        this.newGoodsList = res.data.newGoodsList
        this.hotGoodsList = res.data.hotGoodsList
        this.topicList = res.data.topicList
        this.categoryList = res.data.categoryList
    }

    //制造商详情
    @action
    async BrandDetail(){
        this.brandId = sessionStorage.getItem('brandId')
        let res = await BrandDetail(this.brandId)
        sessionStorage.setItem('id',res.data.brand.id)
        this.brandDetails = res.data.brand

    }
    @action
    async goodsRelated(){
        this.id = sessionStorage.getItem('id')
        let res = await goodsRelated(this.id)
        console.log(res)
    }
}

export default HomeStore