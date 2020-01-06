import React, {  useEffect } from 'react'
import useStore from '../util/useStore'
import { useObserver } from 'mobx-react-lite';

const App: React.FC = () => {
  //引入store
  let store = useStore();

  return useObserver(() => (
    <div className="Login">

    </div>
  ))
}

export default App;
