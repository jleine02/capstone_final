import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App';

import './index.scss';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

const rootElement = document.getElementById('root');

render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    rootElement
);