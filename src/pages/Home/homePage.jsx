import React,{ Component } from 'react'
import PageTitle from '../../components/PageTitle';

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '首页',
      projectId: [],
      name: ''
    }
  }
  render () {
    let { projectId, name } = this.state
    return (
      <div>
        <PageTitle name={this.state.title}/>
      </div>
    )
  }
}
export default HomePage;