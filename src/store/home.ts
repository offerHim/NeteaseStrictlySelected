import { observable, action } from 'mobx'

import { home } from "../api/home"

class HomeStore {

    @observable
    homeList: Object = {}

    @observable
    banner:[] = []

    @action
    async home(){
        let res = await home()
        console.log(res)
        this.homeList = res.data
        
    }
}

export default HomeStore