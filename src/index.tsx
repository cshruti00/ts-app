import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './ts/components/app/App';
import './assets/stylesheets/index.scss';
import {Provider} from 'react-redux';
import {default as store} from './../src/ts/store/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
