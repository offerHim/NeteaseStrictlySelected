import { observable, action, computed } from 'mobx'
import {getDetailInfo,getGoodList} from "../api/detail"

export default class DetailStore {
    @observable
    detailInfo: Array<any> = []

    @observable
    detailBox:any = {}

    @observable
    goodList:Array<any> = []

    @observable
    curIndex:number = 0

    @action
    async getDetailInfo(id:string,index:number){
        let res = await getDetailInfo(id)
        this.detailInfo = res.data.brotherCategory
        this.detailBox = res.data.currentCategory
        this.curIndex = index
    }

    @action
    async getGoodList (id:string){
        let res = await getGoodList(id)
        this.goodList = res.data.data
    }

}