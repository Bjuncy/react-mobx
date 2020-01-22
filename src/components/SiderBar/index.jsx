import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      arr: []
    }
  }
  pickMenu (item) {
    item = Object.assign({}, item, {current: true})
    this.props.menusState.add(item)
  }
  render () {
    return (
      <Sider>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
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
export default SiderBar;