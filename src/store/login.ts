import React from 'react'

import {observable, action, computed} from 'mobx'

export default class LoginStore{
    @action
    tologin(){
        console.log("66")
    }
}