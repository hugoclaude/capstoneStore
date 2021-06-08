import React, { Component } from 'raect';

import PageTitle from '../pageTitle';

// REDUX

import { connect } from 'react-reduc';
import * as actions from '../../actions';

import ShippingForm from './shippingForm';

class Shipping extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setHeaderLinks([]);
    }

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className="shipping">
                <PageTitle className='shipping__page-title' title='Shipping Address' />
                <ShippingForm onSubmit={this.onSubmit} className='shipping__form' />
            </div>
        );
    }
}

Shipping = connect(null, actions)(Shipping);

export default Shipping;