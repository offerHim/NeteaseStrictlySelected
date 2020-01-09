import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './router/index';
// 引入StoreContext的Provider
import StoreContext from './context/StoreContext'
import store from './store/index'
import 'antd-mobile/lib/date-picker/style/css';


ReactDOM.render(<StoreContext.Provider value={store}>
    <App />
</StoreContext.Provider>, document.getElementById('root'));

