import { observable, action } from 'mobx'

import { special } from "../api/special"
import { specialType } from '../util/type'
 

class specialStore{

    @observable
    specialList:specialType[]=[]

    @action
    async special(){
        let res = await special()
        console.log(res.data.data)
        this.specialList = res.data.data
    }
}

export default specialStore