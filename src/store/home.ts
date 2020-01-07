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

    @action
    async home(){
        let res = await home()
        console.log(res.data)
        this.channel = res.data.channel
        this.brandList = res.data.brandList
    }
}

export default HomeStore