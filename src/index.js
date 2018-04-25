import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css';
import { BrowserRouter } from 'react-router-dom'; // builds URL
import { createStore, applyMiddleware } from 'redux'; // Creating Store and middleware
import rootReducer from './redux/reducer'; // Reducer
import { Provider } from 'react-redux'; //  link state with an App
import App from './Components/App'; // Inject data to the Main component
import thunk from 'redux-thunk';
import { database } from './database/config';

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
