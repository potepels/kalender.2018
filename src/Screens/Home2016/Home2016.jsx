import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from '../../Components/Header/Header';
import Calendar from '../../Components/Calendar/Calendar';

export default class Home2016 extends React.Component {
	constructor(props) {
		super(props);
		this.todaysDate = new Date();
		this.todaysDay = this.todaysDate.getDate();
		this.state = {
			isLoading: true,
		}
	}
	render() {

		return (
		<div className="wrapper">
			<div className="center-content">
				<Header />
				<Calendar calendarUrl="http://kaja.me/wp-json/acf/v3/2016_luker?per_page=24"/>
			</div>
		</div>
		);
	}
}
