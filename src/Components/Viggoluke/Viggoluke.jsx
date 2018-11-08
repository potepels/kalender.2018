import React from 'react';

class Viggoluke extends React.Component {
	constructor(props) {
        super(props);
        this.todaysDate = new Date();
        this.startDate = new Date('2018-11-01T00:00:01');
        this.startDay = this.startDate.getDate();
        this.endDate = new Date('2018-11-24T23:59:59');
        this.endDay = this.endDate.getDate();
        this.todaysDay = this.todaysDate.getDate();
        this.state = {
            lukeStatus: 'early'
          };
        console.log(props);
	}
	render() {
        let lukeContent;
        if (this.props.lukeId == this.todaysDay) {
            lukeContent = (
                <div>
                    <h2>Dette er dagens luke!</h2>
                </div>
            )
        } else if (this.props.lukeId > this.endDay) {
            lukeContent = (
                <div>
                    <h2>Du kan ikke hoppe frem i tid!</h2>
                    <p>Bilde av en spå-Momo åååååh</p>
                </div>
            )
        } else {
            lukeContent = (
                <div>
                    <h2>Nei, nå tror jeg du tøyser. Denne datoen fins ikke engang.</h2>
                </div>
            )
        }
		return (
        <div className="c_viggoluke">
            Er det åpent her da? Dette er id {this.props.lukeId}
            <h2>End {this.endDay}</h2>
            <h2>Start {this.startDay}</h2>
            <h2>Luka {this.props.lukeId}</h2>
            {/* {this.todaysDay} */}
            {lukeContent}
        </div>
		);
	}
}
export default Viggoluke;