import React from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Viggoluke from '../../Components/Viggoluke/Viggoluke';
import Header from '../../Components/Header/Header';

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
            calendarStatus: 'early',
            showText: false,
            data: null
        }
    }

    async componentDidMount() {
        this.setCalendarStatus();        
        const result = await fetch('http://kaja.me/wp-json/acf/v3/2016_luker?per_page=24');
        let luke = await result.json();
        luke = luke.reverse();
        console.log(luke[this.lukeId-1]);
        this.setState({data: luke[this.lukeId-1]});
        
    }

    setCalendarStatus = () => {
        if (this.todaysDate < this.startDate) {
            console.log('Calendarstatus satt til early, for vi har ikke startet ennå');
            this.setState({calendarStatus: 'early', showText: false});
        }
        else if (this.todaysDate > this.endDate) {
            console.log('Calendarstatus satt til done, for vi er faktisk ferdig med denne kalenderperioden');
            this.setState({calendarStatus: 'done', showText: false});
        }
        else if (this.lukeId > this.endDay) {
            console.log('Calendarstatus satt til humbug, for vi er i rikig periode med legger inn ugyldig luke-id');
            this.setState({calendarStatus: 'humbug', showText: false});
        }
        else if (this.lukeId > this.todaysDay) {
            console.log('Calendarstatus satt til future, for vi er i riktig periode men åpner en fremtidig luke');
            this.setState({calendarStatus: 'future', showText: false});
        }
        else if (this.lukeId > this.startDay || this.lukeId == this.startDay) {
            this.getLukeHeading();
            if (this.lukeId == this.todaysDay) {
                console.log('Calendarstatus satt til today, for vi er i riktig periode OG det er i dag!');
                this.setState({calendarStatus: 'today', showText: true});
            } else {
                console.log('Calendarstatus satt til open, for vi er i riktig periode og ser en tidligere åpnet luke');
                this.setState({calendarStatus: 'open', showText: true});
            }
        } else {
            this.setState({calendarStatus: 'lol', showText: false});
            console.log('Calendarstatus satt til lol, for dette makes no sense. Bunnslamresultat');
        }
        return this.state.calendarStatus;
    }

    getCalendarStatus = () => {
        return this.state.calendarStatus;
    }

    getLukeHeading(hepp) {
        
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
                    {this.state.data && (
                        <Viggoluke 
                            lukeId = {this.lukeId}
                            nummer = {this.state.data && this.state.data.acf.nummer}
                            tekst = {this.state.showText && this.state.data && this.state.data.acf.tekst}
                            bilde = {this.state.showText && this.state.data && this.state.data.acf.bilde}
                            calendarStatus = {this.getCalendarStatus()}
                        />
                    )}
                    
                </div>
            </div>
		);
	}
}
