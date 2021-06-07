import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Fields } from 'redux-form';
import * as actions from '../../actions';

import PageTitle from '../pageTitle';
import ReviewForm from '../reviewForm';

class Review extends Component {


    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setHeaderLinks([]);
    }

    onSubmit = (fields) => {
        console.log('fields');
    }

    render () {
        let subtotal = 0;
        this.props.cartProducts.map(cartProduct => {
            subtotal += cartPrduct.quantity * cartProduct.product.price;
        })
        return (
            <div className='review'>
                <PageTitle className='review__pageTitle' title='Order Review' />
                <ReviewForm className='review__form' onSubmit={this.onSubmit} subtotal={subtotal} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return { cartProducts }
}

Review = connect(mapStateToProps, actions)(Review);

export default Review;