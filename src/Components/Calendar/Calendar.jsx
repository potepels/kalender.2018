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
        // this.state = {calendarOpen: false}
        // this.state = {calendarClosed: false}
        // this.state = {}
        this.state = {
            luker: [],
            calendarEarly: false,
            calendarOpen: false,
            calendarClosed: false
            }
        this.myDate = new Date('1988-08-29T12:59-0500');
        this.hasItStartedYet = this.hasItStartedYet.bind(this);
        this.startDate = new Date('2018-11-01');
        this.endDate = new Date('2018-11-24');
        this.todaysDate = new Date();
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
    hasItStartedYet() {
        console.log(this.todaysDate);
        //Er dagens dato lavere enn startdate
        if(this.todaysDate < this.startDate) {
            this.setState({calendarEarly: true});
        }
        // Er dagens dato høyere enn enddate
        else if (this.todaysDate > this.endDate) {
            console.log('Nei, nå er det ferdig');
            this.setState({calendarClosed: true});
        // Nei vel, ingen av dem. Da er det kalender da!
        } else {
            this.setState({calendarOpen: true});
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
                <div className="center-content">
                    
                    {heading}
                    <p>Varfor {this.props.calendarUrl}</p>
                    Kaendar : )
                    <h3>Min bursdag: <Moment date={this.myDate}/></h3>
                    <FontAwesomeIcon className="alicorn" icon={faAlicorn} />
                    {luker}
                </div>
            </div>
		);
	}
}
