import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from '../../Components/Header/Header';
import Games from '../../Components/Circus/GameWrapper/GameWrapper';
// import Calendar from '../../Components/Calendar/Calendar';

export default class Home extends React.Component {
	render() {
		return (
		<TransitionGroup>
			<CSSTransition key={window.location.key} classNames="fade" timeout={300} appear>
				<div className="wrapper">
					<div className="center-content">
						<Header />
						<Games />
					</div>
				</div>
			</CSSTransition>
		</TransitionGroup>
		);
	}
}
