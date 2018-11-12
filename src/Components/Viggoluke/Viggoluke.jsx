import React from 'react';
import './Viggoluke.scss';

class Viggoluke extends React.Component {
	constructor(props) {
        super(props);
        this.todaysDate = new Date();
        // this.startDate = new Date('2018-11-01T00:00:01');
        this.startDay = new Date('2018-11-01T00:00:01').getDate();
        // this.endDate = new Date('2018-11-24T23:59:59');
        this.endDay = new Date('2018-11-24T23:59:59').getDate();
        this.todaysDay = this.todaysDate.getDate();
        
        // this.state = {
        //     lukeStatus: 'early'
        //   };
        console.log(props);
    }
    
    
	render() {
        let lukeContent;
        let extraClass;
        if (this.props.lukeId > this.endDay) {
            extraClass= 'c_viggolukke--cheater'; 
            lukeContent = (
                <div>
                    <h2>Denne datoen fins ikke engang!</h2>
                </div>
            )
        }
        else if (this.props.lukeId > this.todaysDay) {
            extraClass= 'c_viggolukke--future'; 
            lukeContent = (
                <div>
                    <h2>Nå hoppet du litt langt frem i tid...</h2>
                </div>
            )
        }
        else if (this.props.lukeId > this.startDay || this.props.lukeId == this.startDay) {
            // this.getDataFromLuke(this.props.calendarUrl);
            if (this.props.lukeId == this.todaysDay) {
                extraClass= 'c_viggolukke--open c_viggoluke--today'; 
                lukeContent = (
                    <div>
                        <h2>Ja, det har starta, OG det er i dag!</h2>
                    </div>
                )
            } else {
                extraClass= 'c_viggolukke--open'; 
                lukeContent = (
                    <div>
                        <h2>Ja, det har starta</h2>
                    </div>
                )
            }
            
        } else {
            extraClass= 'c_viggolukke--magic';
            lukeContent = (
                <div>
                    <h2>Nei, nå tror jeg du tøyser. Hvordan havnet du her egentlig?</h2>
                </div>
            )
        }
		return (
        <div className={`c_viggoluke ${extraClass}`}>
            {this.props.calendarStatus}
            {/* {lukeContent} */}
        </div>
		);
	}
}
export default Viggoluke;