import React from 'react';
import Listeluke from './Listeluke/Listeluke';
import { Link } from 'react-router-dom';
import Spinner from '../../Components//Spinner/Spinner';
import './Calendar.scss';

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            luker: [],
            isLoading: true,
            }
        this.hasItStartedYet = this.hasItStartedYet.bind(this);
        this.startDate = new Date('2018-12-01T00:00:01');
        this.endDate = new Date('2018-12-24T23:59:59');
        // this.startDate = new Date('2018-11-06T00:00:01');
        // this.endDate = new Date('2018-11-30T23:59:59');
        this.todaysDate = new Date();
        this.todaysDay = this.todaysDate.getDate();
        // this.todaysDay = parseInt(10);
        this.numberOfDays = 24;
    }

    componentDidMount() {
        let dataUrl =  this.props.calendarUrl;
        fetch(dataUrl)
            .then(response => response.json())            
            .then(luker => this.setState({luker: luker.reverse()}))
            this.hasItStartedYet();
            
    }

    hasItStartedYet() {
        console.log('has it startes');
        if(this.todaysDate < this.startDate || this.todaysDate === this.startDate) {
            this.setState({calendarStatus: 'early'});
        }
        else if (this.todaysDate > this.endDate) {
            this.setState({calendarStatus: 'closed'});
        } 
        else {
            this.setState({calendarStatus: 'open'});
        }
    }
	render() {
        let luker = this.state.luker.map((luke, index) => {
            return <Listeluke
            key={index}
            tekst = {luke.acf.tekst}
            bilde = {luke.acf.bilde}
            nummer = {luke.acf.nummer}
            calendarStatus = {this.state.calendarStatus}
            todaysDay = {this.todaysDay}
            />            
        });
        
		return (
        <div className="c_calendar">
            <div className="g_center-content">

                {this.state.calendarStatus === 'closed' && (
                    <div className="c_calendar__intro-text">
                        <h2>Over for denne gang</h2>
                        <p>Jeg lover å stille med masse nytt innhold til neste år. Jeg er <strong>ikke</strong> ferdig med Momo og Sana! :)</p>
                    </div>)}
                    {this.state.calendarStatus === 'early' && (
                    <div className="c_calendar__intro-text">
                        <h2>Åpner 1. desember!</h2>
                        <p>Så koselig at du titter innom :) Jeg har dessverre ikke noe nytt innhold på kalenderen i år heller, jeg har rett og slett ikke hatt tid og ork. Men den gamle kalenderen har <Link to="/hva-er-dette">fått en ny drakt</Link>, og kanskje kan det være hyggelig å følge Momo og Sana hjem til jul en gang til.</p>
                    </div>)}
                    {this.state.calendarStatus === 'open' && (
                        <div className="c_calendar__luker"> 
                            {luker}                        
                        </div>
                    )}
                
            </div>
        </div>
		);
	}
}
