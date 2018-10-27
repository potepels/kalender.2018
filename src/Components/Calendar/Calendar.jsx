import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import './Calendar.scss';
library.add(faGhost);



export default class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {luker: []}
    }

    componentDidMount() {
        let dataUrl =  "http://kaja.me/wp-json/acf/v3/forsideposter?_embed";
    }
	render() {
        const element = <FontAwesomeIcon icon={faGhost} />
		return (
        <div className="c_calendar">
            <div className="center-content">
                Kaendar : )
                Favorite Food: <FontAwesomeIcon icon="ghost" />
            </div>
        </div>
		);
	}
}
