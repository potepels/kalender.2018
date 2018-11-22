import React from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Viggoluke from '../../Components/Viggoluke/Viggoluke';
import Header from '../../Components/Header/Header';

export default class Luke extends React.Component {
	constructor(props) {
        super(props);
        this.lukeId = parseInt(props.match.params.id);

        this.todaysDate = new Date();
        // this.todaysDay = 24;
        this.startDate = new Date('2018-11-01T00:00:01');
        this.endDate = new Date('2018-11-24T23:59:59');
        this.todaysDay = parseInt(this.todaysDate.getDate());
        this.startDay = parseInt(this.startDate.getDate());
        this.endDay = parseInt(this.endDate.getDate());
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
        console.log(parseInt(this.lukeId));
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
        else if (this.lukeId > this.startDay || this.lukeId === this.startDay) {
            console.log('Kommer jeg hit?');
            if (this.lukeId === this.todaysDay) {
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

	render() {
        if (this.state.data) {
            return (
                <div className="wrapper">
                    <div className="center-content">
                        <Header />
                        <Viggoluke 
                            lukeId = {this.lukeId}
                            nummer = {this.state.data && this.state.data.acf.nummer}
                            tekst = {this.state.showText && this.state.data && this.state.data.acf.tekst}
                            bilde = {this.state.showText && this.state.data && this.state.data.acf.bilde}
                            calendarStatus = {this.getCalendarStatus()}
                        />
                    </div>
                </div>
           
            );
        } 
        return (
        <div className="wrapper">
            <div className="center-content">
            hrhrh
                <Header />
                <Viggoluke calendarStatus = {this.getCalendarStatus()} />
            </div>
        </div>
        );
	}
}
