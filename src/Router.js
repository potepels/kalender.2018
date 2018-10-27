import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './Screens/Home/Home';
import About from './Screens/About/About';
import NoMatch from './Screens/NoMatch/NoMatch';

export default () => (
	<Router>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route exact path="/hva-daaa" component={About} />
			<Route path="/kaja.me.2018/wp-admin" exact />
			<Route component={NoMatch} />
		</Switch>
	</Router>
);