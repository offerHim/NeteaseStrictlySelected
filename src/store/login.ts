import { observable, action } from 'mobx'

import { login } from "../api/login"

class LoginStore {

    @observable
    user: string = "15323807318"

    @observable pwd: string = "123456"

    @observable
    userInfo: Object = {}

    @action
    changeUser(val: string) {
        this.user = val
    }

    @action
    changePwd(val: string) {
        this.pwd = val
    }

    @action
    async login() {
        let params = {
            mobile: this.user,
            password: this.pwd
        }

        let res = await login(params)
        this.userInfo = res.data

    }
}

export default LoginStore