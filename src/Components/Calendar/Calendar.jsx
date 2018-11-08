import React from 'react';
// import Moment from 'react-moment';
// import 'moment-timezone';
import Luke from './Listeluke/Listeluke';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faAlicorn } from '@fortawesome/pro-light-svg-icons';
import './Calendar.scss';
// library.add(faAlicorn);

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            luker: [],            
            // calendarStatus: 'early'
            }
        this.hasItStartedYet = this.hasItStartedYet.bind(this);
        // this.getLuker = this.getLuker.bind(this);
        this.startDate = new Date('2018-11-01T00:00:01');
        this.endDate = new Date('2018-11-24T23:59:59');
        this.todaysDate = new Date();
        this.todaysDay = this.todaysDate.getDate();
        this.numberOfDays = 24;
        // this.lukeStatus = false;
    }

    componentDidMount() {
        let dataUrl =  this.props.calendarUrl;
        fetch(dataUrl)
            .then(response => response.json())            
            .then(luker => this.setState({luker: luker.reverse()}))
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
        
        // let heading;
        // let luker = this.state.luker.map()

        let luker = this.state.luker.map((luke, index) => {
            // console.log('Dette er en luke ');
            // if (index < this.todaysDay) {
                // this.lukeStatus = true;
                // this.calendarStatus = 'closed';
                // this.setState({calendarStatus: 'closed'})
            // }
                return <Luke
                key={index}
                tekst = {luke.acf.tekst}
                nummer = {luke.acf.nummer}
                lukeStatus = {this.lukeStatus}
                calendarStatus = {this.state.calendarStatus}
                todaysDay = {this.todaysDay}
            />
            
        })
        // console.log(this.calendarStatus);
        // if (this.state.calendarStatus === 'early') {
        //     heading = 'Du er for tidlig ute! Kom tilbake 1. desember :)';
        // } else if (this.state.calendarStatus === 'open') {
        //     heading = 'Jippi, kalender';
        // } else {
        //     heading = 'God jul! Kalenderen over for denne gang';
        // }
        
        
		return (
            <div className="c_calendar">
                <p>dette er dagens date {this.props.todaysDate}</p>
                <div className="center-content">
                    {this.todaysDay}                    
                    <div className="c_calendar__luker">
                    {luker}
                    </div>
                </div>
            </div>
		);
	}
}
