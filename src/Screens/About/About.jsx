import React from 'react';
import Header from '../../Components/Header/Header';

const About = () => (
    <div className="t_about">
        <Header />
        Hva daaaa
    </div>
);

export default About;

// import React from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import Header from '../../Components/Header/Header';

// export default class About extends React.Component {
// 	render() {
// 		return (
// 		<TransitionGroup>
// 			<CSSTransition key={window.location.key} classNames="fade" timeout={300} appear>
// 				<div className="wrapper">
// 					<div className="center-content">
// 						<Header />
// 					</div>
// 				</div>
// 			</CSSTransition>
// 		</TransitionGroup>
// 		);
// 	}
// }
