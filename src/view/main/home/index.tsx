import React, { useEffect } from 'react';
import './index.css'
import useStore from '../../../util/useStore'



const Home: React.FC = () => {

  let store = useStore()
  let {home} = store
  
  useEffect(()=>{
      home.home()
  })
  
  return   <div className="home_div">
      <div className="banner">
          <div className="banner_div">
              <div className="banner_img">

              </div>
              <div className="banner_img">
                
              </div>
          </div>
      </div>
  </div>
  
}

export default Home;