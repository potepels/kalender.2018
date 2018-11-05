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
        this.state = {luker: []}
        this.myDate = new Date('1988-08-29T12:59-0500');
        this.toDaysDate = new Date();
        // this.calendarUrl = this.props.calendarUrl;
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
    }
	render() {
        let luker = this.state.luker.map((luke, index) => {
            return <Luke
                hepp = {luke.acf.tekst}
            />
        })
        
        
		return (
            <div className="c_calendar">
                <div className="center-content">
                    <p>Varfor {this.props.calendarUrl}</p>
                    Kaendar : )
                    <Moment date>{this.toDaysDate}</Moment>
                    <h3>Min bursdag: <Moment date={this.myDate}/></h3>
                    <FontAwesomeIcon className="alicorn" icon={faAlicorn} />
                    {luker}
                </div>
            </div>
		);
	}
}
