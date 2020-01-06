import React from 'react';
import useStore from '../../utils/useStore'

import './index.min.css'


const Login: React.FC = () => {
  let store = useStore()
  let {login} = store
  
  return <div className="login_div">
      <div className="imgdiv">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
      </div>
      <div className="from">
          <p><input type="text" placeholder="请输入账号" /></p>
          <p><input type="password" name="" id="" placeholder="请输入密码" /></p>
          <button onClick={()=>login.tologin()}>登录</button>
      </div>
  </div>
}

export default Login;