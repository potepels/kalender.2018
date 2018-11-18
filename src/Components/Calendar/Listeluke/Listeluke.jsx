import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Listeluke.scss';
import square from './square.png';

class Listeluke extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.calendarStatus = this.props.calendarStatus;
        this.state = {
            lukeStatus: 'closed',
        }
    }

    componentDidMount() {
        this.setLukeStatus();
    }

    setLukeStatus = () => {
        if(this.props.todaysDay >= this.props.nummer) {
            this.setState({lukeStatus: 'open'});
        }
    }

    getLukeStatus = () => {
        return this.state.lukeStatus;
    }

    render() {
        let lukeContent;
        if (this.props.todaysDay >= this.props.nummer) {
            lukeContent = (
                <div className="c_listeluke__inner">
                    <Link to={`/luke/${this.props.nummer}`}>
                        <h2>{this.props.nummer}</h2>
                        <img src={this.props.bilde.sizes.thumbnail} alt="Bilde av thumbnail"/>
                    </Link>
                </div>
            )
        }
        else {
            lukeContent = (
                <div className="c_listeluke__inner">
                    <h2>{this.props.nummer}</h2>
                    <img src={square} alt=""/>
                </div>
            )
        }
        return (
            <div className={`c_listeluke c_listeluke--${this.state.lukeStatus}`}>
                {/* <span className="c_listeluke__ribbon">
                    {this.props.nummer}
                </span> */}
                {lukeContent}
           </div>
        )
    }
}

export default Listeluke;