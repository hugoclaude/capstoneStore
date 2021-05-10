import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import './actions./style/main.scss'./actions;

import Layout from './components/layout';
// import About from '/components/about';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Account from './components/account/account';
import Shop from './components/shop/shop';
import Review from './components/order/review';
import Shipping from './components/information/shipping';
import Payment from './components/information/payment';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={history}>
            <Layout>
                <Switch>
                    <Route path='/' exact component={About}/>
                    <Route path='/signin' exact component={Signin}/>
                    <Route path='/signup' exact component={Signup}/>

                    <Route path='/account' exact component={Account}/>

                    <Route path='/shop' exact component={Shop}/>
                    <Route path='/order/review' exact component={Review}/>

                    <Route path='/information/shipping' exact component={Shipping}/>
                    <Route path='/information/payment' exact component={Payment}/>
                </Switch>
            </Layout>
        </Router>
            
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
