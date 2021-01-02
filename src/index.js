import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'; //Axios: HTTP client, dựa trên Promise => hỗ trợ xây dựng API
import reducers from './reducers';  
//Reducer: action handlers, kết nối giữa action và store => những thay đổi trong state. 
//VD: Nếu chúng ta dispatch một action là ADD_USER vào trong store, chúng ta có thể có một reducer nhận action đó và thêm user mới vào trong state
import {Provider} from 'react-redux'; //Provider: giúp cho ta truy cập store và tất cả function của nó ở tất cả các component con.
import {createStore, applyMiddleware} from 'redux';  //Store: Nơi lưu các state
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api';

//Middleware: trung gian giữa request/response (tương tác với người dùng) và các xử lý logic bên trong web server
//Kiểm soát các action được thực hiện
const sagaMiddleware = createSagaMiddleware();  //Tạo 1 middleware
const store = createStore(reducers,applyMiddleware(sagaMiddleware)); //Gán middleware vào store
sagaMiddleware.run(rootSaga);  //middleware: gọi vào rootSaga

ReactDOM.render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>,*/

  <Provider store = {store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
