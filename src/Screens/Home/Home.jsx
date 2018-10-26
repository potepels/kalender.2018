import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from '../../Components/Header/Header';

export default class Home extends React.Component {
	render() {
		return (
		<TransitionGroup>
			<CSSTransition key={window.location.key} classNames="fade" timeout={300} appear>
				<div className="wrapper">
					<div className="center-content">
						<Header />
					</div>
				</div>
			</CSSTransition>
		</TransitionGroup>
		);
	}
}
