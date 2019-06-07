import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";
import {Provider} from "react-redux";
import {store} from './store/configureStore'


const Root = ()=>{
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    )
};

ReactDOM.render(<Root/>, document.getElementById('root'));

