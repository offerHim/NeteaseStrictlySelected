import { observable, action } from 'mobx'

import { home } from "../api/home"

interface ItemType {
    channel:any
}
class HomeStore {
    
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

    @action
    async home(){
        let res = await home()
        console.log(res.data)
        this.channel = res.data.channel
        this.brandList = res.data.brandList
        this.newGoodsList = res.data.newGoodsList
        this.hotGoodsList = res.data.hotGoodsList
        this.topicList = res.data.topicList
        this.categoryList = res.data.categoryList
    }
}

export default HomeStore