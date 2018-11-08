import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Viggoluke from '../../Components/Viggoluke/Viggoluke';
import Header from '../../Components/Header/Header';

export default class Luke extends React.Component {
	constructor(props) {
        super(props);
        this.todaysDate = new Date();
        this.todaysDay = this.todaysDate.getDate();
        this.lukeId = props.match.params.id;
        this.hasItStartedYet = this.hasItStartedYet.bind(this);
    }

    componentDidMount() {
        this.hasItStartedYet();
    }

    
    hasItStartedYet() {
        if(this.todaysDate < this.startDate || this.todaysDate === this.startDate) {
            this.setState({calendarStatus: 'early'});
        }
        else if (this.todaysDate > this.endDate) {
            this.setState({calendarStatus: 'closed'});
        } 
        else {
            this.setState({calendarStatus: 'open'});
            // this.getLuker(this.todaysDay);
        }
    }
	render() {

		return (
		<TransitionGroup>
			<CSSTransition key={window.location.key} classNames="fade" timeout={300} appear>
				<div className="wrapper">
					<div className="center-content">
						<Header />
                        Detta er ei lukeside
                        <Viggoluke 
                            lukeId = {this.lukeId}
                        />
					</div>
				</div>
			</CSSTransition>
		</TransitionGroup>
		);
	}
}
