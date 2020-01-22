import React, { Component } from 'react';
import { Layout } from 'antd';
import Routes from '../../routes';
const { Content } = Layout;

class Contents extends Component {
  render () {
    return (
      <Content
        style={{height: '100vh-88px', margin: 24, padding: 15, background: '#fff'}}>
        <Routes />
      </Content>
    )
  }
}
export default Contents