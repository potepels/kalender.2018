import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import Luke from './Luke/Luke';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAlicorn } from '@fortawesome/pro-light-svg-icons';
import './Calendar.scss';
library.add(faAlicorn);

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            luker: [],
            calendarEarly: false,
            calendarOpen: false,
            calendarClosed: false
            }
        this.hasItStartedYet = this.hasItStartedYet.bind(this);
        this.getLuker = this.getLuker.bind(this);
        this.myDate = new Date('1988-08-29T12:59-0500');
        this.startDate = new Date('2018-11-01T00:00:01');
        this.endDate = new Date('2018-11-05T23:59:59');
        this.todaysDate = new Date();
        this.todaysDay = this.todaysDate.getDate();
    }

    componentDidMount() {
        let dataUrl =  this.props.calendarUrl;
        fetch(dataUrl)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    luker: res
                })
            })
            this.hasItStartedYet();
    }

    getLuker(yo) {
        console.log(yo);
    }

    hasItStartedYet() {
        console.log(this.todaysDate);
        if(this.todaysDate < this.startDate || this.todaysDate == this.startDate) {
            this.setState({calendarEarly: true});
        }
        else if (this.todaysDate > this.endDate) {
            this.setState({calendarClosed: true});
        } 
        else {
            this.setState({calendarOpen: true});
            this.getLuker(this.todaysDay);

        }
    }
	render() {
        
        let heading;

        let luker = this.state.luker.map((luke, index) => {
            return <Luke
                key={index}
                hepp = {luke.acf.tekst}
            />
        })
        // Må sjekke om det er 1. eller 24. også
        if (this.state.calendarEarly) {
            heading = 'Du er for tidlig ute!';
        } else if (this.state.calendarOpen) {
            heading = 'Jippi, kalender';
        } else {
            heading = 'STENGT FFS';
        }
        
        
		return (
            <div className="c_calendar">
                <p>dette er dagens date {this.props.todaysDate}</p>
                <div className="center-content">
                    
                    {heading} {this.todaysDay}
                    <FontAwesomeIcon className="alicorn" icon={faAlicorn} />
                    {luker}
                </div>
            </div>
		);
	}
}
