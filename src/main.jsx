import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import userStore from "./RTK Store/CartStore";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={userStore}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
)
