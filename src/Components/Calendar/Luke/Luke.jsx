import React, { Component } from 'react';
import './Luke.scss';

class Luke extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="c_luke">
                <h2>{this.props.nummer}</h2>
                LOLLOLOLO
            </div>
        )
    }
}

export default Luke;