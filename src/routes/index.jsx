import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Posts from '../pages/Base/posts';
import UploadData from '../pages/Base/UploadData';
import Users from '../pages/System/users';
import Staffs from '../pages/Base/staffs';
import Reports from '../pages/Reports/index';

const Routes = () => (
	<Switch>
		<Route exact path="/staffs" component={Staffs}/>
		<Route path="/upload-data" component={UploadData}/>
		<Route path="/users" component={Users}/>
		<Route path="/posts" component={Posts}/>
		<Route path="/reports" component={Reports}/>
	</Switch>
)

export default Routes;