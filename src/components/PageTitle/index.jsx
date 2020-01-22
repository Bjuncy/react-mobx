import React, { Component } from 'react';

class PageTitle extends Component {
  render () {
    return (
      <h2 style={{fontSize: '16px', fontWeight: 'bold', padding: '10px'}}>
        {this.props.name}
      </h2>
    )
  }
}
export default PageTitle;