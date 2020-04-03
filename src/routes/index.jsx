import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Posts from '../pages/Base/posts';
import UploadData from '../pages/Base/UploadData';
import Users from '../pages/System/users';
import Staffs from '../pages/Base/staffs';
import Reports from '../pages/Reports';
import HomePage from '../pages/Home/homePage';

const Routes = () => (
	<Switch>
		<Route exact path="/staffs" component={Staffs}/>
		<Route path="/upload-data" component={UploadData}/>
		<Route path="/users" component={Users}/>
		<Route path="/posts" component={Posts}/>
		<Route path="/reports" component={Reports}/>
		<Route path="/homepage" component={HomePage}/>
		<Redirect from="/*" to="/homepage" />
	</Switch>
)

export default Routes;