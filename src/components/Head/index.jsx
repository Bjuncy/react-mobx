import React, { Component } from 'react';
import { Layout, Icon, Row, Col } from 'antd';
const { Header } = Layout;

class Head extends Component {
  state = {
    collapsed: false
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render () {
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Row>
          <Col span={8}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Col>
          <Col span={6} offset={10}>
            <Row type="flex" align="middle" justify="start" gutter={20}>
              <Col>
                <Icon type="setting" style={{marginRinght: 5}} />
                常见问题
              </Col>
              <Col>
                <Icon type="bug" style={{marginRinght: 5}} />
                IT报事
              </Col>
              <Col>
                <Icon type="right-circle" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    )
  }
}
export default Head
