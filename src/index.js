import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        {/* <BrowserRouter basename="/"> */}
        <App />
        {/* </BrowserRouter> */}
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
