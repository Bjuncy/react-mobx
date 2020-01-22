import React, { Component } from 'react';
import './layout.css';
import SiderBar from '../../components/SiderBar';
import { Layout } from 'antd';
import Head from '../../components/Head';
import NavLine from '../../components/NavLine';
import Contents from '../../components/Contents';
import { observer, inject } from 'mobx-react';

@inject('MenusStore')
@inject('ProjectsStore')
@observer

class Home extends Component {
  componentDidMount () {
    this.props.MenusStore.getMenus();
    this.props.ProjectsStore.getProjects();
  }
  render () {
    return (
      <Layout style={{ minHeight: '100vh'}}>
        <SiderBar />
        <Layout>
          <Head />
          <NavLine />
          <Contents />
        </Layout>
      </Layout>
    )
  }
}
export default Home;