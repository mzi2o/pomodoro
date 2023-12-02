import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Accueil from './Components/Accueil';
import { Provider } from 'react-redux';
import store from './Components/Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fragment>
      <Provider store={store}>
        <Accueil />
      </Provider>
    </Fragment>
  </React.StrictMode>
);

reportWebVitals();
