import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Listeluke.scss';

class Listeluke extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.calendarStatus = this.props.calendarStatus;
        this.heading = 'Lukket';
    }

    render() {
        let lukeContent;
        if (this.props.todaysDay >= this.props.nummer) {
            lukeContent = (
                <div className="c_listeluke__inner">
                    <Link to={`/luke/${this.props.nummer}`}>                    
                        <h2>{this.props.nummer}</h2>
                        <h3>Åpen</h3>
                    </Link>
                </div>
            )
        }
        else {
            lukeContent = (
                <div className="c_listeluke__inner">
                    <h2>{this.props.nummer}</h2>
                    <h3>Stengt</h3>
                </div>
            )
        }
        return (
            <div className="c_listeluke">
                {lukeContent}
           </div>
        )
    }
}

export default Listeluke;