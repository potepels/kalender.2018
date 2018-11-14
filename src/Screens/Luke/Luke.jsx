import React from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Viggoluke from '../../Components/Viggoluke/Viggoluke';
import Header from '../../Components/Header/Header';
// import { faThumbsDown } from '@fortawesome/pro-light-svg-icons';

export default class Luke extends React.Component {
	constructor(props) {
        super(props);
        this.lukeId = props.match.params.id;

        this.todaysDate = new Date();
        this.todaysDay = this.todaysDate.getDate();
        this.startDate = new Date('2018-11-01T00:00:01');
        this.startDay = this.startDate.getDate();
        this.endDate = new Date('2018-11-24T23:59:59');
        this.endDay = this.endDate.getDate();
        this.state = {
            calendarStatus: 'early',
            luker: []
        }
    }

    setCalendarStatus = () => {
        if (this.todaysDate < this.startDate) {
            console.log('Calendarstatus satt til early, for vi har ikke startet ennå');
            this.setState({calendarStatus: 'early'});
        }
        else if (this.todaysDate > this.endDate) {
            console.log('Calendarstatus satt til done, for vi er faktisk ferdig med denne kalenderperioden');
            this.setState({calendarStatus: 'done'});
        }
        else if (this.lukeId > this.endDay) {
            console.log('Calendarstatus satt til humbug, for vi er i rikig periode med legger inn ugyldig luke-id');
            this.setState({calendarStatus: 'humbug'});
        }
        else if (this.lukeId > this.todaysDay) {
            console.log('Calendarstatus satt til future, for vi er i riktig periode men åpner en fremtidig luke');
            this.setState({calendarStatus: 'future'});
        }
        else if (this.lukeId > this.startDay || this.lukeId == this.startDay) {
            // this.getLukeHeading();
            if (this.lukeId == this.todaysDay) {
                console.log('Calendarstatus satt til today, for vi er i riktig periode OG det er i dag!');
                this.setState({calendarStatus: 'today'});
                this.getLukeHeading();
            } else {
                console.log('Calendarstatus satt til open, for vi er i riktig periode og ser en tidligere åpnet luke');
                this.setState({calendarStatus: 'open'});
                this.getLukeHeading();
            }
        } else {
            this.setState({calendarStatus: 'lol'});
            console.log('Calendarstatus satt til lol, for dette makes no sense. Bunnslamresultat');
        }
        return this.state.calendarStatus;
    }


    componentDidMount() {
        this.setCalendarStatus();
        let dataUrl =  this.props.calendarUrl;
        fetch('http://kaja.me/wp-json/acf/v3/2016_luker?per_page=24')
            .then(response => response.json())            
            .then(luker => this.setState({luker: luker.reverse()}))
        // fetch('http://kaja.me/wp-json/acf/v3/2016_luker?per_page=24')
        //     .then(response => response.json())
        //     // .then(luke => this.luke = luke[hepp]);                       
        //     .then((dogs) => {
        //         this.setState({data: dogs})
            // });
            // console.log(this.state.dogs);
    }
    
    getCalendarStatus = () => {
        return this.state.calendarStatus;
    }

    getLukeHeading = () => {
        let luker = this.state.luker.slice(this.lukeId - 1, this.lukeId).map((luke, index) => {
            return <Viggoluke
            key={index}
            tekst = {luke.acf.tekst}
            nummer = {luke.acf.nummer}
            todaysDay = {this.todaysDay}
            />
        })
        console.log('getLukeHeading');
        // let luke;
        // let data;
        // let dataUrl =  this.props.calendarUrl;
        
        // console.log('Nei, bare om jeg er åpen da');
        // fetch('http://kaja.me/wp-json/acf/v3/2016_luker?per_page=24')
        //     .then(response => response.json())
        //     // .then(luke => this.luke = luke[hepp]);                       
        //     .then(luke => this.setState({luke: luke[2]}))
            
            // this.hasItStartedYet();
            // return luke;
    }

    getLukeContent(lall) {
        console.log(lall);
    }

	render() {
        // let luker = this.state.luker.slice(this.lukeId - 1, this.lukeId).map((luke, index) => {
        //     return <Viggoluke
        //     key={index}
        //     tekst = {luke.acf.tekst}
        //     nummer = {luke.acf.nummer}
        //     todaysDay = {this.todaysDay}
        //     />
        // })
        // let luker = this.state.luker.map((viggoluke, index) => {
        //     return <Viggoluke
        //     key={index}
        //     tekst = {viggoluke.acf.tekst}
        //     calendarStatus = {this.getCalendarStatus()}
        // />
        // })
        // console.log(this.getLukeHeading());
		return (
            <div className="wrapper">
                <div className="center-content">
                    <Header />
                    
                    {/* {this.state.dogsreacxt .map(item => <span>{item.tekst}</span>)} */}
                    Detta er ei lukeside
                    {/* {singel} */}
                    {/* {dogs} */}
                    {/* <Viggoluke /> */}
                </div>
            </div>
		);
	}
}
