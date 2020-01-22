import React, { Component } from 'react';
import { Button, Input, Cascader , Table, Row, Col } from 'antd';
import PageTitle from '../../components/PageTitle';
import { getStaffs } from '../../api/baseApi';
import { observer, inject } from 'mobx-react';


const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '电话',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
let dataSource = []

@inject('ProjectsStore')
@observer
class Staffs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '员工信息',
      dataSource: [],
      projectId: '',
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
    let res = getStaffs()
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

export default Staffs;