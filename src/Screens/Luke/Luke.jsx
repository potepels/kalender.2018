import React from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Viggoluke from '../../Components/Viggoluke/Viggoluke';
import Header from '../../Components/Header/Header';
// import { faThumbsDown } from '@fortawesome/pro-light-svg-icons';

export default class Luke extends React.Component {
	constructor(props) {
        super(props);
        this.lukeId = props.match.params.id;

        this.todaysDate = new Date();
        this.todaysDay = this.todaysDate.getDate();
        this.startDate = new Date('2018-11-01T00:00:01');
        this.startDay = this.startDate.getDate();
        this.endDate = new Date('2018-11-24T23:59:59');
        this.endDay = this.endDate.getDate();
        this.state = {
            calendarStatus: 'early'
        }
    }

    setCalendarStatus = () => {
        if (this.todaysDate < this.startDate) {
            console.log('Calendarstatus satt til early, for vi har ikke startet ennå');
            this.setState({calendarStatus: 'early'});
        }
        else if (this.todaysDate > this.endDate) {
            console.log('Calendarstatus satt til done, for vi er faktisk ferdig med denne kalenderperioden');
            this.setState({calendarStatus: 'done'});
        }
        else if (this.lukeId > this.endDay) {
            console.log('Calendarstatus satt til humbug, for vi er i rikig periode med legger inn ugyldig luke-id');
            this.setState({calendarStatus: 'humbug'});
        }
        else if (this.lukeId > this.todaysDay) {
            console.log('Calendarstatus satt til future, for vi er i riktig periode men åpner en fremtidig luke');
            this.setState({calendarStatus: 'future'});
        }
        else if (this.lukeId > this.startDay || this.lukeId == this.startDay) {
            this.getLukeHeading();
            if (this.lukeId == this.todaysDay) {
                console.log('Calendarstatus satt til today, for vi er i riktig periode OG det er i dag!');
                this.setState({calendarStatus: 'today'});
            } else {
                console.log('Calendarstatus satt til open, for vi er i riktig periode og ser en tidligere åpnet luke');
                this.setState({calendarStatus: 'open'});
            }
        } else {
            this.setState({calendarStatus: 'lol'});
            console.log('Calendarstatus satt til lol, for dette makes no sense. Bunnslamresultat');
        }
        return this.state.calendarStatus;
    }


    componentDidMount() {
        this.setCalendarStatus();
        
        // this.hasItStartedYet();
        // this.hasItStartedYet();
        
    }
    
    getCalendarStatus = () => {
        return this.state.calendarStatus;
    }

    getLukeHeading(hepp) {
        // let dataUrl =  this.props.calendarUrl;
        
        console.log('Nei, bare om jeg er åpen da');
        // fetch(dataUrl)
        //     .then(response => response.json())
        //     .then(luker => this.setState({luker}))
        //     this.hasItStartedYet();
    }

	render() {
		return (
            <div className="wrapper">
                <div className="center-content">
                    <Header />
                    Detta er ei lukeside
                    <Viggoluke 
                        lukeId = {this.lukeId}
                        // heading = {() => this.hasItStartedYet()}
                        calendarStatus = {this.getCalendarStatus()}
                    />
                </div>
            </div>
		);
	}
}
