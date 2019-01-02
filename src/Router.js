import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './Screens/Home/Home';
import Home2016 from './Screens/Home2016/Home2016';
import About from './Screens/About/About';
import Dogs from './Screens/Dogs/Dogs';
import Luke from './Screens/Luke/Luke';
import Library from './Screens/Library/Library';
import NoMatch from './Screens/NoMatch/NoMatch';


export default () => (
	<Router>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/2016" exact component={Home2016} />
			<Route exact path="/hva-er-dette" component={About} />
			<Route exact path="/om-hundene" component={Dogs} />
			<Route exact path="/bibliotek" component={Library} />
			<Route path="/luke/:id" component={Luke} />
			<Route path="/kaja.me.2018/wp-admin" exact />
			<Route component={NoMatch} />
		</Switch>
	</Router>
);