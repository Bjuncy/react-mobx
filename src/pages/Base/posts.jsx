import React, { Component } from 'react';
import { Button, Input, Cascader , Table, Row, Col } from 'antd';
import PageTitle from '../../components/PageTitle';
import { getPostManager } from '../../api/baseApi';
import { observer, inject } from 'mobx-react';


const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '岗位',
    dataIndex: 'post',
    key: 'post',
  },
  {
    title: '工作性质',
    dataIndex: 'property',
    key: 'property',
  },
  {
    title: '班次',
    dataIndex: 'times',
    key: 'times',
  },
];
let dataSource = []

@inject('ProjectsStore')
@observer
class PostManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '岗位管理',
      dataSource: [],
      projectId: [],
      name: ''
    }
    this.onChangeProject = this.onChangeProject.bind(this);
    this.onChangeLabel = this.onChangeLabel.bind(this);
  }
  onChangeProject(e) {
    let res = e
    this.setState(state => ({projectId: res}));
  }
  onChangeLabel(e) {
    let res = e.target.value
    this.setState(query => ({name: res}));
  }
  componentDidMount () {
    let res = getPostManager({page: 1, size: 10})
    dataSource = res.result
    for (let item of dataSource) {
      item['key'] = item['id']
    }
    this.setState(state => ({ dataSource: dataSource }));
  }
  render () {
    let { projectId, name } = this.state
    return (
      <div>
        <PageTitle name={this.state.title}/>
        <Row type="flex" align="middle" justify="start" gutter={20} style={{margin: '10px 0 30px 0'}}>
          <Col span={8}>
            <Cascader options={this.props.ProjectsStore.projects} onChange={this.onChangeProject} value={projectId} placeholder="Please select" style={{width: '100%'}} />
          </Col>
          <Col>
            标签名称：
          </Col>
          <Col>
            <Input placeholder="Basic usage" vale={name} onChange={this.onChangeLabel} />
          </Col>
          <Col>
            <Button type="primary">查询</Button>
          </Col>
        </Row>
        <Table dataSource={dataSource} columns={columns} bordered style={{margin: '10px'}}/>
      </div>
    )
  }
}

export default PostManager;