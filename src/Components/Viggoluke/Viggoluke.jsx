import React from 'react';
import './Viggoluke.scss';

class Viggoluke extends React.Component {
	constructor(props) {
        super(props);
    }
    
    
	render() {
        let lukeContent;
        let extraClass;
        
        // console.log(this.props);

		return (
        <div className={`c_viggoluke c_viggoluke--${this.props.calendarStatus}`}>
            <h1>{this.props.nummer}</h1>
            {this.props.tekst}
            <br />
            {this.props.calendarStatus}
            gheheh
            {/* {lukeContent} */}
        </div>
		);
	}
}
export default Viggoluke;