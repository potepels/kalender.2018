import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAlicorn } from '@fortawesome/pro-light-svg-icons';
import './Calendar.scss';
library.add(faAlicorn);



export default class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {luker: []}
    }

    componentDidMount() {
        let dataUrl =  "http://kaja.me/wp-json/acf/v3/forsideposter?_embed";
    }
	render() {
		return (
        <div className="c_calendar">
            <div className="center-content">
                Kaendar : )
                <FontAwesomeIcon className="alicorn" icon={faAlicorn} />
            </div>
        </div>
		);
	}
}
