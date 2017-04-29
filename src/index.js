/**
 * Created by anurag on 29/4/17.
 */
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import App from './component/app.component';
import store from './stores/app.store';

render(
    <Provider store = { store } >
        <App />
    </Provider>,
    document.getElementById('app')
)