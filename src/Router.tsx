import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';

export default function RouterComponent(): JSX.Element {
	return (
		<HashRouter>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</HashRouter>
	);
}
