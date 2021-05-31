import {
    SET_SHOP_CATEGORIES,
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID,
    FILTER_PRODUCTS_WITH_QUERY
} from './types';

export function filterProductsWithQuery (fields) {
    return ({
        type: FILTER_PRODUCTS_WITH_QUERY,
        payload: fields
    })
}

export function filterProductsWithCategoryId(_id) {
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id
    })
}

export function fetchShopCategories() {
    return ({
        type: SET_SHOP_CATEGORIES,
            payload: [
                {
                    _id: 0,
                    title: 'ALL'
                },
                {
                    _id: 1,
                    title: 'Winter'
                },
                {
                    _id: 2,
                    title: 'Spring'
                },
                {
                    _id: 3,
                    title: 'Summer'
                },
                {
                    _id: 4,
                    title: 'Fall'
                },
                {
                    _id: 5,
                    title: 'Holiday'
                },
            ]
    })
}

export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'Winter',
                description: 'Winter season themed playmat',
                price: 35.00,
                belongsTo: [0],
                imageUrl: 'http://via.placeholder.com/160x80'
            },
            {
                _id: 1,
                title: 'Spring',
                description: 'Spring season themed playmat',
                price: 35.00,
                belongsTo: [0],
                imageUrl: 'http://via.placeholder.com/160x80'
            },
            {
                _id: 2,
                title: 'Summer',
                description: 'Summer season themed playmat',
                price: 35.00,
                belongsTo: [0],
                imageUrl: 'http://via.placeholder.com/160x80'
            },
            {
                _id: 3,
                title: 'Fall',
                description: 'Fall season themed playmat',
                price: 35.00,
                belongsTo: [0],
                imageUrl: 'http://via.placeholder.com/160x80'
            },
            {
                _id: 4,
                title: 'Holiday',
                description: 'Holiday season themed playmat',
                price: 35.00,
                belongsTo: [0, 1, 2, 3, 4],
                imageUrl: 'http://via.placeholder.com/160x80'
            },
        ]
    })
}