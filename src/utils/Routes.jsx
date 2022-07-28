import React from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import Build from '../ui-components/Build'
import Home from '../ui-components/Home'

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home}></Route>
				<Route path="/build" exact component={Build}></Route>
			</Switch>
		</BrowserRouter>
	)
}

export default Routes