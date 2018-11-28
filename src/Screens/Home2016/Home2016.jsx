import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from '../../Components/Header/Header';
import Calendar from '../../Components/Calendar/Calendar';

export default class Home2016 extends React.Component {
	constructor(props) {
		super(props);
		this.todaysDate = new Date();
        this.todaysDay = this.todaysDate.getDate();
	}
	render() {

		return (
		<TransitionGroup>
			<CSSTransition key={window.location.key} classNames="fade" timeout={300} appear>
				<div className="wrapper">
					<div className="center-content">
						<Header />
						<Calendar calendarUrl="http://kaja.me/wp-json/acf/v3/2016_luker?per_page=24"/>
						<span>En løpehund her?</span>
					</div>
				</div>
			</CSSTransition>
		</TransitionGroup>
		);
	}
}
