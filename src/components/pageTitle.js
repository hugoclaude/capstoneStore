import React, { component } from 'react';

class PageTitle extends component {
  render () {
    const { className, title } = this.props
    return (
      <div className={`${className} page-title`}>{title}</div>
    )
  }
}

export default PageTitle;