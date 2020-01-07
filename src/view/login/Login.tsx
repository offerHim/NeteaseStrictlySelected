import React from 'react'
import useStore from '../../util/useStore'
import { useObserver } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom'

const App: React.FC = () => {
  //引入store
  let store = useStore();

  let { login } = store
  let history = useHistory();
  let userInfo = async () => {
    await login.login()
    if (login.userInfo && Object.values(login.userInfo).length > 0) {
      history.push('/main')
    } else {
      alert("您输入的信息有误！")
    }
  }

  return useObserver(() => (
    <div className="Login">
      <div className="logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="" />
      </div>
      <div className="loginMain">
        <div className="ipt">
          <input type="text" placeholder='请输入手机号码' value={login.user} onChange={e => login.changeUser(e.target.value)} />
        </div>
        <div className="ipt">
          <input type="password" placeholder='请输入密码' value={login.pwd} onChange={e => login.changePwd(e.target.value)} />
        </div>
        <div className="btn">
          <input type="button" value="登 陆" onClick={() => userInfo()} />
        </div>
      </div>
    </div>
  ))
}

export default App;
