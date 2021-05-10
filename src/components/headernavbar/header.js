import React, { Component } from 'react';

import { connect } from 'react-redux';
import History from '../../history';

class Header extends Component {
  render() {
    return (
      <div className='header'>\
        <img className='header__img' src='http://via.placeholder.com/650x73'/>
        <div className='header__links'>
          {
            this.props.headerlinks.map((link, index) => {
              return (
                <a className='header__link' key={index} onClick={() => History.push(link.path)}>
                  {link.title}
                </a>
              )
            })
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const{ headerLinks } = state.headerNavbar;
  return {
    headerLinks
  }
}

Header = connect(mapStateToProps)(Header);

export default Header;