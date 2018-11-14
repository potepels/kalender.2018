import React from 'react';
import Luke from './Listeluke/Listeluke';
// import ShuffleArray from 'shuffle-array';
import './Calendar.scss';

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            luker: [],
            }
        this.hasItStartedYet = this.hasItStartedYet.bind(this);
        this.startDate = new Date('2018-11-01T00:00:01');
        this.endDate = new Date('2018-11-24T23:59:59');
        this.todaysDate = new Date();
        this.todaysDay = this.todaysDate.getDate();
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
                return <Luke
                key={index}
                tekst = {luke.acf.tekst}
                bilde = {luke.acf.bilde}
                nummer = {luke.acf.nummer}
                calendarStatus = {this.state.calendarStatus}
                todaysDay = {this.todaysDay}
            />            
        })
        
		return (
      <div className="c_calendar">
          <div className="g_center-content">               
              <div className="c_calendar__luker">
              {luker}
              </div>
          </div>
      </div>
		);
	}
}
