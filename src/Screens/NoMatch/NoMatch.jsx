import React from 'react';
import Header from '../../Components/Header/Header';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default class NoMatch extends React.Component {
	render() {
		return (
		<TransitionGroup>
			<CSSTransition key={window.location.key} classNames="fade" timeout={300} appear>
				<div className="wrapper">
					<div className="center-content">
						<Header />
						<h1>404</h1>
						<p>Det er kanskje ikke hva du så etter, men du kan jo spille litt kazoo så lenge.</p>
                        <p>Kazoo</p>
						{/* <img src={kazoo} alt="Logo" />; */}
					</div>
				</div>
			</CSSTransition>
		</TransitionGroup>
		);
	}
}