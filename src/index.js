import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css';
import { BrowserRouter } from 'react-router-dom'; // builds URL
import { createStore, applyMiddleware } from 'redux'; // Creating Store, async requests to DB
import rootReducer from './redux/reducer'; // State changer
import { Provider } from 'react-redux'; //  passes state to the App component
import App from './Components/App'; // main wrapper. injects data to the Main
import thunk from 'redux-thunk'; // async actions to DB
import { database } from './database/config'; // DB

// create store
const store = createStore(rootReducer, // first arg - reducer. Always one
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // chrome redux webtool setup string
  applyMiddleware(thunk) // async actions to DB
);

ReactDOM.render( // ReactDOM.render(what, where)
  <Provider store={store}> // passes state to the App component
    <BrowserRouter> // builds URL
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')); // where
