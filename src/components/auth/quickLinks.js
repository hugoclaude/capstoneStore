import React, { Component } from "react";

import History from '../../history';

class QuickLinks extends Component {
    render() {
        const links = [
            {
                _id: 0,
                title: 'Not Registered? Create account here.',
                onClick: () => History.push('/signup'),
            },
            {
                _id: 1,
                title: 'Forgot account email?',
                onClick: () => console.log('forgot email'),
            },
            {
                _id: 2,
                title: 'Forgot password?',
                onClick: () => console.log('forgot password'),
            }
        ]
    }
};

export default QuickLinks;