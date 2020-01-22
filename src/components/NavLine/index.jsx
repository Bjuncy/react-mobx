import React, { Component } from 'react';
import { Breadcrumb, Icon } from 'antd';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import './style.css'

@inject('menusState')
@observer
class NavLine extends Component {
  change (index) {
    this.props.menusState.replace(index)
  }
  deleted (index) {
    this.props.menusState.deleted(index)
  }
  render () {
    return (
      <Breadcrumb style={{backgroundColor: '#fff', padding: '2px', marginTop: '1px'}}>
        <Breadcrumb.Item>
          <Icon type="left" style={{ width: '24px', backgroundColor: '#fff'}} />
        </Breadcrumb.Item>
        {
          this.props.menusState.routerStore.map((item, index) => {
            return (
              <Breadcrumb.Item key={item.id} className={item.current ? 'active' : null}>
                <Link to={`/${item.routeName}`} onClick={() => this.change(index)}>{item.name}</Link>
                <Icon type="close" style={{fontSize: '10px'}} onClick={() => this.deleted(index)} />
              </Breadcrumb.Item>
            )
          })
        }
        
      </Breadcrumb>
    )
  }
}
export default NavLine