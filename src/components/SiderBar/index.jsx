import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon} from 'antd';
import { observer, inject } from 'mobx-react'
const { Sider } = Layout;
const { SubMenu } = Menu;

@inject('MenusStore')
@inject('menusState')
@observer

class SiderBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuIds: ''
    }
  }
  pickMenu (item) {
    item = Object.assign({}, item, {current: true})
    this.props.menusState.add(item)
    this.setState({ menuIds: item.id })
  }
  render () {
    return (
      <Sider
        trigger={null}
        collapsed={this.props.menusState.obj.collapsed}
        collapsible>
        <div className="logo"/>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={this.props.menusState.obj.selectedKeys}>
          {
            this.props.MenusStore.menus.map(v => {
              if (v.sub.length) {
                return (
                  <SubMenu key={v.id} title={<span><Icon type="user" /><span>{v.name}</span></span>}>
                    {
                      v.sub.map(k => {
                        return (
                          <Menu.Item key={k.id} onClick={() => this.pickMenu(k)}>
                            <Link to={`/${k.routeName}`}>{k.name}{k.routeName}</Link>
                          </Menu.Item>
                        )
                      })
                    }
                  </SubMenu>
                )
              } else {
                return (
                  <Menu.Item key={v.id}>
                    <Link to={`/${v.routeName}`}>
                      <Icon type="user" />
                      {v.name}{v.routeName}
                    </Link>
                  </Menu.Item>
                )
              }
            })
          }
        </Menu>
      </Sider>
    )
  }
};
export default withRouter(SiderBar);