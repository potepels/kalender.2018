import React from 'react';
import Luke from './Luke/Luke';
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
        let dataUrl =  "http://kaja.me/wp-json/acf/v3/luke?_embed";
        fetch(dataUrl)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    luker: res
                })
            })
    }
	render() {
        let luker = this.state.luker.map((luke, index) => {
            return <Luke
                hepp = {luke.acf.tittel}
            />
        })
		return (
            <div className="c_calendar">
                <div className="center-content">
                    Kaendar : )
                    <FontAwesomeIcon className="alicorn" icon={faAlicorn} />
                    {luker}
                </div>
            </div>
		);
	}
}
