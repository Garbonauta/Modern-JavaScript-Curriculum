import React from 'react';
import {Route, HashRouter, Switch} from 'react-router-dom';
import Main from '../containers/Main';
import HomeContainer from '../containers/HomeContainer';
import ForecastContainer from '../containers/ForecastContainer';
import DetailContainer from '../containers/DetailContainer';

const routes = (
	<HashRouter>
		<div>
			<Main/>
			<Switch>
				<Route exact path='/' component={HomeContainer}/>
				<Route path='/forecast/:city' component={ForecastContainer}/>
				<Route path='/detail/:city' component={DetailContainer}/>
			</Switch>
		</div>
	</HashRouter>
);

export default routes
