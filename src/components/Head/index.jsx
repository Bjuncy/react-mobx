import React, { Component } from 'react';
import { Layout, Icon, Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react'

const { Header } = Layout;
@inject('menusState')
@observer

class Head extends Component {
  state = {
    collapsed: this.props.menusState.obj.collapsed
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    }, () => {
      this.props.menusState.obj.collapsed = this.state.collapsed
    })
  }
  toPost = () => {
    this.props.history.push('/')
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
              <Col onClick={this.toPost}>
                <Icon type="setting" style={{marginRinght: 5}} />
                常见问题
              </Col>
              <Col onClick={this.toPost}>
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
export default withRouter(Head)
