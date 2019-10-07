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
        if (this.state.lukeStatus === 'open') {
            this.setLukeStatus();
        }
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
        let hepp;
        if (this.calendarStatus === 'open' && this.props.todaysDay >= this.props.nummer) {
            lukeContent = (
                <div className="c_listeluke__inner">
                    <Link to={`/luke/${this.props.nummer}`}>
                        <h2>{this.props.nummer}</h2>
                        <img src={this.props.bilde.sizes.thumbnail} alt="Bilde av thumbnail"/>
                    </Link>
                </div>
            )
            hepp = 'open';
        }
        else if(this.calendarStatus === 'closed') {
            lukeContent = (
                <div className="c_listeluke__inner">
                    <Link to={`/luke/${this.props.nummer}`}>
                        <h2>{this.props.nummer}</h2>
                        <img src={this.props.bilde.sizes.thumbnail} alt="Bilde av thumbnail"/>
                    </Link>
                </div>
            )
            hepp = 'open';
        }
        else {
            lukeContent = (
                <div className="c_listeluke__inner">
                    <h2>{this.props.nummer}</h2>
                    <img src={square} alt=""/>
                </div>
            )
            hepp = 'closed';
        }
        return (
            <div className={`c_listeluke c_listeluke--${hepp}`}>            
                {lukeContent}
           </div>
        )
    }
}

export default Listeluke;