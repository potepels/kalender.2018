import React from 'react';
import './Viggoluke.scss';

class Viggoluke extends React.Component {
	constructor(props) {
        super(props);
        this.todaysDate = new Date();
        this.startDay = new Date('2018-11-01T00:00:01').getDate();
        this.endDay = new Date('2018-11-24T23:59:59').getDate();
        this.todaysDay = parseInt(this.todaysDate.getDate());
    }
    
    
	render() {
        let lukeContent = (
            <div className="c_viggoluke__inner">
                <p>Hmm, det virker som om det er noe rart her. Tror ikke denne luken fins...?</p>
            </div>
        );
        let extraClass = 'humbug';
        if (this.props.calendarStatus === 'open' || this.props.calendarStatus === 'today' || this.props.calendarStatus === 'done') {
            
            // console.log(this.props.bilde);
            lukeContent = (
                <div className="c_viggoluke__inner">
                    <h2>{this.props.nummer}. desember</h2>
                    <figure className="luke-image">
                        <img src={this.props.bilde.sizes.medium} alt="Hei hei" />
                        <p>{this.props.tekst}</p>
                    </figure>
                    <p>{this.props.tekst}</p>
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
        }

       return (
        <div className={`c_viggoluke c_viggoluke--${extraClass}`}>        
           {lukeContent}
        </div>
		);
	}
}
export default Viggoluke;