import Cart from './cart'
import Login from './login'
import Home from './home'
import Special from './special'

//导入store

export default {
    cart: new Cart(),
    login:new Login(),
    home:new Home(),
    special:new Special()
}