import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from '../../Components/Header/Header';
import Calendar from '../../Components/Calendar/Calendar';
import palette from './palette.jpg';

export default class Home2016 extends React.Component {
	render() {
		return (
		<TransitionGroup>
			<CSSTransition key={window.location.key} classNames="fade" timeout={300} appear>
				<div className="wrapper">
					<div className="center-content">
						<Header />
						<Calendar calendarUrl="http://kaja.me/wp-json/acf/v3/2016_luker?_embed"/>
						2016 bitch
					</div>
					<div className="palette">
						<div className="palette__item"></div>
						<div className="palette__item"></div>
						<div className="palette__item"></div>
						<div className="palette__item"></div>
						<div className="palette__item"></div>
						<div className="palette__item"></div>
						<div className="palette__item"></div>
						<img src={palette} alt="lol"/>
					</div>
				</div>
			</CSSTransition>
		</TransitionGroup>
		);
	}
}
