import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Buildhome from '../ui-components/Buildhome'
import Home from '../ui-components/Home'

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Buildhome}></Route>
				<Route path="/build" exact component={Home}></Route>
			</Switch>
		</BrowserRouter>
	)
}

export default Routes