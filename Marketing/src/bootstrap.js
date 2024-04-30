import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

// Mount function
const mount = (el) => {
    ReactDom.render(
        <App />,
        el
    )
}

// Isolation development
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('_marketing_dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}

// mount based on param
export { mount };