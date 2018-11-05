import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from '../../Components/Header/Header';
import Calendar from '../../Components/Calendar/Calendar';

export default class Home extends React.Component {
	render() {
		return (
		<TransitionGroup>
			<CSSTransition key={window.location.key} classNames="fade" timeout={300} appear>
				<div className="wrapper">
					<div className="center-content">
						<Header />
						<Calendar calendarUrl="http://kaja.me/wp-json/acf/v3/luke?_embed"/>
					</div>
				</div>
			</CSSTransition>
		</TransitionGroup>
		);
	}
}
