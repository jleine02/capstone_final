import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";

import App from './App';
import {persistor, store} from "./store/store";

import './index.scss';
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById('root');

render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                    <App/>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    rootElement
);