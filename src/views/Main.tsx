import React, {  useEffect } from 'react'

import useStore from '../util/useStore'
import { useObserver } from 'mobx-react-lite';

const App: React.FC = () => {
  //引入store
  let store = useStore();
  let {cart} = store


  return useObserver(() => (
    <div className="App">
      
    </div>
  ))
}

export default App;
