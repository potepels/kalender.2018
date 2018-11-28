import React from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Viggoluke from '../../Components/Viggoluke/Viggoluke';
import Header from '../../Components/Header/Header';

export default class Luke extends React.Component {
	constructor(props) {
        super(props);
        this.lukeId = parseInt(props.match.params.id);

        // this.todaysDate = new Date();
        this.todaysDate = new Date('2018-11-16T00:00:01');
        this.todaysDay = this.todaysDate.getDate();
        // this.todaysDay = parseInt(10);
        // this.startDate = new Date('2018-11-01T00:00:01');
        // this.endDate = new Date('2018-11-24T23:59:59');
        this.startDate = new Date('2018-11-06T00:00:01');
        this.endDate = new Date('2018-11-30T23:59:59');
        // this.startDate = new Date('2018-12-01T00:00:01');
        // this.endDate = new Date('2018-12-24T23:59:59');
        // this.todaysDay = parseInt(this.todaysDate.getDate());
        this.startDay = parseInt(this.startDate.getDate());
        this.endDay = parseInt(this.endDate.getDate());
        this.state = {
            calendarStatus: 'early',
            showText: false,
            data: null
        }
    }

    async getLuke (id) {
        this.setCalendarStatus();        
        const result = await fetch('http://kaja.me/wp-json/acf/v3/2016_luker?per_page=24');
        let luke = await result.json();
        luke = luke.reverse();
        this.setState({data: luke[id]});
    }

    async componentDidMount() {
        this.getLuke(this.lukeId-1);
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.match.params.id !== this.props.match.params.id) {
            this.getLuke(this.props.match.params.id-1);
        }
    }

    setCalendarStatus = () => {
        if (this.todaysDate > this.endDate) {
            this.setState({calendarStatus: 'done', showText: true});
        }
        else if (this.lukeId > this.endDay) {
            this.setState({calendarStatus: 'humbug', showText: false});
        }
        else if (this.lukeId > this.todaysDay) {
            this.setState({calendarStatus: 'future', showText: false});
        }
        else if (this.todaysDate < this.startDate) {
            this.setState({calendarStatus: 'early', showText: false});
        }
        else if (this.lukeId > this.startDay || this.lukeId === this.startDay) {
            if (this.lukeId === this.todaysDay) {
                this.setState({calendarStatus: 'today', showText: true});
            } else {
                this.setState({calendarStatus: 'open', showText: true});
            }
        } else {
            this.setState({calendarStatus: 'lol', showText: false});
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
                <h2>{this.state.calendarStatus}</h2>
                <Header />
                <Viggoluke calendarStatus = {this.getCalendarStatus()} />
            </div>
        </div>
        );
	}
}
