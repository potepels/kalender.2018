import React from 'react';
import { Link } from 'react-router-dom';
import './Viggoluke.scss';

class Viggoluke extends React.Component {
	constructor(props) {
        super(props);
        // this.todaysDate = new Date();
        this.todaysDate = new Date('2018-11-16T00:00:01');
        // this.todaysDay = parseInt(this.todaysDate.getDate());
        // this.startDate = new Date('2018-12-01T00:00:01');
        // this.endDate = new Date('2018-12-24T23:59:59');
        this.startDate = new Date('2018-11-06T00:00:01');
        this.endDate = new Date('2018-11-30T23:59:59');
        this.startDay = this.startDate.getDate();
        this.endDay = this.endDate.getDate();
        this.todaysDay = parseInt(10);
        this.state = {
            firstDay: false,
            lastDay: false,
        }
        console.log('hei');
    }

    getPrevDay = () => {        
        const prevDay = this.props.nummer - 1;
        return prevDay;        
    }
    
    getNextDay = () => {        
        const nextDay = this.props.nummer + 1;
        return nextDay;        
    }
    
	render() {
        let lukeContent = (
            <div className="c_viggoluke__inner">
                <p>Hmm, det virker som om det er noe rart her. Tror ikke denne luken fins...?</p>
            </div>
        );
        let extraClass = 'humbug';
        console.log('hei2');
        if (this.props.calendarStatus === 'open' || this.props.calendarStatus === 'today' || this.props.calendarStatus === 'done') {
            console.log('hei3');
            lukeContent = (
                <div className="c_viggoluke__inner">
                    <h2>{this.props.nummer}. desember</h2>
                    <figure className="luke-image">
                        <img src={this.props.bilde && this.props.bilde.sizes.medium_large} alt="Hei hei" />
                    </figure>
                    <p>{this.props.tekst}</p>
                    <div className="inner__navigation">
                        {/* <Link to={`/luke/${this.getPrevDay()}`}>Forrige dag</Link> */}
                        <Link to="/luke/10">Forrige dag</Link>
                        <Link to="">Neste dag</Link>
                    </div>
                </div>
            );
            extraClass = 'open';
        } else if (this.props.calendarStatus === 'future') {
            lukeContent = (
                <div className="c_viggoluke__inner">
                    <h2>Nei, din snik!</h2>
                    <p>Nå prøver du å hoppe litt frem i tid, og det går ikke.</p>
                </div>
            );
            extraClass = 'future';
        } else if (this.props.calendarStatus === 'humbug' || this.props.calendarStatus === 'lol') {
            lukeContent = (
                <div className="c_viggoluke__inner">
                    <p>Nei, denne fins jo ikke engang.</p>
                </div>
            );
            extraClass = 'humbug';
        } else if (this.props.calendarStatus === 'early') {
            lukeContent = (
                <div className="c_viggoluke__inner">
                    <h2>Nå er du tidlig ute!</h2>
                    <p>Vi har jo ikke engang startet ennå! Kalenderen åpner 1. desember :)</p>
                </div>
            );
            extraClass = 'early';
        } 

       return (
        <div className={`c_viggoluke c_viggoluke--${extraClass}`}>
           {lukeContent}
        </div>
		);
	}
}
export default Viggoluke;